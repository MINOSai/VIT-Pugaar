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
            <v-btn dark flat @click.native="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-list three-line subheader>
          <v-subheader>Reset Password</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-content>
              <!-- <v-list-tile-title>Content filtering</v-list-tile-title> -->
              <v-text-field v-model="password.old" label="Old Password" required></v-text-field>
              <!-- <v-list-tile-sub-title>Set the content filtering level to restrict appts that can be downloaded</v-list-tile-sub-title> -->
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
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-btn flat icon color="primary" @click="editInfo.regnoEdit = !editInfo.regnoEdit">
                <v-icon v-if="editInfo.regnoEdit">done</v-icon>
                <v-icon v-else>edit</v-icon>
              </v-btn>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Registration number</v-list-tile-title>
              <v-text-field v-if="editInfo.regnoEdit" v-model="general.regno" required></v-text-field>
              <v-list-tile-sub-title v-else>{{ general.regno }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-btn flat icon color="primary"><v-icon>edit</v-icon></v-btn>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Name</v-list-tile-title>
              <v-list-tile-sub-title>{{ general.name }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        
        <v-layout row wrap>
          <v-flex sm4>
            <v-list three-line subheader>
              <v-list-tile avatar>
                <v-list-tile-action>
                  <v-btn flat icon color="primary" @click="editInfo.regnoEdit = !editInfo.regnoEdit">
                    <v-icon v-if="editInfo.regnoEdit">done</v-icon>
                    <v-icon v-else>edit</v-icon>
                  </v-btn>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Registration number</v-list-tile-title>
                  <v-text-field v-if="editInfo.regnoEdit" v-model="general.regno" required></v-text-field>
                  <v-list-tile-sub-title v-else>{{ general.regno }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-flex>
          <v-flex sm4>
            <v-list three-line subheader>
              <v-list-tile avatar>
                <v-list-tile-action>
                  <v-btn flat icon color="primary" @click="editInfo.regnoEdit = !editInfo.regnoEdit">
                    <v-icon v-if="editInfo.regnoEdit">done</v-icon>
                    <v-icon v-else>edit</v-icon>
                  </v-btn>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Registration number</v-list-tile-title>
                  <v-text-field v-if="editInfo.regnoEdit" v-model="general.regno" required></v-text-field>
                  <v-list-tile-sub-title v-else>{{ general.regno }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      password: {
        old: "",
        new: ""
      },
      general: {
        regno: "16BCE0587",
        name: "yaswant"
      },
      editInfo: {
        regnoEdit: false,
        nameEdit: false
      }
    };
  }
};
</script>
