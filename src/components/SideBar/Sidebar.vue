<script lang="ts" setup>
import CreateMenu from './CreateMenu.vue';
import CategoriesMenu from './CategoriesMenu.vue';


</script>

<template>
  <div class="flex flex-col w-56 bg-gray-200 shadow-lg  overflow-hidden ">
    <CreateMenu />
    <hr class="border-gray-400">
    <CategoriesMenu />
  </div>
</template>
