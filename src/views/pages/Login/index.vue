<template>
  <v-main class="primary">
    <div class="height-100 d-flex flex-column justify-center">
      <v-container>
        <v-row justify="center" align="center" dense no-gutters>
          <v-col cols="12" sm="6" md="4" xl="3">
            <h1 class="text-center mb-10 white--text  ">MakanDi</h1>
            <LoginForm
              :loading="loading"
              @onSubmit="onSubmit"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <app-loading v-model="loading" />
  </v-main>
</template>

<script>

import AppLoading from '@/components/AppLoading'

import LoginForm from './components/LoginForm'

import { createNamespacedHelpers } from 'vuex'

const auth = createNamespacedHelpers('auth')

export default {
  name: 'Home',
  components: {
    AppLoading,
    LoginForm
  },
  computed: {
    ...auth.mapState(['loading'])
  },
  methods: {
    ...auth.mapActions(['doLogin']),
    onSubmit ({ email, password }) {
      this.doLogin({ email, password }).then(() => {
        // setTimeout(() => {
        //   this.$router.go()
        // }, 250)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.forgot-password {
  margin-top: -20px;
}
</style>
