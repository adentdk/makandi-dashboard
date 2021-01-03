<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      :fullscreen="isMobile"
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">{{title}}</span>
        </v-card-title>
        <v-card-text class="text-center">
          <v-container v-if="validateBeforeSubmit">
             <v-form
                ref="form"
                lazy-validation
                v-model="valid"
                @submit.prevent=""
              >
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                >
                  <p class="subtitle-1 text-left black--text">
                    Type
                    <span class="font-weight-bold">" {{validatorValue}} "</span>
                    to continue delete action
                  </p>
                  <v-text-field
                    label="Type Following Instruction"
                    v-model="validator"
                    required
                    persistent-hint
                    :hint="`Please type ${validatorValue}`"
                    :disabled="loading"
                    :rules="validatorRules"
                  ></v-text-field>
                </v-col>
              </v-row>
             </v-form>
          </v-container>
          <v-container v-else>
            <v-icon size="78">mdi-help-circle-outline</v-icon>
          </v-container>
        </v-card-text>
        <v-card-actions >
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            :loading="loading"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="error"
            text
            :loading="loading"
            @click="onSubmit"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

export default {
  name: 'DeleteDialog',
  props: {
    loading: Boolean,
    value: Boolean,
    validatorValue: String,
    title: {
      type: String,
      default: 'Delete Action'
    },
    validateBeforeSubmit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isMobile: false,
      valid: false,
      validator: '',
      validatorRules: [
        v => v === this.validatorValue || 'Please type following intruction'
      ]
    }
  },
  computed: {
    dialog: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    },
    formMode () {
      return this.mode
    }
  },
  watch: {
    value (nextValue) {
      if (nextValue) {
        const vm = this
        if (vm.valid) {
          vm.valid = false
        }
      }
    }
  },
  methods: {
    onResize () {
      this.isMobile = window.innerWidth < 600
    },
    validate () {
      this.$refs.form.validate()
    },
    onSubmit () {
      const { validateBeforeSubmit, validate, valid } = this

      if (validateBeforeSubmit) {
        validate()
        if (valid) {
          this.$emit('onSubmit')
          this.dialog = false
          this.validator = null
        }
      } else {
        this.$emit('onSubmit')
        this.dialog = false
        this.validator = null
      }
    }
  },
  mounted () {
    this.onResize()

    window.addEventListener('resize', this.onResize, { passive: true })
  },
  beforeDestroy () {
    if (typeof window === 'undefined') return

    window.removeEventListener('resize', this.onResize, { passive: true })
  }
}
</script>
