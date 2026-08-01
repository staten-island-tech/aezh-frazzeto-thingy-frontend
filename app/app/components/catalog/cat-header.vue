<template>
  <div class="flex flex-col gap-2 min-w-full">
    <div class="flex flex-row justify-between gap-4 items-center h-[20%] mt-5">
      <div>
        <h2 class="forum text-3xl text-black w-full h-full font-bold">
          Catalog
        </h2>
      </div>
      <div class="flex gap-2 w-[60%] justify-between items-center">
        <div class="flex gap-2 items-center forum text-black font-bold text-lg">
          <div v-if="userType === 'Admin' && !addingBook" class="flex items-center gap-2">
            <Add @click="addingBook = !addingBook" :size="40" color="black"
              class="rounded-full hover:bg-emerald-400/20 p-[2%] transition-colors duration-200 ease-in" />
            <p class="md:block hidden">Add Book</p>
          </div>
          <div v-else-if="userType === 'Admin' && addingBook" class="flex items-center gap-2">
            <X @click="addingBook = !addingBook" :size="40" color="black"
              class="rounded-full hover:bg-red-400/20 p-[2%] transition-colors duration-200 ease-in" />
            <p class="md:block hidden">Close Upload</p>
          </div>
        </div>
        <input type="text" v-model="searchInput"
          class="w-[60%] bg-white/60 shadow-md min-h-[80%] py-2 rounded-2xl focus:shadow-lg border-0 focus:bg-white trnasition-all duration-300 ease-in-out focus:outline-none px-2 placeholder-slate-400 forum text-black"
          placeholder="Search for a book.">
        </input>
        <button @click="" class="bg-slate-500 text-white forum rounded-2xl px-2 hover:bg-slate-700 hover:-translate-y-0.5 active:bg-slate-900 active:translate-y-px transition-all duration-300 shadow-md hover:shadow-lg active:shadow-none py-2">
          Search
        </button>
      </div>

    </div>
    <div class="bg-white shadow-md w-full rounded-lg">

      <div v-if="addingBook" class=" flex items-center bg-slate-200 justify-around gap-2 flex-wrap py-2">
        <h2 class="text-black forum text-[0.92rem]">Book Details:</h2>
        <input
          class="forum text-center text-[0.875rem] shadow-xs focus:shadow-md text-black bg-white p-1 w-[16%] rounded-md focus:outline-none transition-all duration-300 ease-in-out"
          type="text" v-model="newBookName" placeholder="Book Name" maxlength="25" />
        <input
          class="forum text-center text-[0.875rem] shadow-xs focus:shadow-md text-black bg-white p-1 w-[16%] rounded-md focus:outline-none transition-all duration-300 ease-in-out"
          type="text" v-model="newBookAuthor" placeholder="Author" />
        <input
          class="forum text-center text-[0.875rem] shadow-xs focus:shadow-md text-black bg-white p-1 w-[16%] rounded-md focus:outline-none transition-all duration-300 ease-in-out"
          type="text" v-model="newBookCover" placeholder="Cover Image URL" />
        <input
          class="forum text-center text-[0.875rem] shadow-xs focus:shadow-md text-black bg-white p-1 w-[16%] rounded-md focus:outline-none transition-all duration-300 ease-in-out"
          type="text" v-model="newBookGenre" placeholder="Book Genre" />
        <button
          class=" forum text-[0.875rem] text-black bg-white hover:bg-emerald-400/20 active:bg-emerald-400/60 m-[1%] rounded-md transition-all p-1 duration-300 ease-in-out hover:-translate-y-px active:translate-y-0.5 shadow-sm hover:shadow-md active:shadow-none px-2 lg:w-20 w-full"
          @click="submitBook()">
          Add Book
        </button>
      </div>
    </div>
    <div class="h-1 rounded-full bg-slate-800 my-2 w-full"></div>
  </div>
</template>

<script setup lang="ts">
import { Add } from 'reicon-vue';
import { X } from 'reicon-vue';
import { useBookStore } from "~/stores/bookStore";

const userType = ref<'Student' | 'Admin'>('Admin')

const store = useBookStore();

const addingBook = ref<boolean>(false);
const newBookName = ref("");
const newBookAuthor = ref("");
const newBookCover = ref("");
const newBookGenre = ref("");
const searchInput = ref("");

function submitBook() {
  store.addBook({
    name: newBookName.value,
    author: newBookAuthor.value,
    cover: newBookCover.value,
    genre: newBookGenre.value
  }); // POST THIS
}

function searchForBooks() {
  
}
</script>

<style scoped></style>