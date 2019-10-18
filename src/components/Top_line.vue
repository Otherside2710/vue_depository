<template>
<div>
  <header>
  <v-flex>
    <div style="display:flex; flex-wrap:wrap; justify-content:space-between;" class="d-none d-sm-flex justify-space-between align-self-auto align-center indigo white--text" >
      <a href="http://localhost:8080" style="color:white; text-decoration:none;">
        <v-text text large class="ml-4">
          Home
        </v-text>
      </a>
      <div>
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn text large elevation="1" color="white" v-on="on">Processeurs</v-btn>
          </template>
          <v-list>
            <v-list-item
             v-for=" (item, index) in processeurs"
             :key="index"
             @click="nope"
             >
             <v-list-item-title>{{ item.title}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div>
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn text large elevation="1" color="white" v-on="on">Cartes <br/> Graphiques</v-btn>
          </template>
          <v-list>
            <v-list-item
             v-for=" (item, index) in CG"
             :key="index"
             @click="nope"
             >
             <v-list-item-title>{{ item.title}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div>
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn text large elevation="1" color="white" v-on="on">RAM</v-btn>
          </template>
          <v-list>
            <v-list-item
             v-for=" (item, index) in RAM"
             :key="index"
             @click="nope"
             >
             <v-list-item-title>{{ item.title}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div>
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn text large elevation="1" color="white" v-on="on">Stockage</v-btn>
          </template>
          <v-list>
            <v-list-item
             v-for=" (item, index) in STOCKAGE"
             :key="index"
             @click="nope"
             >
             <v-list-item-title>{{ item.title}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div>
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn text large elevation="1" color="white" v-on="on">Refroidissement</v-btn>
          </template>
          <v-list>
            <v-list-item
             v-for=" (item, index) in REFROIDISSEMENT"
             :key="index"
             @click="nope"
             >
             <v-list-item-title>{{ item.title}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div>
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn text large elevation="1" color="white" v-on="on">Boîtier</v-btn>
          </template>
          <v-list>
            <v-list-item
             v-for=" (item, index) in CASE"
             :key="index"
             @click="nope"
             >
             <v-list-item-title>{{ item.title}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div>
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn text large elevation="1" color="white" v-on="on">Claviers <br/> & souris</v-btn>
          </template>
          <v-list>
            <v-list-item
             v-for=" (item, index) in CLAVIER"
             :key="index"
             @click="nope"
             >
             <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div>
          <v-dialog v-model="inscription">
            <template v-slot:activator="{ on }">
              <v-btn color="white" dark v-on="on"><v-text style="color:indigo;">S'inscrire</v-text></v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="mr-4"><v-text style="color:indigo;">Inscription</v-text></span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                      v-model="prenom"
                      :rules="nom"
                      :counter="32"
                      label="Prénom*"
                      required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="NomDeFamille"
                        :rules="NomDeFamilles"
                        :counter="32"
                        label="Nom de famille*"
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                      v-model="email"
                      :rules="mail"
                      label="Email*"
                      required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                      v-on:blur="validate"
                      v-model="Password1"
                      :rules='passe1'
                      label="Mot de passe*"
                      type="password"
                      hint="Veuillez entrer un mot de passe qui fait au moins 8 lettres"
                      required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                      v-on:blur="validate"
                      v-model="Password2"
                      :rules="confpass"
                      label="Confirmer le mot de passe*"
                      type="password"
                      required></v-text-field>
                      <v-card-text><span>{{ confirmation }}</span></v-card-text>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-select
                        :items="['0-17', '18-29', '30-54', '54+']"
                        label="Âge*"
                        required
                      ></v-select>
                        <v-checkbox label="J'accepte les conditions d'utilisations du site"></v-checkbox>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-checkbox label="Je souhaite m'inscrire à la newsletter"></v-checkbox>
                      <v-checkbox label="Je souhaite recevoir des offres promotionnelles de la part du site et de ses partenaires"></v-checkbox>

                    </v-col>
                  </v-row>
                </v-container>
                <small>Les champs marquées d'un * ne doivent pas être laissés vides.</small>
              </v-card-text>
                <v-card-actions>
                  <div class="flex-grow-1"></div>
                  <v-btn color="blue darken-1" text @click="inscription = false">Retour</v-btn>
                  <v-btn color="blue darken-1" text @click="clear">Réinitialiser</v-btn>
                  <v-btn color="blue darken-1" text @click="submit" >submit</v-btn>
                  <v-btn color="blue darken-1" text @click="inscription = false">Valider</v-btn>
                </v-card-actions>
            </v-card>
          </v-dialog>
      </div>
      <div>
        <v-dialog v-model="connexion" persistent max-width="350px">
            <template v-slot:activator="{ on }">
              <v-btn color="indigo" v-on="on"><v-text style="color:white;">Se connecter</v-text></v-btn>
            </template>
             <v-card>
              <v-card-title>
                <span class="headline">Connexion</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field label="Adresse mail" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field label="Mot de passe" type="password" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
                <v-card-actions>
                  <div class="flex-grow-1 justify-center"></div>
                  <v-btn color="blue darken-1" text @click="connexion = false">Retour</v-btn>
                  <v-btn color="blue darken-1" text @click="connexion = false">Connexion</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
      </div>
    </div>
  </v-flex>
  </header>
  <!-- Footer -->

  <v-footer absolute="true" elevation="5" class="d-none d-sm-flex">
    <div class="d-none d-sm-flex flex-grow-1"></div>
    <v-text class="align-self-baseline flex justify-center ">Application Web réalisée par Alexis Caron et William Henry. Tout droits réservés.</v-text>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
  <!--
  <div class="text-center">
    <v-badge>
      <template v-slot:badge>0</template>
      <v-icon>mdi-email</v-icon>
    </v-badge>
  </div>
  -->
  <div>
     <h1>Bonjour l'application !</h1>
  <p>
    <!-- utilisez le composant router-link pour la navigation. -->
    <!-- spécifiez le lien en le passant à la prop `to` -->
    <!-- `<router-link>` sera rendu en tag `<a>` par défaut -->
    <router-link to="/foo">Aller à Foo</router-link>
    <br/>
    <router-link to="/bar">Aller à Bar</router-link>
    <router-view></router-view>
  </p>
  </div>
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
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com'
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com'
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify'
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs'
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify'
      }
    ]
  })
}
</script>
<script>

export default {
    $_veeValidate: {
      validator: 'new',
    },
    data: () => ({
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' },
        ],
      dialog: false,
      inscription: false,
      connexion: false,
      prenom: '',
      confirmation: '',
      nom: [
        v => !!v || 'Veuillez entrer votre prénom',
        v => v.length <= 32 || 'Votre prénom doit faire moins de 32 caractères'
      ],
      NomDeFamille: '',
      NomDeFamilles: [
        v => !!v || 'Veuillez entre votre nom de famille',
        v => v.length <= 32 || 'Votre nom doit faire moins de 32 caractères'
      ],
      email: '',
      mail: [
        v => !!v || 'Veuillez entrer votre adresse mail',
        v => /.+@.+\..+/.test(v) || 'Veuillez entrer une adresse mail valide'
      ],
      Password1: '',
      Password2: '',
      passe1: [
        v => !!v || 'Veuillez entrer votre mot de passe',
        v => v.length >= 8 || 'Mot de passe trop court',
      ],
      confpass: [
        v => !!v || 'Veuillez confirmer votre mot de passe',
      ],
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      processeurs: [
        { title: 'Intel'},
        { title: 'AMD'},
      ],
      CG: [
        { title: 'Nvidia'},
        { title: 'AMD'},
      ],
      RAM: [
        { title: 'HyperX'},
        { title: 'Corsair'},
        { title: 'Balistic'},
        { title: 'etc...'}
      ],
      STOCKAGE: [
        { title: 'SSD'},
        { title: 'Disque durs'},
      ],
      REFROIDISSEMENT: [
        { title: 'Ventilateurs'},
        { title: 'Ventirad'},
        { title: 'Watercooling'},
      ],
      CASE: [
        { title: 'Grand boîtier'},
        { title: 'Boîtier de taille moyenne'},
        { title: 'Petit boîtier'},
      ],
      CLAVIER: [
        { title: 'Claviers'},
        { title: 'Souris'},
      ],
      LIENS: [
        ['\"./ProcesseurIntel.vue\"'],
        ['\"./ProcesseurAmd.vue\"']
      ]
    }),
    methods: {
      clear () {
        this.prenom = ''
        this.NomDeFamille= ''
        this.email = ''
        this.Password1 = ''
        this.Password2 = ''
      },
      validate: function() {
        if( this.Password1 == this.Password2 && this.Password2.length != 0){
          this.confirmation ='Les deux mots de passes correspondent bien';
        } else if (this.Password1 != this.Password2){
          this.confirmation ='Les deux mots de passes ne correspondent pas';
        }
                          },
      nope: function() {
          console.log('oui');
        }

    },
  }
var a = 5;
</script>
