<template>
  <div>
    <v-flex class="d-flex flex-row justify-center">
      <v-list>
            <v-list-item
                v-for=" (item, index) in CG_Nvidia"
                :key="index"
                >
            <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>
        </v-list>
        <v-list>
            <v-list-item
                v-for=" (item, index) in CG_AMD"
                :key="index"
                >
            <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-flex>
  </div>
</template>
<script>
export default {
  data: () => ({
    CG_Nvidia: [
      { title: 'Cartes Graphiques Nvidia' },
      { title: 'GeForce RTX 2080 Ti' },
      { title: 'GeForce RTX 2080 Super' },
      { title: 'GeForce RTX 2080' },
      { title: 'GeForce RTX 2070' },
      { title: 'GeForce RTX 2070 Super' },
      { title: 'GeForce RTX 2060 Super' },
      { title: 'GeForce RTX 2060' },
      { title: 'GeForce GTX 1660 Ti' },
      { title: 'GeForce GTX 1660' },
      { title: 'GeForce GTX 1080' }
    ],
    CG_AMD: [
      { title: 'Cartes Graphiques AMD' },
      { title: 'Radeon RX 590' },
      { title: 'Radeon RX 580' },
      { title: 'Radeon RX 5700 XT' },
      { title: 'Radeon RX 5700' },
      { title: 'Radeon RX 570' },
      { title: 'Radeon RX 560' },
      { title: 'Radeon RX 550' },
      { title: 'Radeon RX 230' },
      { title: 'Radeon PRO WX 7100' },
      { title: 'Radeon PRO WX 5100' },
      { title: '' }
    ]
  })

}
</script>
