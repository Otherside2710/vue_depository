<template>
  <div>
   <v-flex class="d-flex flex-row justify-center">
    <v-list>
            <v-list-item
                v-for=" (item, index) in RAM_Corsair"
                :key="index"
                >
            <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>
        </v-list>
        <v-list>
            <v-list-item
                v-for=" (item, index) in RAM_Ballistix"
                :key="index"
                >
            <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>
        </v-list>
        <v-list>
            <v-list-item
                v-for=" (item, index) in RAM_HyperX"
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
    RAM_Corsair: [
      { title: 'Barrettes de ram Corsair' },
      { title: 'Corsair XMS3 2 Go DDR3 1333 MHz CL9' },
      { title: 'Corsair Vengeance Series 4 Go DDR3 1600 MHz CL9' },
      { title: 'Corsair ValueSelect 4 Go DDR4 2400MHz CL16' },
      { title: 'Corsair Vengeance LPX Series Low Profile 8 Go DDR4 3000 MHz CL16' },
      { title: 'Corsair ValueSelect 8 Go DDR4 2133 MHz CL15' },
      { title: 'Corsair Vengeance LPX Series Low Profile 8 Go DDR4 2666 MHz CL16' },
      { title: 'Corsair ValueSelect 16 Go DDR4 2133 MHz CL15' },
      { title: 'Corsair Vengeance LPX Series Low Profile 16 Go DDR4 2666 MHz CL16' },
      { title: 'Corsair Vengeance LPX Series Low Profile 16 Go DDR4 3000 MHz CL16' }
    ],
    RAM_Ballistix: [
      { title: 'Barrettes de ram Ballistix' },
      { title: 'Ballistix Sport 4 Go DDR4 2666 MHz CL16 - Rouge' },
      { title: 'Ballistix Elite 4 Go DDR4 3000 MHz CL15' },
      { title: 'Ballistix Sport LT 8 Go DDR4 2666 MHz CL16' },
      { title: 'Ballistix Sport LT 8 Go DDR4 3200 MHz CL16 SR' },
      { title: 'Ballistix Sport LT 16 Go DDR4 2400 MHz CL17' },
      { title: 'Ballistix Sport 16 Go DDR4 2666 MHz CL16 - Rouge' },
      { title: 'Ballistix Sport LT 16 Go DDR4 3200 MHz CL16' }
    ],
    RAM_HyperX: [
      { title: 'Barrettes de ram HyperX' },
      { title: 'HyperX Fury 4 Go DDR4 2666 MHz CL16' },
      { title: 'HyperX Fury 4 Go DDR4 3000 MHz CL15' },
      { title: 'HyperX Predator Noir 8 Go DDR4 2666 MHz CL13' },
      { title: 'HyperX Fury RGB 8 Go DDR4 3200 MHz CL16' },
      { title: 'HyperX Predator Noir 8 Go DDR4 4000 MHz CL19' },
      { title: 'HyperX Fury RGB 16 Go DDR4 2400 MHz CL15' },
      { title: 'HyperX Predator Noir 16 Go DDR4 2666 MHz CL13' },
      { title: 'HyperX Predator Noir 16 Go DDR4 3000 MHz CL15' },
      { title: 'HyperX Fury RGB 16 Go DDR4 3200 MHz CL16' },
      { title: ' ' }
    ]

  })
}
</script>
