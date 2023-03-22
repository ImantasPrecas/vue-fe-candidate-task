<script lang="ts" setup>

const props = defineProps({
  model: Object,
})
console.log(props.model);

</script>

<template>
  <li v-for="category in model" :key="category">
    <div>
      {{ category.name }}
    </div>
    <template v-if="category.children">
      <div class="ml-2">
        <CatTreeItem :model="category.children" />
      </div>
    </template>

  </li>
  <form action="">
    <select name="" id="">
      <option value="1">1</option>
      <option value="1">1</option>
      <option value="1">1</option>
      <input type="text" class="border">
    </select>
  </form>
</template>
