<template>
    <div id="search">
        <v-flex xs12 sm12>
            <v-text-field focus
                          v-model="searchText" outline
                          append-icon="search"
                          label="Търси" color="black" :append-icon-cb="method" hide-details
                          single-line></v-text-field>
        </v-flex>
    </div>
</template>
<script>
    export default {

    }
</script>