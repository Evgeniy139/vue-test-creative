<template>
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
</template>

<script>
import cardApartment from '../components/CardApartment.vue'
import { mapGetters } from 'vuex'
export default({
    components: {
        cardApartment
    },

    computed: {
        ...mapGetters( [ 'getApartmentLike' ] ),

        getCards() {
            return this.getApartmentLike
        }
    }
})
</script>
