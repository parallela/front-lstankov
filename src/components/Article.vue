<template>
    <v-layout flat class="aligned">
        <v-flex xs12 sm10 offset-sm1>
            <v-card>
                <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                        aspect-ratio="9"
                ></v-img>
                <div v-if="full_content">
                    <v-btn :to="{path:this.$route.params.purl}" color="info">
                        <v-icon>arrow_back</v-icon>
                        Назад
                    </v-btn>
                </div>
                <v-card-title primary-title>
                    <div>
                        <h1 class="headline mb-2">{{ data.title }}</h1>
                    </div>
                </v-card-title>
                <v-card-title>
                    <div v-html="content"></div>
                </v-card-title>

                <div v-if="!full_content">
                    <v-card-actions>
                        <v-btn large  color="blue" :to="{name:'article',params:{slug:data.slug,purl:this.$route.path}}">
                            Прочети повече
                        </v-btn>
                    </v-card-actions>
                </div>
                <v-card-actions>
                    <v-chip color="orange" text-color="white">
                        {{ data.category.name }}
                        <v-icon right>star</v-icon>
                    </v-chip>
                    <v-spacer></v-spacer>
                    <v-chip color="gray" text-color="white">
                        {{ data.views }}
                        <v-icon right>remove_red_eye</v-icon>
                    </v-chip>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
    export default {
        name: "Article",
        props: ["data", "full_content"],
        data() {
            return {
                content: null,
                backward_url: null
            }
        },
        methods: {
            displayContentManager() {
                if (!this.full_content) {
                    this.content = this.data.content.substring(0, 450) + '....';
                } else {
                    this.content = this.data.content;
                }
            }
        },
        mounted() {
            this.displayContentManager();
        },
    }
</script>