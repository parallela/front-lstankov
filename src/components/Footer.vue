<template>
    <v-footer
            dark
            height="auto"
    >
        <v-card
                class="flex"
                flat
        >
            <v-card class="flex" flat tile>
                <v-card-actions class="grey darken-3 justify-center">
                    &copy;2018 — <strong>Lubomir Stankov | Design by: Lubomir Stankov</strong>
                    <v-spacer></v-spacer>
                    <Search></Search>
                </v-card-actions>
            </v-card>
        </v-card>
    </v-footer>
</template>
<script>
    import Search from '@/components/Search'

    export default {
        components: {
            "Search": Search
        }
    }
</script>
