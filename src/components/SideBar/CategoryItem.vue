<script lang="ts" setup>
import { ref } from 'vue';

interface Nodes {
  name: string,
  children?: Array<Nodes>
}
defineProps<{
  name: string,
  children?: Array<Nodes>
}>()

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}

const printName = (name) => {
  console.log(name);

}

</script>

<template>
  <li class="font-semibold text-gray-500 hover:text-gray-700 cursor-pointer mr-5 py-2">

    <div @click="toggle">
      <button @click="printName(name)">
        {{ name }}
      </button>
    </div>
  </li>
  <li class="mr-4 mt-2" v-if="isOpen">
    <div>
      <category-item v-for="item in children" :name="item.name" :children="item.children"></category-item>
    </div>

  </li>
</template>
