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
                <v-tabs-slider style="background-color: #3B5998;"></v-tabs-slider>
            </v-tabs-bar>

            <v-tabs-items flat class="tabs-content">
                <v-tabs-content flat id="loginTab" class="no-border">
                    <v-card flat class="transparent tabs-content">
                        <v-form v-model="login.rules.valid" ref="loginform" lazy-validation>
                            <v-card-text flat>
                                <v-container flat grid-list-md>
                                    <v-layout flat wrap>
                                        <v-flex sm8 offset-sm2>
                                            <v-text-field label="Registration no." :rules="login.rules.regnoRule" v-model="login.email" hint="Enter your registration number" required></v-text-field>
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
                        <v-form v-model="signup.rules.valid" ref="signupform" lazy-validation>
                            <v-card-text>
                                <v-container grid-list-md>
                                    <v-layout wrap>
                                        <v-flex xs12 sm6 md6>
                                            <v-text-field label="Registration no." v-model="signup.regno" required></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md6>
                                            <v-text-field label="Mobile no." v-model="signup.phno" :rules="signup.rules.phnoRule" required></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md6>
                                            <v-text-field label="First Name" v-model="signup.firstname" required></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md6>
                                            <v-text-field label="Last Name" v-model="signup.lastname" required></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-text-field label="Email" v-model="signup.email" :rules="signup.rules.emailRule" suffix="@vitstudent.ac.in" hint="Enter your student mail id" required></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-text-field label="Password" v-model="signup.password" :rules="signup.rules.passwordRule" type="password" hint="Password may not be same as v-top password" required></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6>
                                            <v-select label="Mess" v-model="signup.mess" required :items="['North veg', 'South non veg', 'Special 1', 'Special 2']"></v-select>
                                        </v-flex>
                                        <v-flex xs12 sm6>
                                            <v-select label="Hostel" v-model="signupBlock" required :items="blockNames"></v-select>
                                        </v-flex>
                                        <v-flex xs12 sm6>
                                            <v-select label="Floor" v-model="signup.floor" required :items="floorNames"></v-select>
                                        </v-flex>
                                        <v-flex xs12 sm6>
                                            <v-text-field v-model="signup.room" label="Room no." type="number" required></v-text-field>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                                <small>*indicates required field</small>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn round primary outline dark @click="signupAction()">signup</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                            <br>
                        </v-form>
                    </v-card>
                </v-tabs-content>
            </v-tabs-items>

        </v-tabs>
        <v-snackbar v-model="snackbar" timeout=3000>
            {{snackbarText}}
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
      snackbarText: "Error occured",
      blockDetails: [],
      blockNames: [],
      floorNames: [],
      signupBlock: "",
      login: {
        email: "",
        password: "",
        pShow: true,
        rules: {
          valid: false,
          regnoRule: [v => !!v || "Registration no. is required"],
          passwordRule: [v => !!v || "Enter a password"]
        }
      },
      signup: {
        firstname: "",
        lastname: "",
        phno: "",
        regno: "",
        email: "",
        password: "",
        mess: "",
        block: "",
        floor: "",
        room: "",
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
              /^.{6,}/.test(v) || "Password must contain 6 or more characters"
          ],
          phnoRule: [
            v => !!v || "Enter a phone number"
            //   v => /^[0-9]{8,10}$/.test(v) || "Enter a valid phone number"
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
      if (this.$refs.loginform.validate()) {
        if (this.login.password == "admin") {
          this.$emit("loginAction", true);
          this.$emit("adminAction", true);
        } else {
          var regno = this.login.email;
          var pswd = this.login.password;
          var basicauth = "Basic " + btoa(regno + ":" + pswd);
          axios({
            method: "get",
            url:
              "http://127.0.0.1:8000/api/userdetail/",
            withCredentials: true,
            headers: {
              Authorization: basicauth
            }
          })
            .then(response => {
              var customResponse = response.data;
              customResponse.password = this.login.password;
              console.log("inside loginsignup", customResponse);
              this.$store.replaceState(customResponse);
              this.$emit("loginAction", true);
              this.$emit("adminAction", false);
            })
            .catch(e => {
              this.errors.push(e);
              this.snackbarText = "Invalid credentials";
              this.snackbar = true;
            });
        }
      }
    },
    signupAction() {
      if (this.$refs.signupform.validate()) {
        var newUser = {
          registration_number: this.signup.regno.toLowerCase(),
          email: this.signup.email + "@vitstudent.ac.in",
          first_name: this.signup.firstname,
          last_name: this.signup.lastname,
          phone_number: this.signup.phno,
          password: this.signup.password,
          account_for: "s",
          block: this.signupBlock,
          floor: this.signup.floor,
          room_no: this.signup.room
        };
        axios({
          method: "post",
          url: "http://127.0.0.1:8000/api/users/create/",
          withCredentials: true,
          data: newUser
        })
          .then(response => {
            console.log(response.data);
            this.$store.replaceState({
              complaints: [],
              registration_number: this.signup.regno.toLowerCase(),
              email: this.signup.email + "@vitstudent.ac.in",
              first_name: this.signup.firstname,
              last_name: this.signup.lastname,
              phone_number: this.signup.phno,
              password: this.signup.password,
              block: this.signupBlock,
              floor: this.signup.floor,
              room_no: this.signup.room
            });
            this.$emit("loginAction", true);
            this.$emit("adminAction", false);
          })
          .catch(e => {
            this.errors.push(e);
          });
      }
    },
    updateFloor() {
      for (var i = 0; i < this.blockDetails.length; i++) {
        if (this.blockDetails[i].slug == this.signup.block) {
          this.floorNames = this.blockDetails.floors;
        }
      }
    }
  },
  watch: {
    signupBlock: function(newVal) {
      console.log("new block", newVal);
      for (var i = 0; i < this.blockDetails.length; i++) {
        if (this.blockDetails[i].slug == newVal) {
          console.log("inside if statement");
          this.floorNames = this.blockDetails[i].floors;
        }
      }
    }
  },
  created() {
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/api/blockdetails/",
      withCredentials: true
    })
      .then(response => {
        console.log("block details: ", response.data);
        for (var i = 0; i < response.data.length; i++) {
          this.blockDetails.push(response.data[i]);
          var blockname = response.data[i].slug.split("-");
          this.blockNames.push(response.data[i].slug);
        }
      })
      .catch(e => {
        console.log(e);
      });
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
