<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="300px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">{{ title }}</span>
        </v-card-title>
        <v-card-text class="text-center">
          <v-container>
            <v-icon size="78" :color="iconColor">{{notifIcon}}</v-icon>
            <p class="subtitle-2 text-capitalize">{{ message }}</p>
          </v-container>
        </v-card-text>
        <v-card-actions >
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

export default {
  name: 'AppModalDialog',
  props: {
    value: Boolean,
    type: {
      type: String,
      default: 'info',
      validator: (val) => ['success', 'info', 'error'].includes(val)
    },
    title: {
      type: String,
      default: 'Notification'
    },
    message: {
      type: String,
      default: 'message',
      required: true
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
    notifIcon () {
      switch (this.type) {
        case 'success':
          return 'mdi-checkbox-marked-circle-outline'
        case 'info':
          return 'mdi-information'
        case 'error':
          return 'mdi-close-circle-outline'
        default:
          return 'mdi-checkbox-blank'
      }
    },
    iconColor () {
      switch (this.type) {
        case 'success':
          return 'success'
        case 'info':
          return 'blue ligthen-3'
        case 'error':
          return 'error'
        default:
          return 'primary'
      }
    }
  }
}
</script>
