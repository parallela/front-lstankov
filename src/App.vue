<template>
    <v-app dark> <!-- TODO: Themes -->
        <TB></TB>
        <v-content>
            <transition name="fade">
                <router-view/>
            </transition>
        </v-content>
        <FOOTER></FOOTER>
    </v-app>
</template>

<script>
    import Toolbar from './components/Toolbar'
    import Footer from './components/Footer'

    export default {
        name: 'App',
        components: {
            "TB": Toolbar,
            "FOOTER": Footer
        },
    }
</script>
