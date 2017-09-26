<template>
    <div>
        <v-app id="example-3" toolbar>
            <v-navigation-drawer permanent floating light class="transparent hidden-sm-and-down">
                <v-card class="ma-3">
                    <v-list dense class="py-0" :class="{myactive: selectedComponent=='dashboard-view'}">
                        <v-list-tile @click="selectedComponent='dashboard-view'">
                            <v-list-tile-action>
                                <v-icon>dashboard</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Complaints</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                    <v-list dense class="py-0">
                        <v-list-tile @click="selectedComponent='departments-view'">
                            <v-list-tile-action>
                                <v-icon>people</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Departments</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-navigation-drawer>
            <v-toolbar class="primary" fixed dark>
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
                    <!-- <dashboard-view></dashboard-view> -->
                    <transition name="fade" mode="out-in">
                        <keep-alive>
                        <component :is="selectedComponent">
                            <!-- inactive components will be cached! -->
                        </component>
                    </keep-alive>
                    </transition>
                </v-container>
            </main>
        </v-app>
    </div>
</template>

<script>
import Dashboard from './admin/dashboard.vue';
import Departments from './admin/Departments.vue'
export default {
    data() {
        return {
            drawer: null,
            right: null,
            selectedComponent: 'dashboard-view'
        }
    },
    components: {
        'dashboard-view': Dashboard,
        'departments-view': Departments,
    }
}
</script>

<style scoped>

    .fade-enter-active {
        transition: all 0.15s
    }
    .fade-enter {
        opacity: 0;
    }
    .fade-leave-active {
        transition: all 0.15s;
        opacity: 0;
    }

    myactive{
        border-left-style: solid;
        border-color: blue;
    }

</style>
