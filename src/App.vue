<template>
    <v-app app>
        <nav-bar />

        <v-content>
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>
import navBar from './components/NavBar.vue'

export default {
    components: { navBar },
    name: 'App',
}
</script>
