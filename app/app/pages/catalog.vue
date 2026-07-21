<template>
    <div class="!pt-0 bg-[#FEDBB3] h-screen px-[1%] flex flex-col items-center justify-center">
        <div class="bg-[#FFCCA6] w-[95%] h-[90%] rounded-lg flex flex-row items=center justify-center mt-0">
            <catalog-book-cover class="p-[2.5%] w-[20%] min-h-[40%]" v-for="book in books" :key="book.name" :book="book"/>
        </div>
    </div>
</template>

<script lang="ts" setup>

const books:book[] = [{
    name: "Harry Potter and the Sorcerer's Stone",
    author: "JK Roling",
    rating: 3,
    cover: "https://m.media-amazon.com/images/I/51Ppi-8kISL._SY445_SX342_QL70_FMwebp_.jpg",
},
{
    name: "To Kill A Mockingbird",
    author: "Harper Lee",
    rating: 4,
    cover: "https://th.bing.com/th/id/R.2a2fc147729d23229f844c159b35611a?rik=1b40Uqxb%2fJvNIg&pid=ImgRaw&r=0"
}]
</script>

<style scoped>

</style>