<template>
    <div>
        <v-app>
            <v-navigation-drawer permanent light>
                <v-toolbar flat>
                    <v-list>
                        <v-list-tile>
                            <v-list-tile-title class="title">
                                Application
                            </v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-toolbar>
                <v-divider></v-divider>
                <v-list dense class="pt-0">
                    <v-list-tile v-for="item in items" :key="item.title" @click="">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>

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
            items: [
                { title: 'Home', icon: 'dashboard' },
                { title: 'About', icon: 'question_answer' }
            ],
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
