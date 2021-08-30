    export default {
        state: {
            cards: [],
            resultGame: []
        },

        getters: {
            getGameResult( state ) {
                return state.resultGame
            },

            getCards( state ) {
                return state.cards
            },

            getShowCards( state ) {
                return state.cards.filter( card => card.showFront === true )
            }
        },

        mutations: {
            updateSetCards( state, arr ) {
                state.cards = JSON.parse( JSON.stringify( arr ) )
            },

            updateCards( state, id ) {
                state.cards[ id ].showFront = true
            },

            updateCardsShowFalse( state ) {
                state.cards = state.cards.map( card => { 
                    card.showFront = false 
                    return card 
                } )
            },

            deleteCards( state, arr ) {
                state.cards = state.cards.filter( card => card.showFront !== true )
                state.resultGame.push( {
                    img: arr.img,
                    time: arr.time 
                } )
            },

            deleteAllCards( state ) {
                state.cards = []
            },

            deleteGameResult( state ) {
                state.resultGame = []
            },
        },

        actions: {
            setRandomCards( state ) {
                const getCards = [
                    {
                        id: 1,
                        showFront: false,
                        front: '3ac301b52bb02ef94c7b9888cc2f99a1.jpg'
                    },
                    {
                        id: 2,
                        showFront: false,
                        front: '9ce34f53c912.jpg'
                    },
                    {
                        id: 3,
                        showFront: false,
                        front: '268aed4d292a0e5c144bfafb1a087cc9.jpg'
                    },
                    {
                        id: 4,
                        showFront: false,
                        front: '534460dbf1a9541630b31de90b095592.jpg'
                    },
                    {
                        id: 5,
                        showFront: false,
                        front: '3972153_original.jpg'
                    },
                    {
                        id: 6,
                        showFront: false,
                        front: '1508266152_nefotogenichnye-22.jpg'
                    },
                    {
                        id: 7,
                        showFront: false,
                        front: '1530030816_animal_17.jpg'
                    },
                    {
                        id: 8,
                        showFront: false,
                        front: '16070916281717.jpg'
                    },
                    {
                        id: 9,
                        showFront: false,
                        front: '20140307181323.jpg'
                    },
                    {
                        id: 10,
                        showFront: false,
                        front: 'butterfly5.jpg'
                    },
                    {
                        id: 11,
                        showFront: false,
                        front: 'cf01aeb488866148dfc9.jpg'
                    },
                    {
                        id: 12,
                        showFront: false,
                        front: 'photographer-880-837x1024.jpg'
                    },
                    {
                        id: 13,
                        showFront: false,
                        front: 'scale_1200 (1).jpg'
                    },
                    {
                        id: 14,
                        showFront: false,
                        front: 'skachat.jpg'
                    },
                    {
                        id: 15,
                        showFront: false,
                        front: 'skzh-25-07.jpg'
                    },
                    {
                        id: 16,
                        showFront: false,
                        front: 'udivlennye-zhivotnye-foto_40.jpg'
                    },
                    {
                        id: 17,
                        showFront: false,
                        front: 'milayaya-cat-08070516012021-0.jpg'
                    },
                    {
                        id: 18,
                        showFront: false,
                        front: 'funny-animal-gorilla.jpg'
                    }
                ]
                state.commit('updateSetCards', [ ...getCards, ...getCards ].map( i=>[Math.random(), i] ).sort().map( i=>i[ 1 ] ) )
            }
        }
    }
