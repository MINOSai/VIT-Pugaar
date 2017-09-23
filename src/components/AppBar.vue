<template>
    <div>
        <v-toolbar class="primary" style="background-color: #3B5998;" id="toolBar">
            <img src="../assets/logo.png" alt="logo" style="height:80px;margin-top:25px;">
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-only">
                <v-btn flat class="white--text" @click="logout()" id="logoutBtn">Logout</v-btn>
            </v-toolbar-items>
            <v-menu bottom right class="hidden-md-and-up">
                <v-btn icon slot="activator" dark>
                    <v-icon>more_vert</v-icon>
                </v-btn>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-title @click="logout()">Logout</v-list-tile-title>
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
export default {
    methods: {
        logout() {
            this.$emit('logout', false);
        }
    }
}
</script>

<style>

</style>
