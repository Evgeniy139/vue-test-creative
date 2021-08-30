<template>
    <nav>
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
        >
            <v-list>
                <v-list-item v-for="( category, index ) in categories" :key="index" link :to="category.link" >
                    <v-icon> {{ category.icon }} </v-icon>
                    <v-list-item-content class="pl-5"> {{ category.title }} </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            app
            color="primary"
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <router-link
                class="pr-5"
                :to="'/apartments/like'"
            >
                <v-icon
                    class="pr-2"
                    color="pink"
                > 
                    mdi-heart 
                </v-icon>
                <v-badge
                    tile
                    transition="5"
                    centered
                    color="teal"
                    :content="countApartmentLile" 
                    :value="countApartmentLile"
                >
                </v-badge>
            </router-link>
        </v-app-bar>
    </nav>
</template>

<script>

export default {
    name: 'App',

    data: () => ({
        drawer: false,
        group: null,
        categories: [
            { 
                title: 'Игра память',
                icon: 'mdi-gamepad-square-outline',
                link: '/'
            },

            { 
                title: 'Карточки квартир',
                icon: 'mdi-window-closed-variant',
                link: '/apartments'
            }
        ]
    }), 

    computed: {
        countApartmentLile() {
            return this.$store.getters.getApartmentLike.length
        }
    }

}
</script>
