<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay=false>
      <v-btn flat class="white--text hidden-sm-and-down" style="height: 90px;margin:0px;" slot="activator">Account Edit</v-btn>
      <v-list-tile-title slot="activator" class="hidden-md-and-up">Account Edit</v-list-tile-title>
      <v-card>

        <v-toolbar dark color="primary">
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Account Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="saveData()">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-list three-line subheader>
          <v-subheader>Reset Password</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-text-field v-model="password.old" label="Old Password" required></v-text-field>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-text-field v-model="password.new" label="New Password" required></v-text-field>
              <v-list-tile-title>Password may not be same as v-top password. Password must contain 6 or more characters that are of at least one number, and one uppercase and lowercase letter</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <br>

        <v-divider></v-divider>
        
        <v-list three-line subheader>
          <v-subheader>General</v-subheader>
          <v-layout row wrap>
            <v-flex sm4 xs12>
              <v-list-tile avatar>
                <v-list-tile-action>
                  <v-btn flat icon color="primary" @click="editInfo.regnoEdit = !editInfo.regnoEdit">
                    <v-icon v-if="editInfo.regnoEdit">done</v-icon>
                    <v-icon v-else>edit</v-icon>
                  </v-btn>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Registration number</v-list-tile-title>
                  <v-text-field v-if="editInfo.regnoEdit" v-model="details.regno" required></v-text-field>
                  <v-list-tile-sub-title v-else>{{ details.regno }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-flex>
            <v-flex xs12 sm4>
              <v-list-tile avatar>
                <v-list-tile-action>
                  <v-btn flat icon color="primary" @click="editInfo.nameEdit = ! editInfo.nameEdit">
                    <v-icon v-if="editInfo.nameEdit">done</v-icon>
                    <v-icon v-else>edit</v-icon>
                  </v-btn>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Name</v-list-tile-title>
                  <v-text-field v-if="editInfo.nameEdit" v-model="details.name" required></v-text-field>
                  <v-list-tile-sub-title v-else>{{ details.name }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex sm4 xs12>
              <v-list-tile avatar>
                <v-list-tile-action>
                  <v-btn flat icon color="primary" @click="editInfo.messEdit = !editInfo.messEdit">
                    <v-icon v-if="editInfo.messEdit">done</v-icon>
                    <v-icon v-else>edit</v-icon>
                  </v-btn>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Mess</v-list-tile-title>
                  <v-text-field v-if="editInfo.messEdit" v-model="details.mess" required></v-text-field>
                  <v-list-tile-sub-title v-else>{{ details.mess }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-flex>
            <v-flex xs12 sm4>
              <v-list-tile avatar>
                <v-list-tile-action>
                  <v-btn flat icon color="primary" @click="editInfo.blockEdit = ! editInfo.blockEdit">
                    <v-icon v-if="editInfo.blockEdit">done</v-icon>
                    <v-icon v-else>edit</v-icon>
                  </v-btn>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Block</v-list-tile-title>
                  <v-text-field v-if="editInfo.blockEdit" v-model="details.block" required></v-text-field>
                  <v-list-tile-sub-title v-else>{{ details.block }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-flex>
          </v-layout>
        </v-list>
      
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data: function() {
    return {
      dialog: false,
      password: {
        old: "",
        new: ""
      },
      details: null,
      general: {
        name: "yaswant"
      },
      editInfo: {
        regnoEdit: false,
        nameEdit: false,
        messEdit: false,
        blockEdit: false
      },
      validDetails: true
    };
  },
  methods: {
    saveData() {
      this.$store.commit('updateDetails',this.details);
      this.reset();
    },
    reset() {
      this.dialog = false;
    }
  },
  created: function() {
    this.details = this.$store.state.user;
    this.editInfo = {
      regnoEdit: false,
      nameEdit: false,
      messEdit: false,
      blockEdit: false
    };
  }
};
</script>
