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
                articles: Shared.public_data.get_latest_articles()
            }
        },
        components: {
            Article
        }
    }
</script>