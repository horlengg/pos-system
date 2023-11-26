<script setup lang="ts">
import CleanLayout from './app/layout/clean-layout.vue';
import DefaultLayout from './app/layout/default-layout.vue';
import {useRoute} from "vue-router"

const route = useRoute()

</script>
<template>
  <clean-layout v-if="route.meta.clearLayout" />
  <default-layout v-else />
</template>