export default {
    name: 'timer',

    data: () => ({
        timer: 0,
        seconds: 0,
        minutes: 0,
        currentTime: '',
        
    }),

    computed: {
        time() {
            let getSeconds = this.seconds < 10 ? "0"+ this.seconds : this.seconds
            let getMinutes = this.minutes < 10 ? '0'+ this.minutes : this.minutes

            if ( this.seconds === 59 ) {
                this.seconds = -1
                this.minutes += 1
            }
            return this.currentTime = `${ getMinutes } : ${ getSeconds }`
        }
    },

    methods: {
        startTimer() {
            this.timer = setInterval( () => { this.seconds++ }, 1000)
        },

        stopTimer() {
            clearTimeout( this.timer )
        },

        clearTime() {
            this.stopTimer(),
            this.seconds = 0,
            this.minutes = 0
        }
    },

    destroyed() {
        this.stopTimer()
    },
}