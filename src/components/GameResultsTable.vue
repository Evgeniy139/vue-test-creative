<template>
    <v-dialog 
        v-model="isOpen" 
        class="pa-0" 
        max-width="700"
    >
        <template>
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left"> </th>
                            <th class="text-left"> Порядок угоданных карт </th>
                            <th class="text-left"> Время </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="( item, i ) in result" :key="i">
                            <td> {{ i+1 }} </td>
                            <td> <v-img width="35" :src=" `./images/${ item.img }` "> </v-img> </td>
                            <td> {{ item.time }} </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
            <v-card>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn 
                        class="pa-1" 
                        color="primary" 
                        text 
                        @click="isOpen = false"
                    >
                        закрыть 
                    </v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>

    export default {
        name: 'GameResultsTable',

        data: ()=> ({
            isOpen: false
        }),

        props: {
            bool: {
                type: Boolean,
                default: false
            },
            result: Array
        },

        watch: {
            bool() {
                this.isOpen = this.bool
            }
        }
    }
</script>
