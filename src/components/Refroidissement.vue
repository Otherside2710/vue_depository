<template>
  <div>
      <div class="d-none d-sm-flex flex-row justify-center">
        <v-list>
            <v-list-item
                v-for=" (item, index) in VENTILATEURS"
                :key="index"
                >
            <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>
            </v-list>
            <v-list>
            <v-list-item
                v-for=" (item, index) in WATERCOOLING"
                :key="index"
                >
            <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>
        </v-list>
      </div>
      <div class="d-flex d-sm-none flex-column" style="justify-content: center;">
        <v-list>
            <v-list-item
                v-for=" (item, index) in VENTILATEURS"
                :key="index"
                >
            <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>
            </v-list>
            <v-list>
            <v-list-item
                v-for=" (item, index) in WATERCOOLING"
                :key="index"
                >
            <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>
        </v-list>
      </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    VENTILATEURS: [
      { title: 'Ventilateurs/ventirad' },
      { title: 'be quiet! Dark Rock 4' },
      { title: 'Cooler Master Hyper TX3 Evo' },
      { title: 'be quiet! Pure Rock' },
      { title: 'Cooler Master Hyper 212 Black Edition' },
      { title: 'be quiet! Shadow Rock Slim' }
    ],
    WATERCOOLING: [
      { title: 'Watercooling' },
      { title: 'Cooler Master MasterLiquid ML240L RGB' },
      { title: 'Corsair Hydro Series H100x' },
      { title: 'Corsair Hydro Series H150i PRO' },
      { title: 'Corsair Hydro Series H115i PLATINUM' },
      { title: 'Corsair Hydro Series H115i PRO' },
      { title: '' }
    ]
  })
}
</script>
