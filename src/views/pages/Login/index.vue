<template>
  <v-main class="primary">
    <div class="height-100 d-flex flex-column justify-center">
      <v-container>
        <v-row justify="center" align="center" dense no-gutters>
          <v-col cols="12" sm="6" md="4" xl="3">
            <div class="d-flex justify-center mb-10">
              <v-img
                max-height="100"
                max-width="100"
                :lazy-src="logo.thumb"
                :src="logo.source"
              ></v-img>
            </div>
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
  data () {
    return {
      logo: {
        source: 'https://firebasestorage.googleapis.com/v0/b/makan-di.appspot.com/o/public%2Fsite%2Flogo200x200.png?alt=media&token=3bb3f468-5e50-4f5e-a88d-9483b91ad128',
        thumb: 'https://firebasestorage.googleapis.com/v0/b/makan-di.appspot.com/o/public%2Fsite%2Flogo50x50.png?alt=media&token=a0fd289b-b3cf-49e5-ade5-f2f63516dee3'
      }
    }
  },
  computed: {
    ...auth.mapState(['loading'])
  },
  methods: {
    ...auth.mapActions(['doLogin']),
    onSubmit ({ email, password }) {
      this.doLogin({ email, password }).then(() => {
        setTimeout(() => {
          const redirect = this.$route.query.redirect || '/dashboard'
          this.$router.replace(redirect)
        }, 250)
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
