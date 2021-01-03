<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      scrollable
      :fullscreen="isMobile"
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span v-if="mode === 'add'" class="headline">Create New Access</span>
          <span v-else class="headline">Edit Access</span>
        </v-card-title>
        <v-card-text>
          <v-container>
             <v-form
                ref="form"
                lazy-validation
                v-model="valid"
              >
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    label="Access Name"
                    v-model="name"
                    required
                    :disabled="loading"
                    :rules="nameRules"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    label="Access Path"
                    hint="Start with /, end without /"
                    v-model="path"
                    required
                    :disabled="loading"
                    :rules="pathRules"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    label="Access Icon"
                    v-model="icon"
                    hint="Icon name from mdi"
                    persistent-hint
                    :append-icon="icon"
                    required
                    :disabled="loading"
                    :rules="iconRules"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-select
                    v-model="type"
                    :items="['menu', 'api']"
                    label="Access Type"
                    required
                    :disabled="loading"
                  ></v-select>
                </v-col>
              </v-row>

              <v-row no-gutters dense class="mt-10">
                <v-col cols="12">
                  <p class="subtitle-2">Sub Accesses</p>
                </v-col>

                <v-col cols="12" v-for="(subAccess, i) in subAccesses" :key="i">
                  <fieldset class="pa-5 my-2 position-relative">
                    <legend>{{ subAccess.name || `Item ${i + 1}`}}</legend>
                    <v-btn icon class="delete-button" color="error" x-large>
                      <v-icon size="36">mdi-close-circle</v-icon>
                    </v-btn>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-text-field
                          label="Access Name"
                          v-model="subAccess.name"
                          required
                          :disabled="loading"
                          :rules="nameRules"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-text-field
                          label="Access Path"
                          hint="Start with /, end without /"
                          v-model="subAccess.path"
                          required
                          :prefix="path"
                          :disabled="loading"
                          :rules="pathRules"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-text-field
                          label="Access Icon"
                          v-model="subAccess.icon"
                          hint="Icon name from mdi"
                          persistent-hint
                          :append-icon="subAccess.icon"
                          :disabled="loading"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-select
                          v-model="subAccess.type"
                          :items="['menu', 'api']"
                          label="Access Type"
                          required
                          :disabled="loading"
                        ></v-select>
                      </v-col>
                    </v-row>
                  </fieldset>
                </v-col>
                <v-col cols="12">
                  <v-btn block outlined color="primary" @click="onAddSubAccess">Add Sub Access</v-btn>
                </v-col>
              </v-row>
             </v-form>
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
            color="blue darken-1"
            text
            :loading="loading"
            @click="onSubmit"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

import { createNamespacedHelpers } from 'vuex'
const access = createNamespacedHelpers('access')

export default {
  name: 'AccessFormDialog',
  props: {
    value: Boolean,
    accessId: Number,
    mode: {
      type: String,
      validator: (val) => ['edit', 'add'].includes(val)
    }
  },
  data () {
    return {
      isMobile: false,
      valid: false,
      name: null,
      nameRules: [
        v => !!v || 'Access Name is required'
      ],
      path: '',
      pathRules: [
        v => !!v || 'Access Path is required'
      ],
      icon: null,
      iconRules: [
        v => !!v || 'Access Icon is required'
      ],
      subAccesses: [],
      type: 'menu'
    }
  },
  computed: {
    ...access.mapState(['loading', 'accesss']),
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
  methods: {
    ...access.mapActions(['getAccessDetail']),
    onResize () {
      this.isMobile = window.innerWidth < 600
    },
    onAddSubAccess () {
      this.subAccesses.push({
        name: '',
        path: '/',
        icon: '',
        type: 'menu'
      })
    },
    validate () {
      this.$refs.form.validate()
    },
    onSubmit () {
      const { name, path, icon, type, validate, valid, accessId, subAccesses } = this

      validate()

      if (valid) {
        this.$emit('onSubmit', {
          id: accessId,
          name,
          type,
          path,
          icon,
          sub: subAccesses
        })
        this.dialog = false
      }
    }
  },
  watch: {
    value (nextValue, oldValue) {
      const vm = this
      if (nextValue) {
        if (vm.mode === 'edit') {
          this.getAccessDetail(vm.accessId).then(access => {
            vm.name = access.name || ''
            vm.path = access.path || '/'
            vm.icon = access.icon || ''
            vm.type = access.type || ''
            vm.subAccesses = access.sub || []
          })
        } else {
          vm.name = ''
          vm.path = '/'
          vm.icon = ''
          vm.type = ''
          vm.subAccesses = []
        }
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

<style lang="scss" scoped>
.position-relative {
  position: relative;
}
.delete-button {
  position: absolute;
  top: 0px;
  right: -11px;
}
</style>
