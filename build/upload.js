const qiniu = require('qiniu')
const fs = require('fs')
const path = require('path')

const cdnConfig = require('../app.config').cdn

const {
  ak, sk, bucket
} = cdnConfig

const mac = new qiniu.auth.digest.Mac(ak, sk)

const config = new qiniu.conf.Config()
config.zone = qiniu.zone.Zone_z0

const doUpload = (key, file) => {
  const options = {
    scope: bucket + ':' + key
  }

  const formUpload = new qiniu.form_up.FormUploader(config)
  const putExtra = new qiniu.form_up.PutExtra()
  const putPolicy = new qiniu.rs.PutPolicy(options)
  const uploadToken = putPolicy.uploadToken(mac)
  return new Promise((resolve, reject) => {
    formUpload.putFile(uploadToken, key, file, putExtra, (error, body, info) => {
      if (error) {
        return reject(error)
      }
      if (info.statusCode === 200) {
        resolve(body)
      } else {
        reject(body)
      }
    })
  })
}

const publicPath = path.join(__dirname, '../public')
const uploadAll = (dir, prefix) => {
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    const filePath = path.join(dir, file)
    const key = prefix ? `${prefix}/${file}` : file
    if (fs.lstatSync(filePath).isDirectory()) {
      return uploadAll(filePath, key)
    }
    doUpload(key, filePath)
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
  })
}

uploadAll(publicPath)
