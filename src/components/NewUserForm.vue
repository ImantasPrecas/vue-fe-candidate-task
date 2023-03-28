<script lang="ts" setup>
import { DUMMY_DATA, User } from '../../data/dummyData';
import { ref, reactive, computed } from 'vue';
import useVuelidate from '@vuelidate/core'
import { required, email, integer, minLength } from '@vuelidate/validators'

const data = ref(DUMMY_DATA)
const inputClasses = ref('py-2 px-2 bg-transparent ring-transparent focus:outline-none border-b-2 ');
const inputErrorClasses = ref("py-2 px-2 bg-transparent ring-transparent focus:outline-none border-b-2 border-b-red-700/30 placeholder:text-red-700/50");
const optionClass = ref('py-2 px-2 bg-transparent ring-transparent focus:outline-none border-b-2 text-gray-400');
const optionErrorClass = ref('py-2 px-2 bg-transparent ring-transparent focus:outline-none border-b-2 border-b-red-700/30  text-red-700/40')


let userCreated = reactive({ isCreated: false })

const state: User = reactive({
  id: Date.now(),
  name: '',
  lastname: '',
  email: '',
  age: null,
  gender: '',
  password: '',
  category: ''
})

const rules = {
  name: { required },
  lastname: { required },
  email: { required, email },
  age: { required, integer },
  gender: { required },
  password: { required, minLength: minLength(6) },
  category: { required }
}

const v$ = useVuelidate(rules, state)



function addUser(array, searchTerm, newUser) {

  for (let index = 0; index < array.length; index++) {
    // console.log(array[index].name);

    for (let innerIndex = 0; innerIndex < array[index].children.length; innerIndex++) {
      // console.log(array[index].children[innerIndex].name);

      for (let innerInnerIndex = 0; innerInnerIndex < array[index].children[innerIndex].children.length; innerInnerIndex++) {
        const element = array[index].children[innerIndex].children[innerInnerIndex]
        // console.log(element);
        if (searchTerm === element.name) {
          element.users.push(newUser)
        }

      }
    }
    // console.log('--');

  }
}

async function submitForm() {
  const result = await v$.value.$validate()
  if (result) {
    userCreated.isCreated = true
    addUser(data.value, state.category, state)

  }


}

</script>

<template>
  <div class="flex flex-col mx-auto my-40">
    <form @submit.prevent="submitForm">
      <div class="flex flex-col gap-2">
        <div class="flex gap-2">
          <div>
            <input :class="[v$.name.$error ? inputErrorClasses : inputClasses]" type="text" placeholder="First name"
              v-model="state.name">
            <p class="text-sm text-red-700" v-if="v$.name.$error"> {{ v$.name.$errors[0].$message }}</p>
          </div>
          <div>
            <input :class="[v$.lastname.$error ? inputErrorClasses : inputClasses]" type="text" placeholder="Last name"
              v-model="state.lastname">
            <p class="text-sm text-red-700" v-if="v$.lastname.$error"> {{ v$.lastname.$errors[0].$message }}</p>
          </div>
        </div>
        <div class="flex gap-2">
          <div>
            <input :class="[v$.email.$error ? inputErrorClasses : inputClasses]" type="email" placeholder="Email"
              v-model="state.email">
            <p class="text-sm text-red-700" v-if="v$.email.$error"> {{ v$.email.$errors[0].$message }}</p>
          </div>
          <div>
            <input :class="[v$.age.$error ? inputErrorClasses : inputClasses]" type="number" placeholder="Age"
              v-model="state.age">
            <p class="text-sm text-red-700" v-if="v$.age.$error"> {{ v$.age.$errors[0].$message }}</p>
          </div>
        </div>
        <div class="flex gap-2">
          <input :class="[v$.gender.$error ? inputErrorClasses : inputClasses]" type="text" placeholder="Gender"
            v-model="state.gender">
          <input :class="[v$.password.$error ? inputErrorClasses : inputClasses]" type="password" placeholder="Password"
            v-model="state.password">
        </div>
        <select :class="[v$.category.$error ? optionErrorClass : optionClass]" v-model="state.category">
          <option value="" selected disabled>Select
            category</option>
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
        <button type="submit" :disabled="v$.$invalid"
          class="bg-black opacity-30 hover:opacity-60 focus:bg-gray-200 focus:text-black border-gray-200  border-2 focus:border-black py-2 rounded-full  disabled:hover:opacity-30 text-white">Submit</button>

      </div>
    </form>
    <div v-if="userCreated.isCreated" class="mt-4 text-center border rounded-full p-2 shadow-sm">
      <p>{{ state.name }} succesfully created in {{ state.category }}</p>
    </div>
  </div>
</template>
