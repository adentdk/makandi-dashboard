<template>
  <v-main class="grey lighten-4 height-100">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <div class="d-flex justify-space-between">
            <h1 class="black--text">Access Management</h1>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="d-flex justify-space-between">
            <v-btn color="primary" @click="toogleFormDialog('add')">
              Add New Item
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12">
          <v-card>
            <v-card-title>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="accesses"
              :search="search"
            >
              <template v-slot:item.number="{ item }">
                <span>{{ accesses.findIndex(access => access.id === item.id) + 1 }}</span>
              </template>

              <template v-slot:item.action="{ item }">
                <v-btn small icon :href="`accesses/${item.id}/edit`" @click.prevent="onEditPressed(item.id)">
                  <v-icon>mdi-pencil-circle</v-icon>
                </v-btn>
                <v-btn small icon :href="`accesses/${item.id}/delete`" @click.prevent="onDeletePressed(item)">
                  <v-icon>mdi-delete-circle</v-icon>
                </v-btn>
              </template>

              <template v-slot:item.icon="{ item }">
                <v-chip small>
                  <v-icon>
                    {{ item.icon }}
                  </v-icon>
                  &nbsp;
                  {{ item.icon }}
                </v-chip>
              </template>

              <template v-slot:item.type="{ item }">
                <v-chip small :color="item.type === 'menu' ? 'primary' : 'error'">
                  {{ item.type }}
                </v-chip>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <AccessFormDialog
      v-model="formDialog"
      :mode="mode"
      :accessId="accessId"
      @onSubmit="onFormDialogSave"
    />
    <AppDeleteDialog
      v-model="deleteDialog"
      :loading="loading"
      :validateBeforeSubmit="true"
      :validatorValue="accessName"
      @onSubmit="onDeleteAction"
    />
  </v-main>
</template>

<script>
import AppDeleteDialog from '@/components/AppDeleteDialog'
import AccessFormDialog from './components/AccessFormDialog'

import { createNamespacedHelpers } from 'vuex'
const access = createNamespacedHelpers('access')
export default {
  name: 'AccessManagement',
  components: {
    AccessFormDialog,
    AppDeleteDialog
  },
  data () {
    return {
      formDialog: false,
      deleteDialog: false,
      mode: 'add',
      accessId: null,
      accessName: null,
      search: '',
      headers: [
        {
          text: '#',
          align: 'end',
          value: 'number',
          width: 50
        },
        {
          text: 'Name',
          align: 'start',
          value: 'name'
        },
        {
          text: 'Sub Accesses',
          value: 'sub_count',
          width: 130
        },
        {
          text: 'Path',
          value: 'path'
        },
        {
          text: 'Icon',
          value: 'icon'
        },
        {
          text: 'Type',
          value: 'type',
          sortable: false
        },
        {
          text: 'Actions',
          value: 'action',
          sortable: false,
          filterable: false,
          searchable: false
        }
      ]
    }
  },
  computed: {
    ...access.mapState(['accesses', 'loading'])
  },
  methods: {
    ...access.mapActions([
      'getAccesses',
      'saveAccess',
      'updateAccess',
      'deleteAccess']),
    bootstrapCreated () {
      this.getAccesses()
    },
    toogleFormDialog (mode, accessId = null) {
      this.mode = mode
      this.accessId = accessId
      this.$nextTick(() => {
        this.formDialog = !this.formDialog
      })
    },
    toogleDeleteDialog (access = null) {
      this.accessId = access.id
      this.accessName = access.name
      this.$nextTick(() => {
        this.deleteDialog = !this.deleteDialog
      })
    },
    onEditPressed (accessId) {
      this.toogleFormDialog('edit', accessId)
    },
    onDeletePressed (access) {
      this.toogleDeleteDialog(access)
    },
    onFormDialogSave (data) {
      if (this.mode === 'add') {
        this.saveAccess(data)
      } else {
        this.updateAccess(data)
      }
    },
    onDeleteAction () {
      this.deleteAccess(this.accessId)
    }
  },
  created () {
    this.bootstrapCreated()
  }
}
</script>
