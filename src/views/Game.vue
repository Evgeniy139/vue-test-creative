<template>
    <v-row 
        align="center" 
        justify="center"
    >
        <v-card
            class="pa-2"
            width="600" 
            elevation="0"
        >
            <div
                class="my-2" 
                align="center" 
                justify="center"
            >
                <h2> Игра на память </h2>
                <h2> {{ time }} </h2>

                <comp-btn 
                    @click="clickBtn"
                    :color="params ? 'cyan' : 'teal' "
                    :name="params ? 'restart' : 'start' "
                    :icon=" params ? 'mdi-restart' : 'mdi-subdirectory-arrow-right' "
                />
            </div>

            <card-game
                @eventShow="show"
                :arr="getAllCards"
            />
        </v-card>
        <game-results-table
            :result="getGameResult"
            :bool="showTable" 
        />
    </v-row>
</template>

<script>
    import cardGame from '../components/CardGame'
    import timer from '../mixins/timer'
    import compBtn from '../components/Btn'
    import GameResultsTable from '../components/GameResultsTable'
    import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: 'Game',
    mixins: [ timer ],

    components: {
        cardGame,
    //    compHeaderText,
        compBtn,
        GameResultsTable
    },

    data: () => ({
        setTimeout: 0
    }),

    computed: {
        ...mapGetters( ['getCards', 'getShowCards', 'getGameResult'] ),

        getAllCards() {
            if ( !this.getCards.length ) this.stopTimer()
            return this.getCards
        },

        showTable() {
            if ( this.getGameResult.length === 18 ) return true
            return false
        },

        params() {
            return this.getCards.length > 0
        }
    },

    methods: {
        ...mapMutations( ['updateCards', 'updateCardsShowFalse', 'deleteCards', 'deleteAllCards', 'deleteGameResult'] ),
        ...mapActions( ['setRandomCards'] ),

        show( index, img ) {
            if ( this.getShowCards.length >= 2 ) return

            this.updateCards( index )
            const cardsShow = this.getShowCards

            if ( cardsShow.length === 1 ) this.setTimeout = setTimeout( this.updateCardsShowFalse, 5000 )

            if ( cardsShow.length === 2 ) clearTimeout( this.setTimeout )

            if ( cardsShow.length === 2 && cardsShow[0].id !== cardsShow[1].id ) setTimeout( this.updateCardsShowFalse, 1000 )

            if ( cardsShow.length === 2 && cardsShow[0].id === cardsShow[1].id ) setTimeout( () => this.deleteCards( {img: img, time: this.currentTime } ), 1000 )

        },

        clickBtn() {
            if ( this.timer.length !== 0 ) this.clearTime()

            if ( this.getGameResult.length !== 0 ) this.deleteGameResult()

            this.setRandomCards()
            this.startTimer()
        }
    },

    mounted() {
        if ( this.getCards.length !== 0 ) this.deleteAllCards()
    }
}
</script>
