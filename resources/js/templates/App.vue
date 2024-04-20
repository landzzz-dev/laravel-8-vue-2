<template>
    <v-app>
        <!--  -->
        <v-app-bar app clipped-left>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Laravel 8 Vue 2</v-toolbar-title>
        </v-app-bar>
        <!--  -->
        <v-navigation-drawer app clipped v-model="drawer">
            <v-list dense>
                <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <!--  -->
        <v-main>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>
        <!--  -->
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            drawer: null,
            items: [
                { text: 'Home', icon: 'mdi-home', to: 'home' },
                { text: 'About', icon: 'mdi-information', to: 'about' }
            ],
        }
    },
}
</script>