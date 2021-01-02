<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar color="white" app>
      <v-app-bar-nav-icon color="primary" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title class="mr-8 font-weight-light">Cafe Badilico</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'NavNavigationBar',
  data () {
    return {
      drawer: false
    }
  }
}
</script>
