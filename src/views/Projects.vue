<template>
    <div id="projects" class="animated bounceInLeft">
        <v-card v-for="repo in repositories" style="display: inline-block;" :key="repo.id" class="mx-1 xs-4 aligned" dark>
            <v-card-title>
                <a :href="repo.html_url" class="title out-link font-weight-light">{{ repo.full_name }} <b v-if="repo.fork">Fork</b> </a>
            </v-card-title>

            <v-card-text class="font-weight-bold">
                "{{ repo.description }}"
            </v-card-text>

        </v-card>
    </div>
</template>
<script>
    import Shared from '@/Shared'

    export default {
        data() {
            return {
                repositories: Shared.public_data.get_github_projects()
            }
        }
    }
</script>