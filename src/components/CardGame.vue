<template>
    <v-row
        class="pa-1"
        no-gutters
        align="center" 
        justify="center"
    >   
        <v-col class="pa-1" :cols='2' v-for="(card, id) in arr" :key="id">
            <v-img
                :src="card.showFront ? `./images/${ card.front }` : './images/b70955ea1eae.jpg'"
                @click="show( id, card.front )">
            </v-img>
        </v-col>
    </v-row>
</template>

<script>

export default {
    name: 'CardGame',

    props: {
        arr: Array
    },

    methods: {
        show( index, img ) {
            this.$emit('eventShow', index, img )
        }
    }
}
</script>
