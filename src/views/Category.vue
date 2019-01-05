<template>
    <div id="latest_articles">
        <Article v-for="article in articles" :key="article.id" :data="article" :full_content="false"
                 class="animated slideInLeft"></Article>
    </div>
</template>
<script>
    import Shared from '@/Shared'
    import Article from '@/components/Article'

    export default {
        data() {
            return {
                articles: [],
                slug: this.$route.params.slug
            }
        },
        components: {
            Article
        },
        mounted() {
            this.getCategoryArticles();
        },
        watch: {
            $route(to) {
                if (to.params.slug != this.slug) {
                    this.slug = to.params.slug;
                    this.articles = [];
                    this.getCategoryArticles();
                }
            }
        },
        methods: {
            getCategoryArticles() {
                Shared.public_data.export_baseapi().get('category/' + this.slug + '/articles').then(({data}) => {
                    data.forEach(article => {
                        this.articles.push(article)
                    });
                });
            }
        },
    }
</script>