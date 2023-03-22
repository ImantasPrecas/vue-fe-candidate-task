<script lang="ts" setup>
import CategoryItem from './CategoryItem.vue'
import { DUMMY_DATA } from '../../../data/dummyData'
import { ref } from 'vue';

const categoryTree = ref(DUMMY_DATA)
</script>

<template>
  <ul class="text-end">
    <li class="flex flex-col" v-for="tree in categoryTree" :key="tree.name">
      <CategoryItem :name="tree.name" :children="tree.children" />
    </li>
  </ul>
</template>
