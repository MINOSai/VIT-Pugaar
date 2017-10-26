<template>
    <div>
        <v-app>

            <v-container fluid grid-list-md style="padding:0px; margin:0px">
                <v-layout row wrap>
                    <v-flex xs12>
                        <app-bar1></app-bar1>
                    </v-flex>
                    <v-flex xs2>
                        <v-container fluid style="padding-left:10px;padding-right:5px;padding-top:5px;">
                            <v-card color="blue-grey darken-2" class="white--text">
                                <v-list dense class="py-0">
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
                                    <v-list-tile @click="selectedComponent='employees-view'">
                                        <v-list-tile-action>
                                            <v-icon>person</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title>Employees</v-list-tile-title>
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
                        </v-container>
                    </v-flex>
                    <v-flex xs10>
                        <v-container fluid style="padding-left:5px;padding-top:5px;">
                            <!--v-router-->
                            <transition name="fade" mode="out-in">
                                <keep-alive>
                                    <component :is="selectedComponent">
                                        <!-- inactive components will be cached! -->
                                    </component>
                                </keep-alive>
                            </transition>
                        </v-container>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-app>
    </div>
</template>

<script>
import Dashboard from './admin/dashboard.vue';
import Departments from './admin/Departments.vue'
import Employees from './admin/Employees.vue'
import AppBar from './AppBar.vue'
export default {
    data() {
        return {
            drawer: false,
            items: [
                { title: 'Home', icon: 'dashboard' },
                { title: 'About', icon: 'question_answer' }
            ],
            right: null,
            selectedComponent: 'dashboard-view',
        }
    },
    components: {
        'app-bar1': AppBar,
        'dashboard-view': Dashboard,
        'departments-view': Departments,
        'employees-view': Employees
    }
}
</script>

<style>
/* This is for documentation purposes and will not be needed in your application */

#create .speed-dial {
    position: absolute;
}

#create .btn--floating {
    position: relative;
}
</style>
