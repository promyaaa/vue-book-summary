import { defineStore } from 'pinia'

export const useBookStore = defineStore('bookStore', {
  state: () => ({
    books: [],
  }),
  getters: {
    totalPrice: (state) => state.books.reduce((sum, book) => sum + book.price, 0)
  },
  actions: {
    addBook(book) {
      this.books.push(book)
    },
  },
})
