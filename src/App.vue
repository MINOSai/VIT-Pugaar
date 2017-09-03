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
<template>

<template v-if="true">
  <v-card hover @click="alertUser('yaswant')">
    <v-card-text>
      <p class="text-xs-center"><v-icon x-large>add</v-icon></p>
      <p class="text-xs-center">Register new complaint</p>
    </v-card-text>
  </v-card>
</template>
      
      <br>

    <template v-for="i in 3">

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
      <v-stepper value="2">
        <v-stepper-header>
          <v-stepper-step step="1" complete>Logged
            <small>Summarize if needed</small>
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="2">Processing
            <small>Summarize if needed</small>
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3">completed
            <small>Summarize if needed</small>
          </v-stepper-step>
        </v-stepper-header>
      </v-stepper>

<template>
  <v-stepper vertical>
    <v-stepper-step step="1" v-bind:complete="e6 > 1">Select an app
      <small>Summarize if needed</small>
    </v-stepper-step>
    <v-stepper-step step="2" v-bind:complete="e6 > 2">Configure analytics for this app
      <small>Summarize if needed</small>
    </v-stepper-step>
    <v-stepper-step step="3" v-bind:complete="e6 > 3">Select an ad format and name ad unit
      <small>Summarize if needed</small>
    </v-stepper-step>
  </v-stepper>
</template>

      <br>

    </template>

    </template>

    </v-flex>
  </v-layout>

  </v-app>

  </div>
</template>

<script>
export default {
  name: 'app',
  data:{
  },
  methods:{
    alertUser :function(message) {
      alert(message);
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
