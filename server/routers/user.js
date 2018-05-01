const Router = require('koa-router')

const userRouter = new Router({ prefix: '/user' })

userRouter.post('/login', async ctx => {
  const user = ctx.request.body
  if (user.username === 'cc' && user.password === 'cc123') {
    ctx.session.user = {
      username: 'cc'
    }
    ctx.body = {
      success: true,
      data: {
        username: 'cc'
      }
    }
  } else {
    ctx.status = 400
    ctx.body = {
      success: false,
      message: 'username or password error'
    }
  }
})

module.exports = userRouter
