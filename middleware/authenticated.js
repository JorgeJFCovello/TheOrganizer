export default function ({ app, store, redirect }) {
  app.$userService.authorize().then((response) => {
    if (!response) {
      store.commit('state/loggued', !!response)
      return redirect('/logout')
    }
  })
    .catch(() => {
      return redirect('/logout')
    })
}
