<template>
    <div>
        <v-flex class="d-flex d-sm-none">
          <div id="app">
  <v-app id="inspire">
    <v-navigation-drawer
      app
      value="true"
    >
      <v-list>
        <v-list-group
          prepend-icon="mdi-account_circle"
          value="true"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Menu</v-list-tile-title>
          </v-list-tile>
          <v-list-group
            no-action
            sub-group
            value="true"
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>Admin</v-list-tile-title>
            </v-list-tile>
            <v-list-tile
              v-for="(admin, i) in admins"
              :key="i"
              @click="nope"
            >
              <v-list-tile-title v-text="admin[0]" class="d-flex justify-center"></v-list-tile-title>
              <v-list-tile-title ></v-list-tile-title>
            </v-list-tile>
          </v-list-group>
          <v-list-group
            sub-group
            no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>Actions</v-list-tile-title>
            </v-list-tile>
            <v-list-tile
              v-for="(crud, i) in cruds"
              :key="i"
              @click="nope"
            >
              <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="crud[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <p>hey</p>
    </v-content>
  </v-app>
</div>
        </v-flex>
    </div>
</template>
<script>
export default {
  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader'
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify'
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify'
      }
    ]
  })
}
</script>
<script>
export default {
  data: () => ({
    admins: [
      ['test'],
      ['test2']
    ]
  })
}
</script>
