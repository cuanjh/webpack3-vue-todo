import Vuex from 'vuex'

import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     updateCount (state, num) {
//       console.log(num)
//       state.count = num
//     }
//   }
// })

// export default store
const isDev = process.env.NODE_ENV === 'development'

export default () => {
  return new Vuex.Store({
    strict: isDev, // 开发环境使用，规范代码
    state: defaultState,
    mutations,
    getters,
    actions,
    modules: {
      a: {
        state: {
          text: '1'
        }
      },
      b: {
        state: {
          text: '2'
        }
      }
    }
  })
}
