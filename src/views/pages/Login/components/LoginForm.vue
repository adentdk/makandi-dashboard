<template>
  <v-form
    ref="form"
    lazy-validation
    v-model="valid"
  >
    <v-text-field
      label="Email"
      color="white"
      required
      single-line
      outlined
      dark
      autofocus
      rounded
      v-model="email"
      :rules="emailRules"
      :disabled="loading"
    ></v-text-field>

    <v-text-field
      label="Password"
      color="white"
      required
      single-line
      outlined
      dark
      rounded
      v-model="password"
      :rules="passwordRules"
      :disabled="loading"
      :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
      :type="passwordShow ? 'text' : 'password'"
      @click:append="passwordShow = !passwordShow"
    ></v-text-field>

    <div class="d-flex justify-end mb-6">
      <v-btn
        class="forgot-password pa-0"
        color="white"
        x-small
        text
        :disabled="loading"
      >
        Forgot Password ?
      </v-btn>
    </div>

    <v-btn
      class="mt-5"
      color="white"
      block
      outlined
      large
      rounded
      @click="onSubmit"
      :disabled="loading"
    >
      <v-progress-circular
        v-if="loading"
        indeterminate
        color="white"
      ></v-progress-circular>
      <span v-else>Login</span>
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'LoginForm',
  props: [
    'loading'
  ],
  data () {
    return {
      valid: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required'
      ],
      passwordShow: false
    }
  },
  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    onSubmit () {
      const { valid, email, password, validate } = this

      validate()
      if (valid) {
        this.$emit('onSubmit', { email, password })
      }
    }
  }
}
</script>
