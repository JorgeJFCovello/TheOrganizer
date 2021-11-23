<template>
  <div>
    <v-container>
      <v-card raised>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="username" label="Username" title="username" :rules="noEmptyRules" @keyup.enter="enterInSystem()" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="password"
                type="password"
                label="Password"
                :rules="noEmptyRules"
                title="password"
                @keyup.enter="enterInSystem()"
              />
            </v-col>
          </v-row>
          <v-card-actions>
            <v-row>
              <v-btn block @click="enterInSystem()">
                log in!
              </v-btn>
            </v-row>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>

export default ({
  data () {
    return {
      username: null,
      password: null,
      noEmptyRules: [
        (value) => {
          return value != null && value.length === 0 ? 'Campo Obligatorio' : true
        }
      ]
    }
  },
  methods: {

    enterInSystem () {
      const response = this.$userService.authenticate(this.username, this.password)
      if (!response) { return response }
      this.$store.commit('loggued', true)
      this.$router.push('/Dashboard')
    }
  }
})
</script>
