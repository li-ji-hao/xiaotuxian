<script setup>
import LayoutNav from './components/LayoutNav.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutFixed from './components/LayoutFixed.vue'

import { onMounted } from 'vue'

import { useCategoryStore } from '@/stores/category'

const CategoryStore = useCategoryStore()
onMounted(()=>CategoryStore.getCategory())
</script>

<template>
<LayoutFixed/>
<LayoutNav/>
<LayoutHeader/>
<!-- <RouterView :key="$route.fullPath" /> -->
<RouterView/>
<LayoutFooter/>
</template>