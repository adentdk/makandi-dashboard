<template>
  <div id="DashboardLayout">
    <nav-navigation-bar></nav-navigation-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavNavigationBar from '@/components/NavNavigationBar'

export default {
  name: 'DashboardLayout',
  components: {
    NavNavigationBar
  }
}
</script>
