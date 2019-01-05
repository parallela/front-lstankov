<template>
    <v-jumbotron dark src="/img/jumbotron-bg.jpg">
        <v-container fill-height>
            <v-layout align-center>
                <v-flex text-xs-center>
                    <div class="blue-grey darken-3 animated bounceInUp">
                        <h3 class="display-2">Добре дошли в моя личен уебсайт!</h3>
                        <h4>Може да изтеглите този уебсайт от менюто
                            <router-link :to="{name:'projects'}">Проекти</router-link>
                        </h4>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-jumbotron>
</template>
<script>
    export default {}
</script>