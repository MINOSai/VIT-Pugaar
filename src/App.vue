<template>
  <div id="app">

    <v-app v-if="!loggedIn">

      <main>
        <v-container fill-height>
          <v-layout row wrap align-center>
            <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
              <!-- <v-btn>test</v-btn> -->
              <!-- <v-card>
                        <v-card-media src="../assets/logo1.png" height="400px">
                        </v-card-media>
                        <v-card-title>
                          <div class="headline">Use Google's location service?</div>
                        </v-card-title>
                        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">Disagree</v-btn>
                          <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">Agree</v-btn>
                          <v-spacer></v-spacer>
                        </v-card-actions>
                      </v-card> -->
              <login-signup @login="loggedIn = $event"></login-signup>
            </v-flex>
          </v-layout>
        </v-container>
      </main>

    </v-app>

    <v-app v-else>

      <app-bar @logout="loggedIn = $event"></app-bar>

      <v-layout>
        <v-flex xs12 sm8 offset-sm2>

          <br>

          <template>

            <!-- <transition name="fade">
                                                        <v-card v-if="isEdit" class="mx-3 card" :hover="true" @click="invertEdit">
                                                          <v-card-text>
                                                            <p class="text-xs-center">
                                                              <v-icon x-large>add</v-icon>
                                                            </p>
                                                            <p class="text-xs-center">Register new complaint</p>
                                                          </v-card-text>
                                                        </v-card>
                                                      </transition>

                                                      <transition name="fade">
                                                        <v-card class="mx-3 card" v-if="!isEdit">
                                                          <v-card-title>
                                                            <span class="headline">New complaint</span>
                                                          </v-card-title>
                                                          <v-card-text>

                                                            <v-container grid-list-md>
                                                              <v-flex xs12>
                                                                <v-radio-group v-model="type" row>
                                                                  <v-spacer></v-spacer>
                                                                  <v-radio label="Hostel" value="hostel"></v-radio>
                                                                  <v-spacer></v-spacer>
                                                                  <v-radio label="Mess" value="mess"></v-radio>
                                                                  <v-spacer></v-spacer>
                                                                </v-radio-group>
                                                              </v-flex>

                                                              <transition name="fade">
                                                                <v-layout v-if="type=='hostel'" wrap>
                                                                  <v-flex xs12>
                                                                    <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
                                                                  </v-flex>
                                                                </v-layout>
                                                              </transition>

                                                              <v-layout wrap>
                                                                <v-flex xs12>
                                                                  <v-text-field label="description" type="text" hint="Type the description of your complaint" required></v-text-field>
                                                                </v-flex>
                                                              </v-layout>

                                                            </v-container>

                                                            <small>*indicates required field</small>
                                                          </v-card-text>
                                                          <v-card-actions>
                                                            <v-switch label="Tip" v-model="ex11"></v-switch>
                                                            <v-spacer></v-spacer>
                                                            <v-btn class="orange--text darken-1" flat @click="invertEdit">cancel</v-btn>
                                                            <v-btn class="blue--text darken-1" flat>send</v-btn>
                                                          </v-card-actions>
                                                        </v-card>
                                                      </transition> -->

            <v-card class="mx-3 card" :hover="isEdit">

              <transition name="fade" mode="out-in">
                <v-card-text class="my-card" v-if="isEdit" @click="invertEdit">
                  <p class="text-xs-center">
                    <v-icon x-large>add</v-icon>
                  </p>
                  <p class="text-xs-center">Register new complaint</p>
                </v-card-text>
              </transition>

              <transition name="fade" mode="out-in">
                <v-card-title v-if="!isEdit">
                  <span class="headline">New complaint</span>
                </v-card-title>
              </transition>

              <transition name="fade">
                <v-card-text class="my-card" v-if="!isEdit">

                  <v-container grid-list-md>
                    <v-flex xs12>
                      <v-radio-group v-model="type" row>
                        <v-spacer></v-spacer>
                        <v-radio label="Hostel" value="hostel"></v-radio>
                        <v-spacer></v-spacer>
                        <v-radio label="Mess" value="mess"></v-radio>
                        <v-spacer></v-spacer>
                      </v-radio-group>
                    </v-flex>

                    <transition name="fade">
                      <v-layout v-if="type=='hostel'" wrap>
                        <v-flex xs12>
                          <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
                        </v-flex>
                      </v-layout>
                    </transition>

                    <v-layout wrap>
                      <v-flex xs12>
                        <v-text-field label="description" type="text" hint="Type the description of your complaint" required></v-text-field>
                      </v-flex>
                    </v-layout>

                  </v-container>

                  <small>*indicates required field</small>
                </v-card-text>
              </transition>

              <transition name="fade">
                <v-card-actions v-if="!isEdit">
                  <v-switch label="Tip" v-model="ex11"></v-switch>
                  <v-spacer></v-spacer>
                  <v-btn class="orange--text darken-1" flat @click="invertEdit">cancel</v-btn>
                  <v-btn class="blue--text darken-1" @click="addNewComplaint()" flat>send</v-btn>
                </v-card-actions>
              </transition>

            </v-card>

            <br>

          </template>

          <template v-for="complaint in complaints">

            <v-card class="mx-3" :key="complaint.id">
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{ complaint.id }}</h3>
                  <br>
                  <!-- <v-divider></v-divider><br> -->
                  <div>{{ complaint.description }}</div>
                </div>
              </v-card-title>

              <v-stepper :value="complaint.statusNum" class="hidden-sm-and-down mx-3 elevation-0">
                <v-stepper-header>
                  <v-stepper-step step="1" :complete="complaint.statusNum >1">Logged
                    <!-- <small>Summarize if needed</small> -->
                  </v-stepper-step>
                  <v-divider></v-divider>
                  <v-stepper-step step="2" :complete="complaint.statusNum >2">Processing
                    <!-- <small>Summarize if needed</small> -->
                  </v-stepper-step>
                  <v-divider></v-divider>
                  <v-stepper-step step="3" :complete="complaint.statusNum >3">completed
                    <!-- <small>Summarize if needed</small> -->
                  </v-stepper-step>
                </v-stepper-header>
              </v-stepper>

              <v-stepper :value="complaint.statusNum" vertical class="hidden-md-and-up mx-3 elevation-0">
                <v-stepper-step step="1" :complete="complaint.statusNum >1">Logged
                  <!-- <small>Summarize if needed</small> -->
                </v-stepper-step>
                <v-stepper-step step="2" :complete="complaint.statusNum >2">Processing
                  <!-- <small>Summarize if needed</small> -->
                </v-stepper-step>
                <v-stepper-step step="3" :complete="complaint.statusNum >3">Completed
                  <!-- <small>Summarize if needed</small> -->
                </v-stepper-step>
              </v-stepper>

              <v-card-actions v-if="complaint.statusNum>2" style="margin:0px;">
                <v-spacer></v-spacer>
                <!-- <v-btn flat >raise issue</v-btn> -->
                <!-- <div class="text-xs-center">
                                                                                                    <v-btn round primary dark flat class="orange--text">raise issue</v-btn>
                                                                                                  </div> -->
                <v-spacer></v-spacer>
              </v-card-actions>

              <v-expansion-panel class="elevation-0">
                <!-- <v-divider></v-divider> -->
                <v-expansion-panel-content>
                  <div slot="header">More details</div>
                  <v-card>
                    <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn v-if="complaint.statusNum>2" dark flat class="orange--text">raise issue</v-btn>
                      <v-btn v-else flat>Cancel</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>

            </v-card>

            <br>

          </template>

        </v-flex>
      </v-layout>

    </v-app>

  </div>
</template>

<script>
import AppBar from './components/AppBar.vue'
import LoginSignup from './components/LoginSignup.vue'
export default {
  data() {
    return {
      isEdit: true,
      type: 'hostel',
      desc: null,
      ex11: false,
      loggedIn: false,
      newComplaint: [{
        newTitle: this.type
      }],
      complaints: [
        {
          id: 'ABC1234',
          description: '1. This is a description and this will come in description section.',
          statusNum: 1,
        },
        {
          id: 'DKB3887',
          description: '2. This is a description and this will come in description section.',
          statusNum: 2
        },
        {
          id: 'AOM4383',
          description: '3. This is a description and this will come in description section.',
          statusNum: 3
        }
      ],
    }
  },
  methods: {
    invertEdit() {
      if (this.isEdit == true) {
        this.isEdit = false
      } else {
        this.isEdit = true
      }
    },
    addNewComplaint() {
      complaints[0].statusNum=3;
    }
  },
  components: {
    'app-bar': AppBar,
    'login-signup': LoginSignup
  }
}
</script>

<style>
#app {}

#toolBar,
#logoutBtn,
#editBtn {
  height: 90px;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s ease;
}

.fade-leave {
  /* height: auto; */
}

.fade-leave-active {
  transition: all 0s ease;
  opacity: 1;
}

.my-card {
  /* height: 10px; */
}
</style>
