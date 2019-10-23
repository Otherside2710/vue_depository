<template>
  <div>
      <v-flex class="d-flex flex-row justify-center">
          <v-list>
            <v-list-item
                v-for=" (item, index) in SSD"
                :key="index"
                >
            <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>
           </v-list>
           <v-list>
            <v-list-item
                v-for=" (item, index) in HDD"
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
    SSD: [
      { title: 'SSD' },
      { title: 'Samsung SSD 970 EVO Plus M.2 PCIe NVMe 250 Go' },
      { title: 'SanDisk Ultra 3D SSD - 250 Go' },
      { title: 'Kingston KC2000 M.2 PCIe NVMe 250 Go' },
      { title: 'Samsung SSD 970 PRO M.2 PCIe NVMe 512 Go' },
      { title: 'Samsung SSD 860 PRO 512 Go, Intel SSD 660p 512 Go' },
      { title: 'Samsung SSD 860 EVO 1 To' },
      { title: 'SanDisk Ultra 3D SSD - 1 To' },
      { title: 'Kingston SSD A2000 1 To' },
      { title: 'Samsung SSD 860 EVO 2 To' },
      { title: 'SanDisk Ultra 3D SSD - 2 To' },
      { title: 'Corsair Force MP600 2 To' },
      { title: '' }
    ],
    HDD: [
      { title: 'Disque Durs' },
      { title: 'Seagate BarraCuda 1 To (ST1000DM010)' },
      { title: 'Western Digital WD Blue Desktop 1 To SATA 6Gb/s 64 Mo' },
      { title: 'Seagate BarraCuda Pro 1 To (ST1000LM049)' },
      { title: 'Seagate BarraCuda 2 To (ST2000DM008)' },
      { title: 'Western Digital WD Red 2 To SATA 6Gb/s' },
      { title: 'Toshiba P300 2 To (Bulk)' },
      { title: 'Seagate BarraCuda 3 To (ST3000DM007)' },
      { title: 'Western Digital WD Red 3 To SATA 6Gb/s' },
      { title: 'Toshiba P300 3 To (Bulk)' },
      { title: 'Seagate BarraCuda 4 To (ST4000DM004)' },
      { title: 'Western Digital WD Red 4 To SATA 6Gb/s' },
      { title: 'Toshiba X300 4 To (Bulk)' },
      { title: 'Toshiba X300 5 To, Toshiba S300 5To' },
      { title: '' }
    ]
  })
}
</script>
