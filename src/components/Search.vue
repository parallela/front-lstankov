<template>
    <div id="search">
        <v-flex xs12 sm12>
            <v-text-field focus
                          v-model="query" outline
                          append-icon="search"
                          label="Търси" color="black" :append-icon-cb="search" hide-details
                          single-line></v-text-field>
        </v-flex>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                query: null
            }
        },
        methods: {
            search() {
                this.$router.push('/search/'+this.query)
            }
        }
    }
</script>