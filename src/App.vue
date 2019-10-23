<template>
  <v-app id="app">
    <Topline/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Topline from './components/Top_line'

export default {
  name: 'App',
  components: {
    Topline
  },
  data: () => ({
    //
  })
}
</script>
