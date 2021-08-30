<template>
    <v-btn 
        @click="click" 
        width="150" 
        :color="color"
        large
    >
        <v-icon> {{ icon }} </v-icon>
        {{ name }}
    </v-btn>
</template>

<script>
    export default {
        name: 'Btn',

        data: () => ({
        }),

        methods: {
            click() {
                console.log( 'clickBtn' )
                this.$emit('click')
            }
        },

        props: {
            name: {
                type: String,
                default: 'button'
            },

            icon: {
                type: String,
                default: ''
            },

            color: {
                type: String,
                default: ''
            },
        }

    }
</script>
