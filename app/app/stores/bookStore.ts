import { defineStore } from "pinia";

export const useBookStore = defineStore("books", {
  state: () => ({
    books: [
      {
        name: "Harry Potter and the Sorcerer's Stone",
        author: "JK Rowling",
        rating: 3,
        genre: "Fiction",
        cover:
          "https://m.media-amazon.com/images/I/51Ppi-8kISL._SY445_SX342_QL70_FMwebp_.jpg",
        id: 1,
      },
      {
        name: "To Kill A Mockingbird",
        author: "Harper Lee",
        genre: "Historical Fiction",
        rating: 4,
        id: 2,
        cover:
          "https://th.bing.com/th/id/R.2a2fc147729d23229f844c159b35611a?rik=1b40Uqxb%2fJvNIg&pid=ImgRaw&r=0",
      },
    ],
    highlightedReviewId: 1
  }),
  actions: {
    addBook(newBook: { name: string; author: string; cover: string; genre: string }) {
      const book = {
        ...newBook,
        rating: 0,
        id: this.books.length + 1,
      };
      this.books.push(book);
    }
  },
});
