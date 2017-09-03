<template>
  <div id="app">

    <v-app>

  <v-toolbar class="primary" id="toolBar">
    <!-- <v-toolbar-title class="white--text">VIT Pugaar</v-toolbar-title> -->
    <img src="./assets/logo.png" alt="logo" style="height:80px;margin-top:25px;">
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat class="white--text" id="logoutBtn">Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>

  <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      
      <br>

      <template v-if="isEdit">
        <v-card hover @click="invertEdit">
          <v-card-text>
            <p class="text-xs-center"><v-icon x-large>add</v-icon></p>
            <p class="text-xs-center">Register new complaint</p>
          </v-card-text>
        </v-card>
        <br>
      </template>

    <template v-if="!isEdit">
      <v-card>
        <v-card-actions>
            <v-radio-group v-model="type" :mandatory="false" row>
              <v-spacer></v-spacer>
              <v-radio label="Hostel" value="Hostel"></v-radio>
              <v-radio label="Mess" value="Mess"></v-radio>
              <v-spacer></v-spacer>
            </v-radio-group>
        </v-card-actions>
        <p v-if="type=='Hostel'">You pressed hostel</p>
        <p v-else>You pressed mess</P>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat class="orange--text">cancel</v-btn>
          <v-btn @click="invertEdit" flat class="orange--text">submit</v-btn>
        </v-card-actions>
      </v-card>
      <br>
    </template>

    <template v-for="i in 2">

      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Complaint ID</h3>
            <br><v-divider></v-divider><br>
            <div>This is a complaint description. This is a complaint description. This is a complaint description. This is a complaint description.</div>
          </div>
        </v-card-title>

        <v-card-actions v-if="true" style="margin:0px;">
          <v-spacer></v-spacer>
          <!-- <v-btn flat >raise issue</v-btn> -->
            <div class="text-xs-center">
            <v-btn round primary dark flat>raise issue</v-btn>
            </div>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
      <v-stepper value="3" class="hidden-sm-and-down">
        <v-stepper-header>
          <v-stepper-step step="1" complete>Logged
            <small>Summarize if needed</small>
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="2" complete>Processing
            <small>Summarize if needed</small>
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3">completed
            <small>Summarize if needed</small>
          </v-stepper-step>
        </v-stepper-header>
      </v-stepper>

        <v-stepper value="2" vertical class="hidden-md-and-up">
          <v-stepper-step step="1" complete>Logged
            <small>Summarize if needed</small>
          </v-stepper-step>
          <v-stepper-step step="2">Processing
            <small>Summarize if needed</small>
          </v-stepper-step>
          <v-stepper-step step="3">Completed
            <small>Summarize if needed</small>
          </v-stepper-step>
        </v-stepper>

      <br>

    </template>


    </v-flex>
  </v-layout>

  </v-app>

  </div>
</template>

<script>
export default {
    data () {
      return {
        type: 'Hostel',
        isEdit: true
      }
    },
    methods: {
      invertEdit () {
        this.isEdit = !this.isEdit
      }
    }
}
</script>

<style>
#app {
}
#toolBar,#logoutBtn{
  height:90px;
}
</style>
