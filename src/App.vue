<template>
  <v-app>

    <v-content>
      <Topline/>
    </v-content>
  </v-app>
</template>

<script>
import Topline from './components/Top_line'
import { ValidationProvider } from 'vee-validate'

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
