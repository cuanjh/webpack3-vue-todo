export default {
  updateCount (state, payload) {
    console.log(payload.num2)
    state.count = payload.num
  }
}
