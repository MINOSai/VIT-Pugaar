<template> 
    <div v-if="!isResetPassword">
      <v-alert outline :color="alert.color" :icon="alert.icon" :value="alert.value">
              {{alert.text}}
            </v-alert>
        <v-layout>
            <v-flex xs12 sm8 offset-sm2>

                <br> 

                <template>

                    <v-card class="mx-3 card" :hover="isEdit">

                        <transition name="fade" mode="out-in">
                            <v-card-text class="my-card" v-if="isEdit" @click="invertEditCopy">
                                <p class="text-xs-center">
                                    <v-icon x-large>add</v-icon>
                                </p>
                                <p class="text-xs-center">Register new complaint</p>
                            </v-card-text>
                        </transition>

                        <transition name="fade" mode="out-in">
                            <v-card-title v-if="!isEdit">
                                <span class="headline">New complaint</span>
                            </v-card-title>
                        </transition>

                        <transition name="fade">
                            <v-card-text class="my-card" v-if="!isEdit">

                                <v-container grid-list-md>

                                  <v-form v-model="rules.valid" ref="newComplaintForm" lazy-validation>
                                    <v-flex xs12>
                                        <v-radio-group v-model="newComplaint.type" row>
                                            <v-spacer></v-spacer>
                                            <v-radio label="Hostel" value="hostel"></v-radio>
                                            <v-spacer></v-spacer>
                                            <v-radio label="Mess" value="mess"></v-radio>
                                            <v-spacer></v-spacer>
                                        </v-radio-group>
                                    </v-flex>

                                    <transition name="fade-full">
                                        <v-layout v-if="newComplaint.type=='hostel'" wrap>
                                            <v-flex xs12 sm6>
                                                <v-select label="Place" v-model="newComplaint.place" required :items="['Floor', 'Room']"></v-select>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-select label="Type" v-model="newComplaint.department" required :items="['Sample department','Toiletries', 'Electrical', 'Carpentry', 'Painting', ]"></v-select>
                                            </v-flex>
                                        </v-layout>
                                    </transition>

                                    <v-layout wrap>
                                        <v-flex xs12>
                                            <v-text-field v-model="newComplaint.description" :rules="rules.descriptionRule" label="Description" type="text" hint="This text will go through a spam filter" required></v-text-field>
                                        </v-flex>
                                    </v-layout>
                                  </v-form>

                                </v-container>

                                <small>*indicates required field</small>
                            </v-card-text>
                        </transition>

                        <transition name="fade">
                            <v-card-actions v-if="!isEdit">
                                <transition name="fade-full">
                                    <v-switch v-if="type=='hostel'" label="Tip" v-model="isTip"></v-switch>
                                </transition>
                                <v-spacer></v-spacer>
                                <v-btn class="orange--text darken-1" flat @click.native="invertEditCopy">cancel</v-btn>
                                <v-btn class="blue--text darken-1" @click.native="addNewComplaint" flat>send</v-btn>
                            </v-card-actions>
                        </transition>

                    </v-card>

                    <br>

                </template>

                <h1 align="center" v-if="!complaints.length">No complaints to show</h1>

                <template v-for="(complaint,index) in complaints">

                    <v-card class="mx-3" :key="complaint.slug">
                        <v-card-title primary-title>
                            <h3 class="headline mb-0">{{ complaint.department.toUpperCase() }}</h3>
                            <v-spacer></v-spacer>
                            <p>{{complaint.timestamp.substring(0,10)}}</p>
                        </v-card-title>

                        <v-card-text>
                            {{ complaint.description }}
                        </v-card-text>

                        <v-stepper :value="complaint.statusNum" class="hidden-sm-and-down mx-3 elevation-0">
                            <v-stepper-header>
                                <v-stepper-step step="1" :complete="true">Logged
                                </v-stepper-step>
                                <v-divider></v-divider>
                                <v-stepper-step step="2" :complete="true">Processing
                                </v-stepper-step>
                                <v-divider></v-divider>
                                <v-stepper-step step="3" :complete="complaint.status">completed
                                </v-stepper-step>
                            </v-stepper-header>
                        </v-stepper>

                        <v-stepper :value="complaint.statusNum" vertical class="hidden-md-and-up mx-3 elevation-0">
                            <v-stepper-step step="1" :complete="true">Logged
                            </v-stepper-step>
                            <v-stepper-step step="2" :complete="true">Processing
                            </v-stepper-step>
                            <v-stepper-step step="3" :complete="complaint.status">Completed
                            </v-stepper-step>
                        </v-stepper>

                        <v-expansion-panel class="elevation-0">
                            <v-expansion-panel-content>
                                <div slot="header">More details</div>
                                <v-card>
                                    <!-- <v-card-text><strong>Department:</strong> {{complaint.department}}</v-card-text> -->
                                    <v-card-text>This complaint belongs to <strong>{{complaint.department}}</strong> department.</v-card-text>
                                    <v-card-text>This complaint has been assigned to the employee <strong>{{complaint.employee}}</strong></v-card-text>
                                    <!-- <v-card-text><strong>Employee:</strong> {{complaint.employee}}</v-card-text> -->
                                    <v-card-text v-if="complaint.status"><strong>Issue count:</strong> {{complaint.issue_count}}</v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn v-if="complaint.status" dark flat class="orange--text" @click="complaint.issue_count++">raise issue</v-btn>
                                        <!-- <v-btn @click="removeComplaint(index)" v-else flat>Cancel</v-btn> -->
                                        <v-dialog v-else v-model="dialog" lazy absolute max-width="350">
                                            <v-btn flat slot="activator">Cancel</v-btn>
                                            <v-card >
                                                <v-card-title>
                                                    <div class="headline">Cancel complaint</div>
                                                </v-card-title>
                                                <v-card-text>Are you sure you want to cancel this complaint?</v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn flat="flat" @click.native="dialog = false">No</v-btn>
                                                    <v-btn class="orange--text" flat="flat" @click.native="removeComplaint(index)">Yes</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-dialog>
                                    </v-card-actions>
                                </v-card>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                    </v-card>

                    <br>

                </template>

            </v-flex>
            <v-snackbar v-model="snackbar.snackbar" timeout=7500 :class="snackbar.snackbarColor" bottom="true">
                {{snackbar.snackbarText}}
                <v-progress-circular v-if="snackbar.progressBar" indeterminate></v-progress-circular>
                <v-btn v-else flat color="white" @click.native="snackbar.snackbar = false">Close</v-btn>
            </v-snackbar>
            <!-- <v-alert outline :color="alert.color" :icon="alert.icon" :value="alert.value">
              {{alert.text}}
            </v-alert> -->
        </v-layout>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isEdit: true,
      snackbar: {
        snackbar: false,
        snackbarText: "Error occurred",
        snackbarColor: "primary",
        progressBar: false
      },
      fab: true,
      newComplaint: {
        type: "hostel",
        place: null,
        department: null,
        description: null,
        isTip: false
      },
      rules: {
        valid: false,
        descriptionRule: [v => !!v || "Description is required"]
      },
      complaints: [],
      dialog: false,
      alert: {
        color: "info",
        text: "",
        icon: "info",
        value: false
      }
    };
  },
  methods: {
    createAlert(data) {
      this.alert.color = data.color;
      this.alert.text = data.text;
      this.alert.icon = data.info;
      this.alert.value = true;
      setTimeout(() => {
        this.alert.value = false;
      }, 5000);
    },
    createSnackBar(data){
      //TODO: create snackbar
    },
    invertEdit(data) {
      this.newComplaint.description = null;
      if (this.isEdit == true) {
        this.isEdit = false;
      } else {
        this.isEdit = true;
      }
      this.$store.commit("updateComplaints", data);
      this.complaints = this.$store.getters.getUserComplaints;
      this.complaints.reverse();
    },
    invertEditCopy() {
      this.newComplaint.description = null;
      this.newComplaint.place = null;
      this.newComplaint.department = null;
      if (this.isEdit == true) {
        this.isEdit = false;
      } else {
        this.isEdit = true;
      }
    },
    getCurrnetDate() {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();

      if (dd < 10) {
        dd = "0" + dd;
      }

      if (mm < 10) {
        mm = "0" + mm;
      }

      today = dd + "-" + mm + "-" + yyyy;
      return today;
    },
    addNewComplaint() {
      this.snackbar.progressBar = true;
      this.snackbar.snackbarText = "Please wait"
      this.snackbar.snackbarColor = "primary"
      this.snackbar.timeout = null
      this.snackbar.snackbar = true;

      var newPostComplaint = {
        department: this.newComplaint.department
          .toLowerCase()
          .split(" ")
          .join("-"),
        user_block: this.$store.getters.block,
        user_floor: this.$store.getters.floor,
        description: this.newComplaint.description
      };
      if (this.newComplaint.place == "Room") {
        newPostComplaint.user_room = this.$store.getters.room;
      }

      var regno = this.$store.getters.regno;
      var pswd = this.$store.getters.password;
      console.log("auth credentials", {
        regno: regno,
        password: pswd
      });
      var basicauth = "Basic " + btoa(regno + ":" + pswd);
      var self = this;

      $.ajax({
        crossDomain: true,
        xhrFields: {
          withCredentials: true
        },
        type: "POST",
        url: "http://127.0.0.1:8000/api/complaints/create/",
        data: newPostComplaint,
        dataType: "json",
        success: function(data) {
          console.log("POST DATA !!", data);
          //   self.invertEdit(data);
          //   self.$store.state.complaints.unhift(data);
          self.$store.commit("updateComplaints", data);
          self.complaints = self.$store.getters.getUserComplaints;
          self.complaints.reverse();

          self.snackbar.snackbar = false;
          self.snackbar.progressBar = false;
          self.snackbar.snackbarText = "Complaint created successfully";
          self.snackbar.snackbarColor = "green";
          self.snackbar.snackbar = true;
        },
        beforeSend: function(req) {
          req.setRequestHeader("Authorization", basicauth);
        },
        statusCode: {
          400: function(xhr) {
            self.snackbar.progressBar = false;
            self.snackbar.snackbar = false;
            if (window.console)
              console.log("error 400", xhr.responseJSON.details);
            if (xhr.responseJSON.details.startsWith("UNIQUE")) {
              self.snackbar.snackbarText = "This complaint has already been registered.";
              self.snackbar.snackbarColor = "primary";
            }else if(xhr.responseJSON.details.startsWith("NOT NULL")){
              self.snackbar.snackbarText = "Internal error";
              self.snackbar.snackbarColor = "error";
            } else {
              self.snackbar.snackbarText = xhr.responseJSON.details;
              self.snackbar.snackbarColor = "error";
            }
            self.snackbar.snackbar = true;
            // self.invertEditCopy();
          }
        }
      });
      this.invertEditCopy();
    },
    removeComplaint(index) {
      this.snackbar.progressBar = true;
      this.snackbar.snackbarText = "Please wait"
      this.snackbar.snackbarColor = "primary"
      this.snackbar.timeout = null
      this.snackbar.snackbar = true

      var regno = this.$store.getters.regno;
      var pswd = this.$store.getters.password;
      var basicauth = "Basic " + btoa(regno + ":" + pswd);
      var self = this;
      axios({
        method: "DELETE",
        url: "http://127.0.0.1:8000/api/complaints/delete/",
        data: {
          pk: this.complaints[index].slug
        },
        withCredentials: true,
        headers: {
          Authorization: basicauth
        }
      })
        .then(response => {
          console.log("deleted complaint successfully");
          this.snackbar.progressBar = false;
          this.snackbar.snackbar = false;
          this.snackbar.snackbarText = "Complaint removed";
          this.snackbar.snackbarColor = "primary";
          this.snackbar.snackbar = true;
          this.complaints.splice(index, 1);
        })
        .catch(e => {
          console.log("error deleting complaint: ", e);
          this.snackbar.progressBar = false;
          this.snackbar = false;
          this.snackbarText = "An error occurred";
          this.snackbarColor = "error";
          this.snackbar = true;
        });
      this.dialog = false;
    },
    getComplaints() {
      console.log(
        "inside user template",
        this.$store.getters.getUserComplaints
      );
      // this.complaints = this.$store.getters.getUserComplaints;
    },
    getEmployeeName(empId) {
      axios
        .get("http://127.0.0.1:8000/api/employees/" + empId + "/?format=json", {
          headers: { "Access-Control-Allow-Origin": "*" }
        })
        .then(response => {
          console.log("employee name", response.data.name);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  created() {
    console.log("inside created", this.$store.getters.getUserComplaints);
    this.complaints = this.$store.getters.getUserComplaints;
    this.complaints.reverse();
    console.log("complaints length: ", this.complaints.length);
  }
};
</script>

<style>

</style>
