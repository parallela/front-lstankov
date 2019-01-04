<template>
    <v-app dark> <!-- TODO: Themes -->
        <TB></TB>
        <v-content>
            <JB></JB>
            <router-view/>
        </v-content>
        <FOOTER></FOOTER>
    </v-app>
</template>

<script>
    import Toolbar from './components/Toolbar'
    import Jumbotron from './components/Jumbotron'
    import Footer from './components/Footer'

    export default {
        name: 'App',
        components: {
            "TB": Toolbar,
            "JB": Jumbotron,
            "FOOTER": Footer
        },
        data() {
            return {
                //
            }
        }
    }
</script>
