<template>
  <v-app>

    <v-content>
      <Topline/>
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
