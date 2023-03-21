<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col w-56 bg-gray-200 shadow-lg  overflow-hidden">
    <ul class="flex flex-col py-4 items-end px-10 text-md">
      <li>
        <router-link to="/" class="flex flex-row items-center h-12  text-gray-500 hover:text-gray-800">

          <span class="font-medium">New User</span>
        </router-link>
      </li>
      <li>
        <router-link to="/new-category" class="flex flex-row items-center h-12  text-gray-500 hover:text-gray-800">

          <span class="font-medium">New Category</span>
        </router-link>
      </li>
    </ul>
    <ul class="flex flex-col py-4 items-end px-10 text-md">
      <li>
        <a href="#" class="flex flex-row items-center h-12  text-gray-500 hover:text-gray-800">

          <span class="font-medium">Category 1</span>
        </a>
        <ul class="text-md flex flex-col -translate-x-4 items-end">
          <li class=""><a href="#" class="flex flex-row items-center h-12  text-gray-500 hover:text-gray-800">Sub</a>
          </li>
          <li class=""><a href="#" class="flex flex-row items-center h-12  text-gray-500 hover:text-gray-800">Sub2</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
