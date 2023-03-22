<script lang="ts" setup>

const props = defineProps({
  model: Object,
})
console.log(props.model);

</script>

<template>
  <div class="text-md flex flex-col -translate-x-4 items-end mt-4">
    <li v-for="category in model" :key="category" class="mt-2">

      <div class="font-semibold text-gray-500 hover:text-gray-800 ">
        {{ category.name }}
      </div>

      <template v-if="category.children">
        <div class="text-sm font-extralight">

          <CategoryItem :model="category.children" />
        </div>
      </template>
    </li>
  </div>
</template>
