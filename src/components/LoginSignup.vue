<template>
    <div>
        <v-card class="elevation-0">
            <v-card-media :src="require('@/assets/logo1.png')" height="200px">
            </v-card-media>
            <!-- <v-card-title>
                <v-spacer></v-spacer>
                <div class="headline">Login Signup</div>
                <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text>Login Signup</v-card-text> -->

            <v-tabs fixed centered v-model="active">
                <v-tabs-bar class="white">
                    <v-tabs-item :key="tab" :href="'#' + tab" ripple>
                        Login
                    </v-tabs-item>
                    <v-tabs-item :key="tab" :href="'#' + tab" ripple>
                        Signup
                    </v-tabs-item>
                    <v-tabs-slider class="blue"></v-tabs-slider>
                </v-tabs-bar>
                <v-tabs-items>
                    <v-tabs-content :key="tab" :id="tab">
                        <v-card flat>
                            <v-card-text>asdfasdfasdfasdf</v-card-text>
                        </v-card>
                    </v-tabs-content>
                </v-tabs-items>
            </v-tabs>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat="flat">login</v-btn>
                <!-- <v-btn flat="flat">Agree</v-btn> -->
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
