<template>
    <v-container>
        <v-img 
            :src="`https://${img}`"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.1)"
        >
            <h5> {{ title }} {{ area }} {{ unit }} </h5>
        </v-img>

        <v-card-actions class='pa-0'>
            <v-card-text>
                Кол-во комнат: {{ rooms }} Подробнее: 
            </v-card-text>
            <v-btn
                icon
                :color="like ? colors.pink : colors.grey"
                @click="showLike( id )"
                >
                <v-icon> mdi-heart </v-icon>
            </v-btn>

            <v-btn icon @click="show = !show">
                <v-icon> {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }} </v-icon>
            </v-btn>
        </v-card-actions>

        <v-expand-transition>
            <div v-show="show">
                <h4> Адресс </h4>
                <ul>
                    <li v-for="( value, key ) of address" :key="key"> {{ key }}: {{ value }} </li>
                </ul>
                <h4> Агент </h4>
                <span class="pa-0"> {{ agent.last_name }} {{ agent.first_name }} {{ agent.middle_name }} </span>
            </div>
        </v-expand-transition>
    </v-container>
</template>

<script>

import { mapMutations } from 'vuex'

export default ({
    name: 'CardApartment',

    data: () => ({
        show: false,
        colors: {
            pink: 'pink',
            grey: 'grey'
        }
    }),

    props: {
        id: Number,
        like: {
            type: Boolean,
            default: false
        },
        img: String,
        title: String,
        rooms: Number,
        area: Number,
        unit: String,
        address: Object,
        agent: Object
    },

    methods: {
        ...mapMutations( ['updateLike'] ),

        showLike( id ) {
            this.updateLike( id )
        }
    }

})
</script>
