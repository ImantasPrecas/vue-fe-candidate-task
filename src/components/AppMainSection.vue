<script lang="ts" setup>
import Sidebar from './SideBar/Sidebar.vue';


</script>

<template>
  <div class="min-h-screen flex bg-white top-20">
    <Sidebar />
    <router-view />
  </div>
</template>
