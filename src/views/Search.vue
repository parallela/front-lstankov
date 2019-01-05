<template>
    <div id="search">
        <Article v-for="article in results" :key="article.id" :data="article" :full_content="false"
                 class="animated slideInLeft"></Article>
    </div>
</template>
<script>
    import Article from '@/components/Article'
    import Shared from "@/Shared";

    export default {
        data() {
            return {
                query: this.$route.params.query,
                results: []
            }
        },
        watch: {
            $route(to) {
                this.results = [];
                this.query = to.params.query;
                this.getResults();
            }
        },
        components: {
            Article
        },
        mounted() {
            this.getResults();
        },
        methods: {
            getResults() {
                Shared.public_data.export_baseapi().get('articles/search?query=' + this.query).then(({data}) => {
                    data.forEach(result => {
                        this.results.push(result);
                    })
                });
            }
        }

    }
</script>