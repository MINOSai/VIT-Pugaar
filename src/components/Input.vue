<template>
    <div>
        <v-card class="mx-3">
            <v-card-actions>
                <v-radio-group v-model="type" :mandatory="true" row>
                    <v-spacer></v-spacer>
                    <v-radio label="Hostel" value="Hostel"></v-radio>
                    <v-radio label="Mess" value="Mess"></v-radio>
                    <v-spacer></v-spacer>
                </v-radio-group>
            </v-card-actions>
            <p v-if="type=='Hostel'">You pressed hostel</p>
            <p v-else>You pressed mess</P>
            <v-card-actions>
                <v-switch class="hidden-sm-and-down mx-3" label="Anonymous tip" v-model="tip"></v-switch>
                <v-switch class="hidden-md-and-up mx-3" label="Tip" v-model="tip"></v-switch>
                <v-spacer></v-spacer>
                <v-btn flat class="orange--text">cancel</v-btn>
                <v-btn @click="isEdit=!isEdit" flat class="orange--text">submit</v-btn>
            </v-card-actions>
        </v-card>
        <br>
    </div>
</template>

<script>
export default {
    data: function(){
        type: 'Hostel'
        tip: false
    }
}
</script>

<style>

</style>
