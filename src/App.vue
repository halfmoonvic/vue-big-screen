<template>
  <div id="app" :class="$route.name">
    <v-header></v-header>
    <sidebar></sidebar>
    <router-view/>
  </div>
</template>

<script>
import Header from 'components/header/header'
import Sidebar from 'components/sidebar/sidebar'

export default {
  name: 'app',
  components: {
    VHeader: Header,
    Sidebar
  }
}
</script>

<style>
</style>
