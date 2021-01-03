<template>
  <div>
    <v-navigation-drawer
      permanent
      :mini-variant="mini"
      app
    >
      <v-list-item :class="mini ? 'py-1 px-2' : ''">
        <v-list-item-avatar @click="miniToggle">
          <v-img :src="logo"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="title">
            MakanDI
          </v-list-item-title>
          <v-list-item-subtitle>
            Web Admin
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-btn
          icon
          @click.stop="miniToggle"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
        shaped
      >
        <div
          v-for="access in accesses"
          :key="access.name"
        >
          <v-list-group
            v-if="access.hasSub"
            link
            :to="access.path"
            no-action
            :prepend-icon="access.icon"
            :append-icon="access.hasSub ? undefined : ''"
          >
            <template v-slot:activator>
              <v-list-item-title>{{access.name}}</v-list-item-title>
            </template>

            <v-list-item
              v-for="subAccess in access.sub"
              :key="subAccess.name"
              link
              exact
              :to="`${access.path}/${subAccess.path}`"
            >
              <v-list-item-content>
                <v-list-item-title>{{ subAccess.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-item
            v-else
            link
            exact
            :to="access.path"
          >
            <v-list-item-icon>
              <v-icon>{{ access.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ access.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar color="white" elevation="2" app>
      <div>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">{{companyProfile.name}}</v-list-item-title>
            <v-list-item-subtitle>
              &nbsp;
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>
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
             <v-avatar width="35" height="35">
                <img
                  :src="profile.image_url"
                  :alt="profile.name"
                >
              </v-avatar>
          </v-btn>
        </template>

        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{profile.name}}</v-list-item-title>
                <v-list-item-subtitle>{{profile.role.name}}</v-list-item-subtitle>
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
      logo: 'https://firebasestorage.googleapis.com/v0/b/makan-di.appspot.com/o/public%2Fsite%2Flogo50x50white.png?alt=media&token=7ccd6b5e-c1b5-4240-89d4-29aa1e48ec6d'
    }
  },
  computed: {
    ...auth.mapState(['profile', 'companyProfile', 'accesses'])
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
