<template>
  <v-app>
    <v-content>
      <Topline/>
      <Navigation/>
    </v-content>
  </v-app>
</template>

<script>
import Topline from './components/Top_line'
import Navigation from './components/NavigationDrawer'

export default {
  name: 'App',
  components: {
    Topline,
    Navigation
  },
  data: () => ({
    //
  })
}
</script>
