import { defineStore } from "pinia";

async function fetchBooks() {
  try {
    const response = await $fetch<Book[]>('/api/books/', {
      method: 'POST',
    });
    console.log('Fetched books:', response);
    return response;
  }
  catch (error) {
    console.log("Error fetching books:", error)
  }
}

export const useBookStore = defineStore("books", {
  state: () => ({
    books: fetchBooks() || [],
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
