<template>
  <v-dialog
    v-model="show"
    persistent
    width="300"
  >
    <v-card
      color="white"
      dark
    >
      <v-card-text>
        Loading
        <v-progress-linear
          indeterminate
          color="primary"
          class="mb-0"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'AppLoading',
  props: {
    value: Boolean
  },
  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
