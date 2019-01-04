<template>
    <v-toolbar>
        <v-toolbar-title>Любомир Станков</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn v-for="link in static_links" :key="link.name" v-bind:to="{path:link.url}" flat>
                <v-icon>{{ link.icon }}</v-icon>

                {{ link.name }}
            </v-btn>
            <v-menu offset-y>
                <v-btn slot="activator" flat>
                    Dropdown
                    <v-icon>keyboard_arrow_down</v-icon>
                </v-btn>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-title>Тест</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-title>Тест</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-title>Тест</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar-items>
    </v-toolbar>
</template>
<script>
    export default {
        data() {
            return {
                static_links: [
                    {
                        name: "Начало",
                        icon: "home",
                        url: "/",
                    },
                    {
                        name: "За мен",
                        icon: "info",
                        url: "/about-me"
                    },
                    {
                        name: "Проекти",
                        icon: "perm_media",
                        url: "/my-projects"
                    }
                ]
            }
        }
    }
</script>