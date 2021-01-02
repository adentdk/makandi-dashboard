<template>
  <div id="DashboardLayout">
    <nav-navigation-bar></nav-navigation-bar>
    <router-view></router-view>
    <v-footer app>
      <p class="caption text-center">@2021 Greats</p>
    </v-footer>
  </div>
</template>

<script>
import NavNavigationBar from '@/components/NavNavigationBar'
import { createNamespacedHelpers } from 'vuex'

const auth = createNamespacedHelpers('auth')

export default {
  name: 'DashboardLayout',
  components: {
    NavNavigationBar
  },
  methods: {
    ...auth.mapActions(['getProfile', 'getCompanyProfile', 'getAccesses']),
    bootstrapCreated () {
      this.getProfile()
      this.getCompanyProfile()
      this.getAccesses()
    }
  },
  created () {
    this.bootstrapCreated()
  }
}
</script>
