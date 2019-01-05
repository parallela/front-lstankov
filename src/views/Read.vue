<template>
    <div id="read">
        <Article :key="current_article.id" :data="current_article" :full_content="true"
                 class="animated slideInLeft"></Article>
    </div>
</template>
<script>
    import Shared from "../Shared";
    import Article from '../components/Article'

    export default {
        data() {
            return {
                slug: this.$route.params.slug,
                current_article: []
            }
        },
        components: {
            Article
        },
        mounted() {
            this.getCurrentArticle();
        },
        methods: {
            getCurrentArticle() {
                Shared.public_data.export_baseapi().get("article/show/" + this.slug).then(({data}) => {
                    this.current_article = data;
                });
            }
        }
    }
</script>