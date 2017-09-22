<template>
    <div>

        <v-toolbar class="primary" id="tool-bar">
            <v-spacer></v-spacer>
            <img src="../assets/logo.png" alt="logo" style="height:90px;margin-top:60px;margin-bottom:10px;">
            <v-spacer></v-spacer>
        </v-toolbar>

        <v-tabs dark fixed centered v-model="active">

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
                                        <v-text-field label="Email" hint="Enter your student mail id" required></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-text-field label="Password" type="password" hint="Password is not the as v-top password" required></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                            <small>*indicates required field</small>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat="flat">login</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-tabs-content>

                <v-tabs-content id="signupTab">
                    <v-card flat>

                        <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>
                                    <v-flex xs12 sm6 md4>
                                        <v-text-field label="Legal first name" required></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4>
                                        <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4>
                                        <v-text-field label="Legal last name" hint="example of persistent helper text" persistent-hint required></v-text-field>
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
    data() {
        return {
            items: ['Login', 'Signup'],
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    },
    components: {
        'app-bar': AppBar,
    }
}
</script>

<style scoped>
#tool-bar{
    height: 100px;
}
</style>
