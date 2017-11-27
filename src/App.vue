<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
import Header from 'components/header/header'

export default {
  name: 'app',
  components: {
    VHeader: Header
  }
}
</script>

<style>
</style>
