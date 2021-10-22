export const state = () => ({
  loggued: false
})

export const mutations = {
  commit (state, value) {
    state.loggued = true
  }
}
