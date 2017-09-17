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
        <v-card class="mx-3" hover @click="isEdit=!isEdit">
          <v-card-text>
            <p class="text-xs-center"><v-icon x-large>add</v-icon></p>
            <p class="text-xs-center">Register new complaint</p>
          </v-card-text>
        </v-card>
        <br>
      </template>

    <template v-if="!isEdit">
      <v-card class="mx-3" @click="isEdit=!isEdit">
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
          <v-switch class="hidden-sm-and-down mx-3" label="Anonymous tip" v-model="tip"></v-switch>
          <v-switch class="hidden-md-and-up mx-3" label="Tip" v-model="tip"></v-switch>
          <v-spacer></v-spacer>
          <v-btn flat class="orange--text">cancel</v-btn>
          <v-btn @click="isEdit=!isEdit" flat class="orange--text">submit</v-btn>
        </v-card-actions>
      </v-card>
      <br>
    </template>

    <template v-for="complaint in complaints" >

      <v-card class="mx-3">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ complaint.id }}</h3>
            <br><v-divider></v-divider><br>
            <div>{{ complaint.description }}</div>
          </div>
        </v-card-title>

        <v-card-actions v-if="complaint.statusNum>2" style="margin:0px;">
          <v-spacer></v-spacer>
          <!-- <v-btn flat >raise issue</v-btn> -->
            <div class="text-xs-center">
            <v-btn round primary dark flat class="orange--text">raise issue</v-btn>
            </div>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
      <v-stepper :value="complaint.statusNum" class="hidden-sm-and-down mx-3">
        <v-stepper-header>
          <v-stepper-step step="1" :complete="complaint.statusNum >1">Logged
            <small>Summarize if needed</small>
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="2" :complete="complaint.statusNum >2">Processing
            <small>Summarize if needed</small>
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3" :complete="complaint.statusNum >3">completed
            <small>Summarize if needed</small>
          </v-stepper-step>
        </v-stepper-header>
      </v-stepper>
        <v-stepper :value="complaint.statusNum" vertical class="hidden-md-and-up mx-3">
          <v-stepper-step step="1" :complete="complaint.statusNum >1">Logged
            <small>Summarize if needed</small>
          </v-stepper-step>
          <v-stepper-step step="2" :complete="complaint.statusNum >2">Processing
            <small>Summarize if needed</small>
          </v-stepper-step>
          <v-stepper-step step="3" :complete="complaint.statusNum >3">Completed
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
        isEdit: 'true',
        tip: false,
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
        ]
      }
    },
    methods: {
      invertEdit () {
        if(this.isEdit == 'true'){
          this.isEdit = 'false'
        }else{
          this.isEdit = 'true'
        }
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
.card{
  padding-left: 10px;
}
</style>
