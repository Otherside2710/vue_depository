<template>
  <div>
      <v-flex class="d-flex flex-row justify-center">
      <v-list>
            <v-list-item
                v-for=" (item, index) in Processeurs_AMD"
                :key="index"
                >
            <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>
        </v-list>
        <v-list>
            <v-list-item
                v-for=" (item, index) in Processeurs_Intel"
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
    Processeurs_AMD: [
      { title: 'Processeurs AMD' },
      { title: 'AMD Ryzen 3 1200' },
      { title: 'AMD Ryzen 3 2300X' },
      { title: 'AMD Ryzen 5 2500X' },
      { title: 'AMD Ryzen 5 1400' },
      { title: 'AMD Ryzen 5 2600' },
      { title: 'AMD Ryzen 5 2600X' },
      { title: 'AMD Ryzen 7 2700E' },
      { title: 'AMD Ryzen 7 2700' },
      { title: 'AMD Ryzen 7 3700' },
      { title: 'AMD Ryzen Threadripper 2920X' }
    ],
    Processeurs_Intel: [
      { title: 'Processeurs Intel' },
      { title: 'i3-6300' },
      { title: 'i3-6320' },
      { title: 'i5-6400' },
      { title: 'i5-6500' },
      { title: 'i5-6600' },
      { title: 'i5-6600K' },
      { title: 'i7-6700' },
      { title: 'i7-6700K' },
      { title: 'i7-3770K' },
      { title: 'i7-9900K' },
      { title: '' }
    ]
  })

}
</script>
