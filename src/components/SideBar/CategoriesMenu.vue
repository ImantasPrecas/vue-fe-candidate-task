<script lang="ts" setup>
import CategoryItem from './CategoryItem.vue'
import { DUMMY_DATA } from '../../../data/dummyData'
import { ref, reactive } from 'vue';


const categoryTree = reactive(DUMMY_DATA)

const isOpen = ref(false)
function toggle() {
  isOpen.value = !isOpen.value
}

</script>

<template>
  <ul class="text-end">
    <CategoryItem :model="categoryTree" />
  </ul>
</template>
