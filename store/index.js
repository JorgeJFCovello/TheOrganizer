export const state = () => ({
  loggued: false
})

export const mutations = {
  loggued (state, value) {
    state.loggued = value
  }
}

export const getters = {
  loggued: state => state.loggued
}
