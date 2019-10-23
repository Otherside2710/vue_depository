<template>
    <div>
      <v-flex class="d-flex flex-row justify-center">
        <v-list>
            <v-list-item
                v-for=" (item, index) in PITI_BOITIER"
                :key="index"
                >
            <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>
        </v-list>
        <v-list>
            <v-list-item
                v-for=" (item, index) in MOY_BOITIER"
                :key="index"
                >
            <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>
        </v-list>
        <v-list>
            <v-list-item
                v-for=" (item, index) in GD_BOITIER"
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
    GD_BOITIER: [
      { title: 'Grand boîtier' },
      { title: 'be quiet! Silent Base 801 (Noir)' },
      { title: 'Fractal Design Define XL R2 Black Pearl' },
      { title: 'Phanteks Enthoo Pro' },
      { title: 'be quiet! Dark Base 900 (Orange)' },
      { title: 'be quiet! Silent Base 801 (Orange)' },
      { title: 'be quiet! Silent Base 801 Window (Orange)' },
      { title: 'be quiet! Silent Base 801 Window (Argent)' },
      { title: 'Corsair Obsidian 750D Airflow Noir' },
      { title: 'be quiet! Silent Base 801 Window (Noir)' },
      { title: 'Aerocool Tor Pro' },
      { title: '' }
    ],
    MOY_BOITIER: [
      { title: 'Boîtier de taille moyenne ' },
      { title: 'Advance Origin' },
      { title: 'Cooler Master N300 (KKN1)' },
      { title: 'Fractal Design Define C Noir' },
      { title: 'be quiet! Pure Base 600 (Noir)' },
      { title: 'Antec P7 Silent' },
      { title: 'be quiet! Pure Base 600 Window Orange' },
      { title: 'Zalman Z7 NEO' },
      { title: 'Aerocool Cylon (Noir)' },
      { title: 'Zalman S3' },
      { title: 'Corsair Carbide 270R Window' }

    ],
    PITI_BOITIER: [
      { title: 'Petit boîtier' },
      { title: 'Zalman ZM-T4' },
      { title: 'Cooler Master Elite RC-342 - Noir' },
      { title: 'Zalman T5 Noir' },
      { title: 'SilverStone Precision PS13 (noir)' },
      { title: 'Cooler Master N200 Noir, Cooler Master MasterBox Q300L' },
      { title: 'Aerocool Cylon Mini (noir)' },
      { title: 'Cooler Master Silencio S400' },
      { title: 'Spirit of Gamer District #16' },
      { title: 'Cooler Master MasterBox Lite 3.1 TG' }
    ]
  })
}
</script>
