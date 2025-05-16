import { defineStore } from 'pinia'

export const useBookStore = defineStore('bookStore', {
  state: () => ({
    books: [],
  }),
  getters: {},
  actions: {
    addBook(book) {
      this.books.push(book)
    },
  },
})
