<template>
    <div>
        <v-toolbar class="primary" style="background-color: #3B5998;" id="toolBar">
            <img src="../assets/logo.png" alt="logo" style="height:80px;margin-top:25px;">
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <account-edit></account-edit>
                <v-btn flat class="white--text" @click="logout()" id="logoutBtn">Logout</v-btn>
            </v-toolbar-items>
            <v-menu bottom right class="hidden-md-and-up">
                <v-btn icon slot="activator" dark>
                    <v-icon>more_vert</v-icon>
                </v-btn>
                <v-list>
                    <v-list-tile>
                        <account-edit></account-edit>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-title @click="logout()">Logout</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar>
    </div>
</template>

<script>
import AccountEdit from "./user/AccountEdit.vue";
export default {
    data: {
        dialog: false,
    },
  methods: {
    logout() {
      this.$emit("logout", false);
    }
  },
  components: {
    "account-edit": AccountEdit
  }
};
</script>

<style>

</style>
