<template>
    <div class="tabs-content">

        <v-toolbar class="transparent elevation-0" id="tool-bar">
            <v-spacer></v-spacer>
            <img src="../assets/logo1.png" alt="logo" class="topImage">
            <v-spacer></v-spacer>
        </v-toolbar>

        <v-tabs class="transparent elevation-0 dark tabs-content" fixed centered>

            <v-tabs-bar class="transparent tabs-content elevation-0">
                <v-tabs-item href="#loginTab">
                    Login
                </v-tabs-item>
                <v-tabs-item href="#signupTab">
                    Signup
                </v-tabs-item>
                <v-tabs-slider class="primary"></v-tabs-slider>
            </v-tabs-bar>

            <v-tabs-items flat class="tabs-content">
                <v-tabs-content flat id="loginTab" class="no-border">
                    <v-card flat class="transparent tabs-content">
                        <v-form v-model="login.rules.valid" ref="form" lazy-validation>
                            <v-card-text flat>
                                <v-container flat grid-list-md>
                                    <v-layout flat wrap>
                                        <v-flex sm8 offset-sm2>
                                            <v-text-field label="Email" :rules="login.rules.emailRule" v-model="login.email" suffix="@vitstudent.ac.in" hint="Enter your student mail id" required></v-text-field>
                                        </v-flex>
                                        <v-flex sm8 offset-sm2>
                                            <v-text-field label="Password" :rules="login.rules.passwordRule" v-model="login.password" type="password" hint="Password may not be the same as v-top password" :append-icon="login.pShow ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (login.pShow = !login.pShow)" :type="login.pShow ? 'password' : 'text'" required></v-text-field>
                                        </v-flex>
                                        <v-flex sm8 offset-sm2>
                                            <small>*indicates required field</small>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                                <!-- <small>*indicates required field</small> -->
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn round primary outline dark @click="loginAction()">login</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-form>

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
                                                    <!-- <v-flex xs12>
                                                                                    <v-text-field label="Password" type="password" required></v-text-field>
                                                                                </v-flex> -->
                                                </v-layout>
                                            </v-container>
                                            <small>*indicates required field</small>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Close</v-btn>
                                            <v-btn class="blue--text darken-1" flat @click.native="dialog = false">send</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </v-layout>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-tabs-content>

                <v-tabs-content id="signupTab" class="transparent">
                    <v-card class="transparent">
                        <v-form v-model="signup.rules.valid" ref="form" lazy-validation>
                            <v-card-text>
                                <v-container grid-list-md>
                                    <v-layout wrap>
                                        <v-flex xs12 sm6 md6>
                                            <v-text-field label="Registration no." required></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md6>
                                            <v-text-field label="Name" required></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-text-field label="Email" :rules="signup.rules.emailRule" suffix="@vitstudent.ac.in" hint="Enter your student mail id" required></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-text-field label="Password" :rules="signup.rules.passwordRule" type="password" hint="Password may not be same as v-top password" required></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6>
                                            <v-select label="Mess" required :items="['0-17', '18-29', '30-54', '54+']"></v-select>
                                        </v-flex>
                                        <v-flex xs12 sm6>
                                            <v-select label="Hostel" required :items="['0-17', '18-29', '30-54', '54+']"></v-select>
                                        </v-flex>
                                        <v-flex xs12 sm6>
                                            <v-select label="Floor" required :items="['0-17', '18-29', '30-54', '54+']"></v-select>
                                        </v-flex>
                                        <v-flex xs12 sm6>
                                            <v-text-field label="Room no." type="number" required></v-text-field>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                                <small>*indicates required field</small>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn round primary outline dark @click="loginAction()">signup</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                            <br>
                        </v-form>
                    </v-card>
                </v-tabs-content>
            </v-tabs-items>

        </v-tabs>
        <v-snackbar v-model="snackbar" timeout=3000>
            Error occured
            <v-btn flat color="orange" @click.native="snackbar = false">Close</v-btn>
        </v-snackbar>
    </div>
</template>

<script>
import axios from "axios";
import AppBar from "./AppBar.vue";
export default {
  data: function() {
    return {
      dialog: false,
      snackbar: false,
      login: {
        email: "",
        password: "",
        pShow: true,
        rules: {
          valid: false,
          emailRule: [
            v => !!v || "E-mail is required",
            v =>
              /^[a-z0-9._%+-]+(@vitstudent.ac.in|)$/.test(v) ||
              "E-mail must be valid"
          ],
          passwordRule: [v => !!v || "Enter a password"]
        }
      },
      signup: {
        name: "",
        regno: "",
        email: "",
        password: "",
        rules: {
          valid: false,
          emailRule: [
            v => !!v || "E-mail is required",
            v =>
              /^[a-z0-9._%+-]+(@vitstudent.ac.in|)$/.test(v) ||
              "E-mail must be valid"
          ],
          passwordRule: [
            v => !!v || "Enter a password",
            v =>
              /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) ||
              "Password must contain 6 or more characters that are of at least one number, and one uppercase and lowercase letter"
          ]
        }
      },
      errors: []
    };
  },
  components: {
    "app-bar": AppBar
  },
  methods: {
    loginAction() {
      this.snackbar = true;
      if (this.login.rules.valid) {
        if (this.login.password == "admin") {
          this.$emit("loginAction", true);
          this.$emit("adminAction", true);
        } else {
          axios
            .get(
              "http://192.168.43.40:8000/api/users/" +
                this.login.password +
                "/?format=json",
              {
                headers: { "Access-Control-Allow-Origin": "*" }
              }
            )
            .then(response => {
              var customResponse = response.data;
              customResponse.password = this.login.password;
              this.$store.replaceState(customResponse);
              this.$emit("loginAction", true);
              this.$emit("adminAction", false);
            })
            .catch(e => {
              this.errors.push(e);
            });
        }
      }
    }
  }
};
</script>

<style scoped>
#tool-bar {
  height: 100px;
}

.topImage {
  height: 90px;
  margin-top: 60px;
  margin-bottom: 20px;
}

.tabs-content {
  border: none;
  border-width: 0px, 0px, 0px, 0px;
}
</style>
