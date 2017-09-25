<template>
    <div>
        <v-card>
            <v-card-title>
                <span style="font-size: 1.5em;">
                    <strong>Departments</strong>
                </span>
                <v-spacer></v-spacer>
                <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
            </v-card-title>
            <v-data-table v-bind:headers="headers" v-bind:items="items" v-bind:search="search">
                <template slot="items" scope="props">
                    <td>
                        <v-edit-dialog lazy> {{ props.item.name }}
                            <v-text-field slot="input" label="Edit" v-model="props.item.name" single-line counter :rules="[max25chars]"></v-text-field>
                        </v-edit-dialog>
                    </td>
                    <td class="text-xs-right">{{ props.item.calories }}</td>
                    <td class="text-xs-right">{{ props.item.fat }}</td>
                    <td class="text-xs-right">{{ props.item.carbs }}</td>
                    <td class="text-xs-right">{{ props.item.protein }}</td>
                    <td class="text-xs-right">{{ props.item.sodium }}</td>
                    <td class="text-xs-right">{{ props.item.calcium }}</td>
                    <td class="text-xs-right">
                        <v-edit-dialog @open="tmp = props.item.iron" @save="props.item.iron = tmp || props.item.iron" large lazy>
                            <div>{{ props.item.iron }}</div>
                            <div slot="input" class="mt-3 title">Update Iron</div>
                            <v-text-field slot="input" label="Edit" v-model="tmp" single-line counter autofocus :rules="[max25chars]"></v-text-field>
                        </v-edit-dialog>
                    </td>
                </template>
                <template slot="pageText" scope="{ pageStart, pageStop }">
                    From {{ pageStart }} to {{ pageStop }}
                </template>
            </v-data-table>
        </v-card>

        <br>

        <v-card>
            <v-card-title>
                <span style="font-size: 1.5em;">
                    <strong>Employees</strong> Complaints</span>
                <v-spacer></v-spacer>
                <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
            </v-card-title>
            <v-data-table v-bind:headers="headers" v-bind:items="items" v-bind:search="search">
                <template slot="items" scope="props">
                    <td>
                        <v-edit-dialog lazy> {{ props.item.name }}
                            <v-text-field slot="input" label="Edit" v-model="props.item.name" single-line counter :rules="[max25chars]"></v-text-field>
                        </v-edit-dialog>
                    </td>
                    <td class="text-xs-right">{{ props.item.calories }}</td>
                    <td class="text-xs-right">{{ props.item.fat }}</td>
                    <td class="text-xs-right">{{ props.item.carbs }}</td>
                    <td class="text-xs-right">{{ props.item.protein }}</td>
                    <td class="text-xs-right">{{ props.item.sodium }}</td>
                    <td class="text-xs-right">{{ props.item.calcium }}</td>
                    <td class="text-xs-right">
                        <v-edit-dialog @open="tmp = props.item.iron" @save="props.item.iron = tmp || props.item.iron" large lazy>
                            <div>{{ props.item.iron }}</div>
                            <div slot="input" class="mt-3 title">Update Iron</div>
                            <v-text-field slot="input" label="Edit" v-model="tmp" single-line counter autofocus :rules="[max25chars]"></v-text-field>
                        </v-edit-dialog>
                    </td>
                </template>
                <template slot="pageText" scope="{ pageStart, pageStop }">
                    From {{ pageStart }} to {{ pageStop }}
                </template>
            </v-data-table>
        </v-card>

        <br>

        <v-expansion-panel>
            <v-expansion-panel-content v-for="(item,i) in 5" :key="i">
                <div slot="header">Item</div>
                <v-card>
                    <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </div>
</template>


<script>
export default {
    data: function() {
        return {
            max25chars: (v) => v.length <= 25 || 'Input too long!',
            tmp: '',
            search: '',
            pagination: {},
            headers: [
                {
                    text: 'Dessert (100g serving)',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Calories', value: 'calories' },
                { text: 'Fat (g)', value: 'fat' },
                { text: 'Carbs (g)', value: 'carbs' },
                { text: 'Protein (g)', value: 'protein' },
                { text: 'Sodium (mg)', value: 'sodium' },
                { text: 'Calcium (%)', value: 'calcium' },
                { text: 'Iron (%)', value: 'iron' }
            ],
            items: [
                {
                    value: false,
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    sodium: 87,
                    calcium: '14%',
                    iron: '1%'
                },
                {
                    value: false,
                    name: 'Ice cream sandwich',
                    calories: 237,
                    fat: 9.0,
                    carbs: 37,
                    protein: 4.3,
                    sodium: 129,
                    calcium: '8%',
                    iron: '1%'
                },
                {
                    value: false,
                    name: 'Eclair',
                    calories: 262,
                    fat: 16.0,
                    carbs: 23,
                    protein: 6.0,
                    sodium: 337,
                    calcium: '6%',
                    iron: '7%'
                },
                {
                    value: false,
                    name: 'Cupcake',
                    calories: 305,
                    fat: 3.7,
                    carbs: 67,
                    protein: 4.3,
                    sodium: 413,
                    calcium: '3%',
                    iron: '8%'
                },
                {
                    value: false,
                    name: 'Gingerbread',
                    calories: 356,
                    fat: 16.0,
                    carbs: 49,
                    protein: 3.9,
                    sodium: 327,
                    calcium: '7%',
                    iron: '16%'
                },
                {
                    value: false,
                    name: 'Jelly bean',
                    calories: 375,
                    fat: 0.0,
                    carbs: 94,
                    protein: 0.0,
                    sodium: 50,
                    calcium: '0%',
                    iron: '0%'
                },
                {
                    value: false,
                    name: 'Lollipop',
                    calories: 392,
                    fat: 0.2,
                    carbs: 98,
                    protein: 0,
                    sodium: 38,
                    calcium: '0%',
                    iron: '2%'
                },
                {
                    value: false,
                    name: 'Honeycomb',
                    calories: 408,
                    fat: 3.2,
                    carbs: 87,
                    protein: 6.5,
                    sodium: 562,
                    calcium: '0%',
                    iron: '45%'
                },
                {
                    value: false,
                    name: 'Donut',
                    calories: 452,
                    fat: 25.0,
                    carbs: 51,
                    protein: 4.9,
                    sodium: 326,
                    calcium: '2%',
                    iron: '22%'
                },
                {
                    value: false,
                    name: 'KitKat',
                    calories: 518,
                    fat: 26.0,
                    carbs: 65,
                    protein: 7,
                    sodium: 54,
                    calcium: '12%',
                    iron: '6%'
                }
            ]
        }
    }
}
</script>

<style>

</style>

