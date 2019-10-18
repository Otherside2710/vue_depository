<template>
    <div>
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
    </div>
</template>
<script>
export default {
}
</script>

<script>
export default {
    data: () => ({
        Processeurs_AMD: [
            { title: 'Processeurs AMD'},
            { title: 'AMD Ryzen 3 1200'},
            { title: 'AMD Ryzen 3 2300X'},
            { title: 'AMD Ryzen 5 2500X'},
            { title: 'AMD Ryzen 5 1400'},
            { title: 'AMD Ryzen 5 2600'},
            { title: 'AMD Ryzen 5 2600X'},
            { title: 'AMD Ryzen 7 2700E'},
            { title: 'AMD Ryzen 7 2700'},
            { title: 'AMD Ryzen 7 3700'},
            { title: 'AMD Ryzen Threadripper 2920X'}
        ],
        Processeurs_Intel: [
            { title: 'Processeurs Intel'},
            { title: 'i3-6300'},
            { title: 'i3-6320'},
            { title: 'i5-6400'},
            { title: 'i5-6500'},
            { title: 'i5-6600'},
            { title: 'i5-6600K'},
            { title: 'i7-6700'},
            { title: 'i7-6700K'},
            { title: 'i7-3770K'},
            { title: 'i7-9900K'}
        ],
        CG_Nvidia: [
            { title: 'Cartes Graphiques Nvidia'},
            { title: 'GeForce RTX 2080 Ti'},
            { title: 'GeForce RTX 2080 Super'},
            { title: 'GeForce RTX 2080'},
            { title: 'GeForce RTX 2070'},
            { title: 'GeForce RTX 2070 Super'},
            { title: 'GeForce RTX 2060 Super'},
            { title: 'GeForce RTX 2060'},
            { title: 'GeForce GTX 1660 Ti'},
            { title: 'GeForce GTX 1660'},
            { title: 'GeForce GTX 1080'},
        ],
        CG_AMD: [
            { title: 'Cartes Graphiques AMD'},
            { title: 'Radeon RX 590'},
            { title: 'Radeon RX 580'},
            { title: 'Radeon RX 5700 XT'},
            { title: 'Radeon RX 5700'},
            { title: 'Radeon RX 570'},
            { title: 'Radeon RX 560'},
            { title: 'Radeon RX 550'},
            { title: 'Radeon RX 230'},
            { title: 'Radeon PRO WX 7100'},
            { title: 'Radeon PRO WX 5100'},
        ],
        RAM_Corsair: [
            { title: 'Barrettes de ram Corsair'},
            { title: 'Corsair XMS3 2 Go DDR3 1333 MHz CL9'},
            { title: 'Corsair Vengeance Series 4 Go DDR3 1600 MHz CL9'},
            { title: 'Corsair ValueSelect 4 Go DDR4 2400MHz CL16'},
            { title: 'Corsair Vengeance LPX Series Low Profile 8 Go DDR4 3000 MHz CL16'},
            { title: 'Corsair ValueSelect 8 Go DDR4 2133 MHz CL15'},
            { title: 'Corsair Vengeance LPX Series Low Profile 8 Go DDR4 2666 MHz CL16'},
            { title: 'Corsair ValueSelect 16 Go DDR4 2133 MHz CL15'},
            { title: 'Corsair Vengeance LPX Series Low Profile 16 Go DDR4 2666 MHz CL16'},
            { title: 'Corsair Vengeance LPX Series Low Profile 16 Go DDR4 3000 MHz CL16'},
        ],
        RAM_Ballistix: [
            { title: 'Barrettes de ram Ballistix'},
            { title: 'Ballistix Sport 4 Go DDR4 2666 MHz CL16 - Rouge'},
            { title: 'Ballistix Elite 4 Go DDR4 3000 MHz CL15'},
            { title: 'Ballistix Sport LT 8 Go DDR4 2666 MHz CL16'},
            { title: 'Ballistix Sport LT 8 Go DDR4 3200 MHz CL16 SR'},
            { title: 'Ballistix Sport LT 16 Go DDR4 2400 MHz CL17'},
            { title: 'Ballistix Sport 16 Go DDR4 2666 MHz CL16 - Rouge'},
            { title: 'Ballistix Sport LT 16 Go DDR4 3200 MHz CL16'},
        ],
        RAM_HyperX: [
            { title: 'Barrettes de ram HyperX'},
            { title: 'HyperX Fury 4 Go DDR4 2666 MHz CL16'},
            { title: 'HyperX Fury 4 Go DDR4 3000 MHz CL15'},
            { title: 'HyperX Predator Noir 8 Go DDR4 2666 MHz CL13'},
            { title: 'HyperX Fury RGB 8 Go DDR4 3200 MHz CL16'},
            { title: 'HyperX Predator Noir 8 Go DDR4 4000 MHz CL19'},
            { title: 'HyperX Fury RGB 16 Go DDR4 2400 MHz CL15'},
            { title: 'HyperX Predator Noir 16 Go DDR4 2666 MHz CL13'},
            { title: 'HyperX Predator Noir 16 Go DDR4 3000 MHz CL15'},
            { title: 'HyperX Fury RGB 16 Go DDR4 3200 MHz CL16'},
            { title: ' '},
        ],
        SSD: [
            { title: 'SSD'},
            { title: 'Samsung SSD 970 EVO Plus M.2 PCIe NVMe 250 Go'},
            { title: 'SanDisk Ultra 3D SSD - 250 Go'},
            { title: 'Kingston KC2000 M.2 PCIe NVMe 250 Go'},
            { title: 'Samsung SSD 970 PRO M.2 PCIe NVMe 512 Go'},
            { title: 'Samsung SSD 860 PRO 512 Go, Intel SSD 660p 512 Go'},
            { title: 'Samsung SSD 860 EVO 1 To'},
            { title: 'SanDisk Ultra 3D SSD - 1 To'},
            { title: 'Kingston SSD A2000 1 To'},
            { title: 'Samsung SSD 860 EVO 2 To'},
            { title: 'SanDisk Ultra 3D SSD - 2 To'},
            { title: 'Corsair Force MP600 2 To'},
            { title: ''},
        ],
        HDD: [
            { title: 'Disque Durs'},
            { title: 'Seagate BarraCuda 1 To (ST1000DM010)'},
            { title: 'Western Digital WD Blue Desktop 1 To SATA 6Gb/s 64 Mo'},
            { title: 'Seagate BarraCuda Pro 1 To (ST1000LM049)'},
            { title: 'Seagate BarraCuda 2 To (ST2000DM008)'},
            { title: 'Western Digital WD Red 2 To SATA 6Gb/s'},
            { title: 'Toshiba P300 2 To (Bulk)'},
            { title: 'Seagate BarraCuda 3 To (ST3000DM007)'},
            { title: 'Western Digital WD Red 3 To SATA 6Gb/s'},
            { title: 'Toshiba P300 3 To (Bulk)'},
            { title: 'Seagate BarraCuda 4 To (ST4000DM004)'},
            { title: 'Western Digital WD Red 4 To SATA 6Gb/s'},
            { title: 'Toshiba X300 4 To (Bulk)'},
            { title: 'Toshiba X300 5 To, Toshiba S300 5To'},
            { title: ''},
        ],
        VENTILATEURS: [
            { title: 'Ventilateurs/ventirad'},
            { title: 'be quiet! Dark Rock 4'},
            { title: 'Cooler Master Hyper TX3 Evo'},
            { title: 'be quiet! Pure Rock'},
            { title: 'Cooler Master Hyper 212 Black Edition'},
            { title: 'be quiet! Shadow Rock Slim'},
        ],
        WATERCOOLING: [
            { title: 'Watercooling'},
            { title: 'Cooler Master MasterLiquid ML240L RGB'},
            { title: 'Corsair Hydro Series H100x'},
            { title: 'Corsair Hydro Series H150i PRO'},
            { title: 'Corsair Hydro Series H115i PLATINUM'},
            { title: 'Corsair Hydro Series H115i PRO'},
            { title: ''},
        ],
        GD_BOITIER: [
            { title: 'Grand boîtier'},
            { title: 'be quiet! Silent Base 801 (Noir)'},
            { title: 'Fractal Design Define XL R2 Black Pearl'},
            { title: 'Phanteks Enthoo Pro'},
            { title: 'be quiet! Dark Base 900 (Orange)'},
            { title: 'be quiet! Silent Base 801 (Orange)'},
            { title: 'be quiet! Silent Base 801 Window (Orange)'},
            { title: 'be quiet! Silent Base 801 Window (Argent)'},
            { title: 'Corsair Obsidian 750D Airflow Noir'},
            { title: 'be quiet! Silent Base 801 Window (Noir)'},
            { title: 'Aerocool Tor Pro'},
        ],
        MOY_BOITIER: [
            { title: 'Boîtier de taille moyenne '},
            { title: 'Advance Origin'},
            { title: 'Cooler Master N300 (KKN1)'},
            { title: 'Fractal Design Define C Noir'},
            { title: 'be quiet! Pure Base 600 (Noir)'},
            { title: 'Antec P7 Silent'},
            { title: 'be quiet! Pure Base 600 Window Orange'},
            { title: 'Zalman Z7 NEO'},
            { title: 'Aerocool Cylon (Noir)'},
            { title: 'Zalman S3'},
            { title: 'Corsair Carbide 270R Window'},

        ],
        PITI_BOITIER: [
            { title: 'Petit boîtier'},
            { title: 'Zalman ZM-T4'},
            { title: 'Cooler Master Elite RC-342 - Noir'},
            { title: 'Zalman T5 Noir'},
            { title: 'SilverStone Precision PS13 (noir)'},
            { title: 'Cooler Master N200 Noir, Cooler Master MasterBox Q300L'},
            { title: 'Aerocool Cylon Mini (noir)'},
            { title: 'Cooler Master Silencio S400'},
            { title: 'Spirit of Gamer District #16'},
            { title: 'Cooler Master MasterBox Lite 3.1 TG'},
        ],
        CLAVIER: [
            { title: 'Claviers'},
            { title: 'Logitech Keyboard K120 for Business'},
            { title: 'Logitech Corded Keyboard K280e'},
            { title: 'Corsair Gaming K55 RGB'},
            { title: 'ROCCAT Vulcan 120 AIMO (Switch Titan)'},
            { title: 'Logitech Wireless Keyboard K270'},
            { title: 'ROCCAT Vulcan 122 AIMO (Switch Titan)'},
            { title: 'Corsair Gaming K95 RGB (Cherry MX Speed Silver)'},
            { title: 'SteelSeries Apex Pro'},
            { title: 'Corsair K57 RGB, SteelSeries Apex 150'},
        ],
        SOURIS: [
            { title: 'Souris'},
            { title: 'Logitech B100 Optical USB Mouse (Noir)'},
            { title: 'Logitech G502 Hero, Logitech M171 Wireless Mouse (Noir)'},
            { title: 'Logitech G402 Hyperion Fury, SteelSeries Rival 110 (noir)'},
            { title: 'Corsair Ironclaw RGB Wireless'},
            { title: 'Corsair Gaming Glaive RGB (aluminium)'},
            { title: 'SteelSeries Rival 310'},
            { title: 'SteelSeries Sensei 310'},
            { title: 'ROCCAT Kova (noire)'},
            { title: 'ROCCAT Kain 120 AIMO Noir'},
            { title: 'ROCCAT Kone AIMO Noir'},
            { title: ''}
        ]
    })
}
</script>
