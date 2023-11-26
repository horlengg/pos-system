<script setup lang="ts">
import AppContainer from "@/app/partials/app-container.vue"
import AppSidebar from "@/app/partials/app-sidebar.vue"
import AppHeader from "@/app/partials/app-header.vue"
</script>
<template>
    <div class="app_layout">
        <AppHeader />
        <div class="app_main">
            <AppSidebar />
            <AppContainer />
        </div>
    </div>
</template>

<style lang="scss">
.app_layout {
    display: flex;
    .app_main {
        display: flex;
        width: 100%;
        background-color: #EBF0F4;
        height : 100vh;
    }
}
</style>