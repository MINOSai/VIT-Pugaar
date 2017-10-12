<template>
    <div>
        <v-app>

            <v-navigation-drawer permanent light>
                <v-toolbar dark flat class="toolbar primary" style="background-color: #3B5998;">
                    <v-spacer></v-spacer>
                    <img src="../assets/logo.png" alt="logo" style="height:50px;margin-top:0px;">
                    <v-spacer></v-spacer><br>
                    <v-list>
                        <v-list-tile>
                            <v-list-tile-title class="title" style="color: white;">
                                Admin
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

            <!-- <main> -->
            <v-container grid-list-md text-xs-center>
                <!--v-router-->
                <!-- <dashboard-view></dashboard-view> -->
                <!-- <v-layout row wrap> -->
                <v-flex xs10 offset-xs2>
                    <transition name="fade" mode="out-in">
                        <keep-alive>
                            <component :is="selectedComponent">
                                <!-- inactive components will be cached! -->
                            </component>
                        </keep-alive>
                    </transition>
                </v-flex>
                <!-- </v-layout> -->
            </v-container>
            <!-- </main> -->

            <v-speed-dial v-model="fabConfig.fab" :top="fabConfig.top" :bottom="fabConfig.bottom" :right="fabConfig.right" :left="fabConfig.left" :direction="fabConfig.direction" :hover="fabConfig.hover" :transition="fabConfig.transition">
                <v-btn slot="activator" color="blue darken-2" dark fab hover v-model="fab">
                    <v-icon>account_circle</v-icon>
                    <v-icon>close</v-icon>
                </v-btn>
                <v-btn fab dark small color="green">
                    <v-icon>edit</v-icon>
                </v-btn>
                <v-btn fab dark small color="indigo">
                    <v-icon>add</v-icon>
                </v-btn>
                <v-btn fab dark small color="red">
                    <v-icon>delete</v-icon>
                </v-btn>
            </v-speed-dial>
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
            selectedComponent: 'dashboard-view',
            fabConfig: {
                direction: "top",
                fab: false,
                fling: false,
                hover: false,
                tabs: null,
                top: false,
                right: true,
                bottom: true,
                left: false,
                transition: 'slide-y-reverse-transition'
            }
        }
    },
    components: {
        'dashboard-view': Dashboard,
        'departments-view': Departments,
    },

    watch: {
      top (val) {
        this.fabConfig.bottom = !val
      },
      right (val) {
        this.fabConfig.left = !val
      },
      bottom (val) {
        this.fabConfig.top = !val
      },
      left (val) {
        this.fabConfig.right = !val
      }
    },

    computed: {
      activeFab () {
        switch (this.fabConfig.tabs) {
          case 'one': return { 'class': 'purple', icon: 'account_circle' }
          case 'two': return { 'class': 'red', icon: 'edit' }
          case 'three': return { 'class': 'green', icon: 'keyboard_arrow_up' }
          default: return {}
        }
      }
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
