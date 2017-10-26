<template>
    <div>
        <v-layout>
            <v-flex xs12 sm8 offset-sm2>

                <br>

                <template>

                    <v-card class="mx-3 card" :hover="isEdit">

                        <transition name="fade" mode="out-in">
                            <v-card-text class="my-card" v-if="isEdit" @click="invertEdit">
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
                                                <v-select label="Place" v-model="newComplaint.place" required :items="['FLoor', 'Room']"></v-select>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-select label="Type" v-model="newComplaint.department" required :items="['Cleaning', 'Electrical', 'Carpentry', 'Plumbing']"></v-select>
                                            </v-flex>
                                        </v-layout>
                                    </transition>

                                    <v-layout wrap>
                                        <v-flex xs12>
                                            <v-text-field v-model="newComplaint.description" label="description" type="text" hint="This text will go through a spam filter" required></v-text-field>
                                        </v-flex>
                                    </v-layout>

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
                                <v-btn class="orange--text darken-1" flat @click="invertEdit">cancel</v-btn>
                                <v-btn class="blue--text darken-1" @click="addNewComplaint" flat>send</v-btn>
                            </v-card-actions>
                        </transition>

                    </v-card>

                    <br>

                </template>

                <v-btn flat @click="getComplaints()">get data</v-btn>

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
                                <v-stepper-step step="3" :complete="complaint.issue">completed
                                </v-stepper-step>
                            </v-stepper-header>
                        </v-stepper>

                        <v-stepper :value="complaint.statusNum" vertical class="hidden-md-and-up mx-3 elevation-0">
                            <v-stepper-step step="1" :complete="true">Logged
                            </v-stepper-step>
                            <v-stepper-step step="2" :complete="true">Processing
                            </v-stepper-step>
                            <v-stepper-step step="3" :complete="complaint.issue">Completed
                            </v-stepper-step>
                        </v-stepper>

                        <v-expansion-panel class="elevation-0">
                            <v-expansion-panel-content>
                                <div slot="header">More details</div>
                                <v-card>
                                    <v-card-text><strong>Department:</strong> {{complaint.department}}</v-card-text>
                                    <v-card-text><strong>Employee:</strong> {{complaint.employee}}</v-card-text>
                                    <v-card-text v-if="complaint.issue"><strong>Issue count:</strong> {{complaint.issue_count}}</v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn v-if="complaint.issue" dark flat class="orange--text" @click="complaint.issue_count++">raise issue</v-btn>
                                        <!-- <v-btn @click="removeComplaint(index)" v-else flat>Cancel</v-btn> -->
                                        <v-dialog v-else v-model="dialog" lazy absolute>
                                            <v-btn flat slot="activator">Cancel</v-btn>
                                            <v-card>
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
        </v-layout>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isEdit: true,
      newComplaint: {
        type: "hostel",
        place: null,
        department: null,
        description: null,
        isTip: false
      },
      complaints: [
        {
          id: "ABC1234",
          description:
            "1. This is a description and this will come in description section.",
          statusNum: 1,
          type: "Hostel",
          place: "Floor",
          department: "Cleaning",
          date: "12/12/2012"
        },
        {
          id: "DKB3887",
          description:
            "2. This is a description and this will come in description section.",
          statusNum: 2,
          type: "Hostel",
          place: "Floor",
          department: "Cleaning",
          date: "12/12/2012"
        },
        {
          id: "AOM4383",
          description:
            "3. This is a description and this will come in description section.",
          statusNum: 3,
          type: "Hostel",
          place: "Floor",
          department: "Cleaning",
          date: "12/12/2012"
        }
      ],
      dialog: false
    };
  },
  methods: {
    invertEdit() {
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

      today = dd + "/" + mm + "/" + yyyy;
      return today;
    },
    addNewComplaint() {
      this.complaints.unshift({
        id: "ODN0928",
        description: this.newComplaint.description,
        statusNum: 1,
        type: this.newComplaint.type,
        place: this.newComplaint.place,
        department: this.newComplaint.department,
        date: this.getCurrnetDate()
      });
      this.newComplaint.description = null;
      this.invertEdit();
    },
    removeComplaint(index) {
      this.dialog = false;
      this.complaints.splice(index, 1);
    },
    getComplaints() {
        console.log('inside user template',this.$store.getters.getUserComplaints)
        // this.complaints = this.$store.getters.getUserComplaints;
    }
  },
  created() {
      this.complaints = this.$store.getters.getUserComplaints;
  }
};
</script>

<style>

</style>
