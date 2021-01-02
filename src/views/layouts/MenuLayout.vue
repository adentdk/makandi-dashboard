<template>
  <div id="MenuLayout">
    <nav-navigation-bar></nav-navigation-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavNavigationBar from '@/components/NavNavigationBar'

export default {
  name: 'MenuLayout',
  components: {
    NavNavigationBar
  }
}
</script>
