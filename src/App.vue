<template>
  <v-app>
    <v-content>
      <router-view/>
      <Topline/>
      <PageA/>
    </v-content>
  </v-app>
</template>

<script>
import Topline from './components/Top_line'
import PageA from './components/PageA'

export default {
  name: 'App',
  components: {
    Topline,
    PageA
  },
  data: () => ({
    //
  })
}
</script>
