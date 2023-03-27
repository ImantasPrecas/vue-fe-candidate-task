<script lang="ts" setup>
import { DUMMY_DATA, User } from '../../data/dummyData';
import { ref, reactive } from 'vue';

const data = ref(DUMMY_DATA)
let userCreated = reactive({ isCreated: false })


const user: User = reactive({
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


function addUser(array, searchTerm, newUser) {

  for (let index = 0; index < array.length; index++) {
    console.log(array[index].name);

    for (let innerIndex = 0; innerIndex < array[index].children.length; innerIndex++) {
      console.log(array[index].children[innerIndex].name);

      for (let innerInnerIndex = 0; innerInnerIndex < array[index].children[innerIndex].children.length; innerInnerIndex++) {
        const element = array[index].children[innerIndex].children[innerInnerIndex]
        console.log(element);
        if (searchTerm === element.name) {
          element.users.push(newUser)
        }

      }
    }
    console.log('--');

  }
}

function submitForm() {
  addUser(data.value, user.category, user)
  userCreated.isCreated = true
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
          <template v-for="category in data" :key="category">
            <optgroup :label="category.name">
              <template v-for="subCategory in category.children">
                <template v-for="subSubCat in subCategory.children" :key="subSubCat.name">
                  <option :value="subSubCat.name">{{ subSubCat.name }}</option>
                </template>
              </template>
            </optgroup>
          </template>
        </select>
        <button
          class="bg-black opacity-30 hover:opacity-60 focus:bg-gray-200 focus:text-black border-gray-200  border-2 focus:border-black py-2 rounded-full  text-white">Submit</button>

      </div>
    </form>
    <div v-if="userCreated.isCreated" class="mt-4 text-center border rounded-full p-2 shadow-sm">
      <p>{{ user.name }} succesfully created in {{ user.category }}</p>
    </div>
  </div>
</template>
