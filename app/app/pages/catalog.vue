<template>
  <div
    class="!pt-0 bg-[#FEDBB3] h-screen px-[1%] flex flex-col items-center justify-center"
  >
    <div class="bg-[#FFCCA6] w-[95%] h-[5%] rounded-lg z-10">
      <button
        @click="addingBook = !addingBook"
        class="border-[#e89866] border-2 forum text-[0.875rem] text-black bg-[#FAE6DA] m-[1%] rounded-xl transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%] w-[8%] h-[100%] top-10"
      >
        Add A Book
      </button>
      <div
        v-if="addingBook"
        class="bg-white flex flex-col justify-center items-center w-[20%]"
      >
        <input
          class="border-[#e89866] border-2 forum text-[0.875rem] text-black bg-[#FAE6DA] m-[1%] rounded-xl transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%]"
          type="text"
          v-model="newBookname"
          placeholder="Book Name"
        />
        <input
          class="border-[#e89866] border-2 forum text-[0.875rem] text-black bg-[#FAE6DA] m-[1%] rounded-xl transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%]"
          type="text"
          v-model="newBookauthor"
          placeholder="Author"
        />
        <input
          class="border-[#e89866] border-2 forum text-[0.875rem] text-black bg-[#FAE6DA] m-[1%] rounded-xl transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%]"
          type="text"
          v-model="newBookcover"
          placeholder="Cover Image URL"
        />
        <button
          class="border-[#e89866] border-2 forum text-[0.875rem] text-black bg-[#FAE6DA] m-[1%] rounded-xl transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%]"
          @click="submitBook()"
        >
          Add Book
        </button>
      </div>
    </div>
    <div
      class="bg-[#FFCCA6] w-[95%] h-[90%] rounded-lg flex flex-row justify-center mt-0"
    >
      <catalog-book-cover
        class="p-[2.5%] w-[20%] min-h-[40%]"
        v-for="book in books"
        :key="book.name"
        :book="book"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usebookStore } from "~/stores/bookStore";

const store = usebookStore();
const books = store.Books;
const addBook = store.addBook;

const addingBook = ref<boolean>(false);
const newBookname = ref("");
const newBookauthor = ref("");
const newBookcover = ref("");

function submitBook() {
  addBook({
    name: newBookname.value,
    author: newBookauthor.value,
    cover: newBookcover.value,
  });
}
</script>

<style scoped></style>
