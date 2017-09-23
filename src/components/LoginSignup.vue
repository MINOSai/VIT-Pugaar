<template>
    <div>

        <v-toolbar class="primary" id="tool-bar">
            <v-spacer></v-spacer>
            <img src="../assets/logo.png" alt="logo" style="height:90px;margin-top:60px;margin-bottom:10px;">
            <v-spacer></v-spacer>
        </v-toolbar>

        <v-tabs dark fixed centered>

            <v-tabs-bar>
                <v-tabs-item href="#loginTab">
                    Login
                </v-tabs-item>
                <v-tabs-item href="#signupTab">
                    Signup
                </v-tabs-item>
                <v-tabs-slider class="white"></v-tabs-slider>
            </v-tabs-bar>

            <v-tabs-items class="elevation-0">
                <v-tabs-content flat id="loginTab">
                    <v-card class="elevation-0" flat>

                        <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>
                                    <v-flex xs12>
                                        <v-text-field label="Email" v-model="login.email" suffix="@vitstudent.ac.in" hint="Enter your student mail id" required></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-text-field label="Password" v-model="login.password" type="password" hint="Password may not be the same as v-top password" :append-icon="login.pShow ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (login.pShow = !login.pShow)" :type="login.pShow ? 'password' : 'text'" required></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                            <small>*indicates required field</small>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn round primary outline dark @click="loginAction()">login</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-layout row justify-center>
                                <v-dialog v-model="dialog" width="50%">
                                    <v-btn block slot="activator" flat>reset password</v-btn>
                                    <v-card>
                                        <v-card-title>
                                            <span class="headline">User Profile</span>
                                        </v-card-title>
                                        <v-card-text>
                                            Enter you registered email id.
                                        </v-card-text>
                                        <v-card-text>
                                            <v-container grid-list-md>
                                                <v-layout wrap>
                                                    <v-flex xs12>
                                                        <v-text-field label="Email" required></v-text-field>
                                                    </v-flex>
                                                    <v-flex xs12>
                                                        <v-text-field label="Password" type="password" required></v-text-field>
                                                    </v-flex>
                                                </v-layout>
                                            </v-container>
                                            <small>*indicates required field</small>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Close</v-btn>
                                            <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Save</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </v-layout>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-tabs-content>

                <v-tabs-content id="signupTab">
                    <v-card flat>

                        <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field label="Legal first name" required></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field label="Legal last name" hint="example of persistent helper text" required></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-text-field label="Email" hint="Enter your student mail id" required></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-text-field label="Password" type="password" hint="Password may not be same as v-top password" required></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6>
                                        <v-select label="Age" required :items="['0-17', '18-29', '30-54', '54+']"></v-select>
                                    </v-flex>
                                    <v-flex xs12 sm6>
                                        <v-select label="Age" required :items="['0-17', '18-29', '30-54', '54+']"></v-select>
                                    </v-flex>
                                    <v-flex xs12 sm6>
                                        <v-select label="Interests" multiple autocomplete chips :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"></v-select>
                                    </v-flex>
                                    <v-flex xs12 sm6>
                                        <v-select label="Interests" multiple autocomplete chips :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"></v-select>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                            <small>*indicates required field</small>
                        </v-card-text>

                    </v-card>
                </v-tabs-content>
            </v-tabs-items>

        </v-tabs>
    </div>
</template>

<script>
import AppBar from './AppBar.vue'
export default {
    data: function() {
        return {
            dialog: false,
            login: {
                email: '',
                password: '',
                pShow: true
            },
            signup: {
                name: '',
                regno: '',
                email: '',
                password: ''
            }
        }
    },
    components: {
        'app-bar': AppBar,
    },
    methods: {
        loginAction() {
            this.$emit('loginAction', true);
        }
    }
}
</script>

<style scoped>
#tool-bar {
    height: 100px;
}
</style>
