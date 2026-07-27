<template>
  <div
    class="!pt-0 bg-[#FEDBB3] h-screen px-[1%] flex flex-col items-center justify-center">
    <div class="bg-[#FFCCA6] w-[95%] h-[5%] rounded-lg z-10">
      <button
        class="border-[#e89866] border-2 forum text-[0.875rem] bg-[#FAE6DA] m-[1%] rounded-xl transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%] w-[8%] h-[100%] top-10">
        Add A Book
      </button>
      <div v-if="addingBook">
        <input type="text" v-model="newBookname"/>
        <input type="text" v-model="newBookauthor"/>
        <input type="text" v-model="newBookrating"/>
        <input type="text" v-model="newBookname"/>
        <button class="border-[#e89866] border-2 forum text-[0.875rem] bg-[#FAE6DA] m-[1%] rounded-xl transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%]">Add Book</button>
      </div>
    </div>
    <div
      class="bg-[#FFCCA6] w-[95%] h-[90%] rounded-lg flex flex-row justify-center mt-0">
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
const addingBook = ref<boolean>(false);
const newBookname = ref(defineModel())
const 

const books: book[] = [
  {
    name: "Harry Potter and the Sorcerer's Stone",
    author: "JK Roling",
    rating: 3,
    cover:
      "https://m.media-amazon.com/images/I/51Ppi-8kISL._SY445_SX342_QL70_FMwebp_.jpg",
  },
  {
    name: "To Kill A Mockingbird",
    author: "Harper Lee",
    rating: 4,
    cover:
      "https://th.bing.com/th/id/R.2a2fc147729d23229f844c159b35611a?rik=1b40Uqxb%2fJvNIg&pid=ImgRaw&r=0",
  },
];
</script>

<style scoped></style>
