<template>
    <div>
        <v-app id="example-3" toolbar>
            <v-navigation-drawer permanent floating light class="transparent">
                <v-card class="ma-3">
                    <v-list dense class="py-0">
                        <v-list-tile v-for="item in items" :key="item.title" @click="">
                            <v-list-tile-action>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-navigation-drawer>
            <v-toolbar class="primary" dark>
                <img src="../assets/logo.png" alt="logo" style="height:50px">
                <v-toolbar-title>Admin console</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn flat class="white--text" @click="logout()">Logout</v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <main>
                <v-container fluid>
                    <!--v-router-->
                    <v-layout row wrap>
                        <v-flex xs12>
                            <v-card class="blue-grey darken-2 white--text">
                                <v-card-title primary-title>
                                    <div class="headline">Unlimited music now</div>
                                    <div>Listen to your favorite artists and albums whenenver and wherever, online and offline.</div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat dark>Listen now</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </main>
        </v-app>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: null,
            items: [
                { title: 'Home', icon: 'dashboard' },
                { title: 'About', icon: 'person' }
            ],
            right: null
        }
    }
}
</script>

<style>

</style>
