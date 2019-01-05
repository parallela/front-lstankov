<template>
    <div id="home">
        <JB></JB>
        <Article v-for="article in articles" :key="article.id" :data="article" :full_content="false" class="animated slideInLeft"></Article>
    </div>
</template>

<script>
    import Article from '@/components/Article';
    import Jumbotron from '@/components/Jumbotron'
    import Shared from '@/Shared'

    export default {
        components: {
            Article,
            "JB": Jumbotron
        },
        data() {
            return {
                articles: []
            }
        },
        mounted() {
            this.articles = Shared.public_data.articles_data();
        },
    }
</script>
