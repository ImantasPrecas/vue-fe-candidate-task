<script lang="ts" setup>
import { ref, reactive } from 'vue';

const user = reactive({
  id: Date.now(),
  name: '',
  lastname: '',
  email: '',
  age: null,
  gender: '',
  password: '',
  category: ''
})
const inputClasses = ref('py-2 px-2 bg-transparent ring-transparent focus:outline-none border-b-2 ');

function submitForm() {

  console.log(user);
}
</script>

<template>
  <div class="flex flex-col mx-auto my-40">
    <form @submit.prevent="submitForm">
      <div class="flex flex-col gap-2">
        <div class="flex gap-2">
          <input :class="inputClasses" type="text" placeholder="First name" v-model="user.name">
          <input :class="inputClasses" type="text" placeholder="Last name" v-model="user.lastname">
        </div>
        <div class="flex gap-2">
          <input :class="inputClasses" type="email" placeholder="Email" v-model="user.email">
          <input :class="inputClasses" type="number" placeholder="Age" v-model="user.age">
        </div>
        <div class="flex gap-2">
          <input :class="inputClasses" type="text" placeholder="Gender" v-model="user.gender">
          <input :class="inputClasses" type="password" placeholder="Password" v-model="user.password">
        </div>
        <select :class="inputClasses" v-model="user.category" class="text-gray-400">
          <option value="" selected disabled class="text-gray-400">Select category</option>
          <option value="1">Category1</option>
        </select>
        <button
          class="bg-black opacity-30 hover:opacity-60 focus:bg-gray-200 focus:text-black border-gray-200  border-2 focus:border-black py-2 rounded-full  text-white">Submit</button>

      </div>
    </form>
  </div>
</template>
