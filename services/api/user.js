class User {
  ctx () {

  }

  authenticate (user, pass) {
    this.$store.commit('/state/logueed', true)
    return true
  }
}

module.export = User
