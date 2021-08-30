import Vue from "vue"
import response from "../../../public/entities.json"


export default {
    state: {
        apartments: []
    },

    getters: {
        getApartments( state ) {
            return state.apartments
        },

        getApartmentLike( state ) {
            return state.apartments.filter( card => card.like === true )
        }
    },

    mutations: {
        updateLike( state, id ) {
            let find = state.apartments.findIndex( card => card.id === id && card.like === true )
            let index = state.apartments.findIndex( card => card.id === id )

            if ( find === -1 ) Vue.set( state.apartments[ index ], 'like', true )  
            if ( find !== -1 ) Vue.set( state.apartments[ index ], 'like', false )
        },

        updateApartments( state, arrApartments ) {
            state.apartments = arrApartments
        }
    },

    actions: {
        setApartments( state ) {
            setTimeout( () => {
                state.commit( 'updateApartments',  response.response )
            }, 300 )
        }
    }
}
