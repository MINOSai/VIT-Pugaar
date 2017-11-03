<template>
    <div>
        <v-card>
            <v-card-title>
                <span style="font-size: 1.5em;"><strong>Hostel</strong> Complaints</span>
                <v-spacer></v-spacer>
                <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
            </v-card-title>
            <v-data-table v-bind:headers="headers" v-bind:items="complaints" v-bind:search="search">
                <template slot="items" scope="props">
                    <td>{{ props.item.department }}</td>
                    <td>{{ props.item.employee }}</td>
                    <td>{{ props.item.timestamp.substring(0,10) }}</td>
                    <td>{{ props.item.user_block }}</td>
                    <td>{{ props.item.user_room }}</td>
                    <td>{{ props.item.user_floor }}</td>
                    <td>{{ props.item.status }}</td>
                </template>
                <template slot="pageText" scope="{ pageStart, pageStop }">
                    From {{ pageStart }} to {{ pageStop }}
                </template>
            </v-data-table>
        </v-card>

        <br>
        
        <v-card>
            <v-card-title>
                <span style="font-size: 1.5em;"><strong>Mess</strong> Complaints</span>
                <v-spacer></v-spacer>
                <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
            </v-card-title>
            <v-data-table v-bind:headers="headers" v-bind:items="complaints" v-bind:search="search">
                <template slot="items" scope="props">
                    <td>{{ props.item.department }}</td>
                    <td>{{ props.item.employee }}</td>
                    <td>{{ props.item.timestamp.substring(0,10) }}</td>
                    <td>{{ props.item.user_block }}</td>
                    <td>{{ props.item.user_room }}</td>
                    <td>{{ props.item.user_floor }}</td>
                    <td>{{ props.item.status }}</td>
                </template>
                <template slot="pageText" scope="{ pageStart, pageStop }">
                    From {{ pageStart }} to {{ pageStop }}
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>


<script>
import axios from "axios";
export default {
  data: function() {
    return {
      tmp: "",
      search: "",
      pagination: {},
      headers: [
        { text: "Department", align: "left", value: "department" },
        { text: "Employee Id", align: "left", value: "employee" },
        { text: "Timestamp", align: "left", value: "timestamp" },
        { text: "Block", align: "left", value: "user_block" },
        { text: "Floor", align: "left", value: "user_floor" },
        { text: "Room", align: "left", value: "user_room" },
        { text: "Status", align: "left", value: "status" }
      ],
      complaints: [
        {
          value: false,
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: "14%",
          iron: "1%"
        }
      ]
    };
  },
  created() {
    axios
      .get("http://192.168.43.40:8000/api/complaints/?format=json", {
        headers: { "Access-Control-Allow-Origin": "*" }
      })
      .then(response => {
        this.complaints = response.data;
        console.log("", this.complaints);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>

<style>

</style>

