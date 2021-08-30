<template>
    <v-container>
        <router-link
            link :to="'/apartments/like'" 
        > 
            <h3> Избранное </h3>    
        </router-link>
        <v-row>
            <v-col class="pt-10" md="4" sm="4" xs="4" lg="4" v-for="card in getCards" :key="card.id" >
                <card-apartment
                    :id="card.id"
                    :like="card.like"
                    :img="card.attributes.img"
                    :title="card.attributes.title"
                    :rooms="card.attributes.rooms"
                    :area="card.attributes.area"
                    :unit="card.attributes.unit"
                    :address="card.attributes.address"
                    :agent="card.relationships.attributes"
                />
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    import cardApartment from '../components/CardApartment.vue'
    import { mapGetters } from 'vuex'

export default {
    name: 'Apartments',

    components: {
        cardApartment
    },

    computed: {
        ...mapGetters( [ 'getApartments' ] ),

        getCards() {
            return this.getApartments
        }
    },

    mounted() {
        if ( !this.getApartments.length ) this.$store.dispatch( 'setApartments' ) 
    }
}
</script>
