<template>
<div>
  <v-header elevation="24">
  <v-flex>
    <div class="d-flex justify-space-between align-self-auto align-center indigo white--text" >
      <a href="http://localhost:8080" style="color:white; text-decoration:none;">
        <v-text text large class="ml-4">
          Site de Vente <br /> de composants pc
        </v-text>
      </a>
      <div>
        <v-btn text large elevation="1" color="white">Processeurs</v-btn>
      </div>
      <div>
        <v-btn text large elevation="1" color="white">Cartes <br /> Graphiques</v-btn>
      </div>
      <div>
        <v-btn text large elevation="1" color="white">RAM</v-btn>
      </div>
      <div>
        <v-btn text large elevation="1" color="white">Stockage</v-btn>
      </div>
      <div>
        <v-btn text large elevation="1" color="white">Refroidissement</v-btn>
      </div>
      <div>
        <v-btn text large elevation="1" color="white">Boîtier</v-btn>
      </div>
      <div>
        <v-btn text large elevation="1" color="white">Clavier <br /> & souris</v-btn>
      </div>
      <div>
        <v-row justify="center">
        <form>
          <v-dialog v-model="inscription" persistent max-width="1000px">
            <template v-slot:activator="{ on }">
              <v-btn color="white" dark v-on="on"><v-text style="color:indigo;">S'inscrire</v-text></v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Inscription</span>
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
                      v-model="Password1"
                      :rules='passe1'
                      label="Mot de passe*"
                      type="password"
                      hint="Veuillez entrer un mot de passe qui fait au moins 8 lettres"
                      required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                      v-model="Password2"
                      :rules="confpass"
                      label="Confirmer le mot de passe*"
                      type="password"
                      required></v-text-field>
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
                  <v-btn color="blue darken-1" text @click="inscription = false">Fermer</v-btn>
                  <v-btn @click="clear" color="blue darken-1" text>Réinitialiser</v-btn>
                  <v-btn color="blue darken-1"  @click="submit" text>submit</v-btn>
                  <v-btn color="blue darken-1" text @click="inscription = false">Valider</v-btn>
                  
                  
                </v-card-actions>
            </v-card>
          </v-dialog>
         </form>
        </v-row>
      </div>
      <div>
        <v-dialog v-model="connexion" persistent max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn color="indigo" dark v-on="on"><v-text style="color:white;">Se connecter</v-text></v-btn>
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
                  <v-btn color="blue darken-1" text @click="connexion = false">Fermer</v-btn>
                  <v-btn color="blue darken-1" text @click="connexion = false">Connexion</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
      </div>
    </div>
  </v-flex>
  </v-header>
  <v-form>
    <p>texte</p>
    <p>texte</p>
    <p>texte</p>
  </v-form>
  <!-- Footer -->
  <v-footer absolute="true" elevation="5">
    <div class="flex-grow-1"></div>
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
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer'
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/layout/pre-defined'
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
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
      dialog: false,
      inscription: false,
      connexion: false,
      prenom: '',
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
        v => this.Password1.value != this.Password2.value || 'Les deux mots de passes ne correspondent pas'
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
    },
  }
var a = 5;
</script>
