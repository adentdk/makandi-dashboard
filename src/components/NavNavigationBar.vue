<template>
  <div>
    <v-navigation-drawer
      permanent
      :mini-variant="mini"
      app
    >
      <v-list-item class="px-2">
        <v-list-item-avatar @click="miniToggle">
          <v-img :src="logo"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>MakanDI</v-list-item-title>

        <v-btn
          icon
          @click.stop="miniToggle"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

    </v-navigation-drawer>

    <v-app-bar color="white" elevation="2" app>
      <v-spacer></v-spacer>
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="100"
        max-width="300"
        offset-x
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                >
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Aden Trisna Daud Kurnia</v-list-item-title>
                <v-list-item-subtitle>Super Admin</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn
                  class="primary--text"
                  icon
                >
                  <v-icon>mdi-account-settings</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="onLogout"
            >
              Logout
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const auth = createNamespacedHelpers('auth')

export default {
  name: 'NavNavigationBar',
  data () {
    return {
      mini: false,
      menu: false,
      logo: 'https://firebasestorage.googleapis.com/v0/b/makan-di.appspot.com/o/public%2Fsite%2Flogo200x200white.png?alt=media&token=b167ef3b-14df-43c9-a59c-84e64b19c403'
    }
  },
  methods: {
    ...auth.mapMutations(['setToken']),
    miniToggle () {
      this.mini = !this.mini
    },
    onLogout () {
      this.setToken(null)

      this.$nextTick(() => {
        this.$router.go()
      })
    }
  }
}
</script>
