<template>
    <div>
      <v-flex class="d-flex flex-row justify-center">
        <v-list>
            <v-list-item
                v-for=" (item, index) in CLAVIER"
                :key="index"
                >
            <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>
        </v-list>
        <v-list>
            <v-list-item
                v-for=" (item, index) in SOURIS"
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
    CLAVIER: [
      { title: 'Claviers' },
      { title: 'Logitech Keyboard K120 for Business' },
      { title: 'Logitech Corded Keyboard K280e' },
      { title: 'Corsair Gaming K55 RGB' },
      { title: 'ROCCAT Vulcan 120 AIMO (Switch Titan)' },
      { title: 'Logitech Wireless Keyboard K270' },
      { title: 'ROCCAT Vulcan 122 AIMO (Switch Titan)' },
      { title: 'Corsair Gaming K95 RGB (Cherry MX Speed Silver)' },
      { title: 'SteelSeries Apex Pro' },
      { title: 'Corsair K57 RGB, SteelSeries Apex 150' }
    ],
    SOURIS: [
      { title: 'Souris' },
      { title: 'Logitech B100 Optical USB Mouse (Noir)' },
      { title: 'Logitech G502 Hero, Logitech M171 Wireless Mouse (Noir)' },
      { title: 'Logitech G402 Hyperion Fury, SteelSeries Rival 110 (noir)' },
      { title: 'Corsair Ironclaw RGB Wireless' },
      { title: 'Corsair Gaming Glaive RGB (aluminium)' },
      { title: 'SteelSeries Rival 310' },
      { title: 'SteelSeries Sensei 310' },
      { title: 'ROCCAT Kova (noire)' },
      { title: 'ROCCAT Kain 120 AIMO Noir' },
      { title: 'ROCCAT Kone AIMO Noir' },
      { title: '' }
    ]
  })
}
</script>
