<template>
    <div>
        <v-toolbar class="primary" id="toolBar">
            <img src="../assets/logo.png" alt="logo" style="height:80px;margin-top:25px;">
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat class="white--text" @click="logout()" id="logoutBtn">Logout</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$emit('logout',false);
        }
    }
}
</script>

<style>

</style>
