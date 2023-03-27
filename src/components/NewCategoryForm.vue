<script lang="ts" setup>
import { reactive, ref, Ref } from 'vue';
import { DUMMY_DATA, Data } from '../../data/dummyData';

const inputClasses = ref('py-2 px-4 bg-transparent ring-transparent focus:outline-none border-2 rounded-full ');

interface categories {
  subCategories: string[]
  subSubCategories: string[]
}
interface newCategory {
  name: string, children: newCategory[], users: []
}

const data: Ref<Data[]> = ref(DUMMY_DATA)
const categorySelected = ref('')
const subCategoryselected = ref('')
const newCategoryInput = ref('')
const newSubCategoryInput = ref('')
const newSubSubCategoryInput = ref('')
const categories: categories = reactive({
  subCategories: [],
  subSubCategories: []
})



function onSelectCategory() {
  categories.subCategories = []
  findSubCategory(data.value, categorySelected.value)
}

function findSubCategory(array, selectedCategoryName) {
  for (let index = 0; index < array.length; index++) {
    const category = array[index]
    // console.log(category.name);

    if (category.name === selectedCategoryName) {
      for (let innerindex = 0; innerindex < array[index].children.length; innerindex++) {
        const element = array[index].children[innerindex].name;
        categories.subCategories.push(element)
      }
      return
    }
  }
}

function onSelectSubCategory() {
  categories.subSubCategories = []
  findSubSubCategories(data.value, subCategoryselected.value)
}

function findSubSubCategories(array: Data[], selectedSubCategoryName) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].children.length; j++) {
      const subcategory = array[i].children[j].name
      if (subcategory === selectedSubCategoryName) {
        for (let k = 0; k < array[i].children[j].children.length; k++) {
          const element = array[i].children[j].children[k].name;
          categories.subSubCategories.push(element)
        }
        return
      }
    }
  }
}

function onAddNewCategory() {
  const newCategory: newCategory = {
    name: newCategoryInput.value,
    children: [],
    users: []
  }
  data.value.push(newCategory)
}

function onAddNewSubCategory() {
  const newSuCategory: newCategory = {
    name: newSubCategoryInput.value,
    children: [],
    users: []
  }

  for (let i = 0; i < data.value.length; i++) {
    const element = data.value[i];
    if (element.name === categorySelected.value) {
      element.children?.push(newSuCategory)
    }
  }
}

function onAddNewSubSubCategory() {
  const newSubSuCategory: newCategory = {
    name: newSubSubCategoryInput.value,
    children: [],
    users: []
  }

  for (let i = 0; i < data?.value?.length; i++) {
    const children = data.value[i];
    console.log(children);

    if (children.name === categorySelected.value) {

      for (let j = 0; j < data?.value[i]?.children?.length; j++) {
        const element = data?.value[i]?.children[j];
        console.log(element);
        console.log(newSubSubCategoryInput.value);
        if (element.name === subCategoryselected.value) {
          element.children?.push(newSubSuCategory)
        }
      }
    }
  }
}


</script>

<template >
  <div class="flex flex-col mx-auto my-40">
    <form class="flex flex-col gap-2">
      <!-- CATEGORY -->
      <div>
        <select name="category" :class="inputClasses" v-model="categorySelected" @change="onSelectCategory">
          <option value="" selected disabled>-Select Category-</option>
          <option :value="category.name" v-for="category in data" :key="category.name">{{ category.name }}</option>
        </select>
        <span class="mx-2">- or -</span>
        <input type="text" placeholder="Create new" :class="inputClasses" v-model="newCategoryInput">
        <button @click.prevent="onAddNewCategory"
          class="bg-black opacity-30 hover:opacity-60 focus:bg-gray-200 focus:text-black border-gray-200  border-2 focus:border-black py-2 px-2 rounded-full  text-white">Add
          new</button>
      </div>
      <!-- /CATEGORY -->
      <!-- SUBCATEGORY -->
      <div v-if="categorySelected">
        <select name="subCategory" :class="inputClasses" @change="onSelectSubCategory" v-model="subCategoryselected">
          <!-- <option value="" selected disabled>-Select subCategory-</option> -->
          <option :value="option" v-for="option in categories.subCategories" :key="option"> {{ option }}</option>
        </select>
        <span class="mx-2">- or -</span>
        <input type="text" placeholder="Create new" :class="inputClasses" v-model="newSubCategoryInput">
        <button @click.prevent="onAddNewSubCategory"
          class="bg-black opacity-30 hover:opacity-60 focus:bg-gray-200 focus:text-black border-gray-200  border-2 focus:border-black py-2 px-2 rounded-full  text-white">Add
          new</button>
      </div>
      <!-- /SUBCATEGORY -->
      <!-- SUBSUBCATEGORY -->
      <div v-if="subCategoryselected">
        <input type="text" placeholder="Create new sub-sub-category" v-model="newSubSubCategoryInput"
          :class="inputClasses">
        <button @click.prevent="onAddNewSubSubCategory"
          class="bg-black opacity-30 hover:opacity-60 focus:bg-gray-200 focus:text-black border-gray-200  border-2 focus:border-black py-2 px-2 rounded-full  text-white">Add
          new</button>
      </div>
      <!-- /SUBSUBCATEGORY -->
    </form>
  </div>
</template> 
