<script lang="ts" setup>
import SideMenu from './SideMenu.vue';


</script>

<template>
  <div class="min-h-screen flex bg-white top-20">
    <SideMenu />
    <router-view />
  </div>
</template>
