import { defineStore } from 'pinia'

export const useBookStore = defineStore('bookStore', {
  state: () => ({
    books: [],
  }),
  getters: {
    totalPrice: (state) => state.books.reduce((sum, book) => sum + book.price, 0),
    categorySummary: (state) => {
      const summary = {};
      state.books.forEach(book => {
        if (!summary[book.category]) {
          summary[book.category] = { count: 0, totalPrice: 0 };
        }
        summary[book.category].count++;
        summary[book.category].totalPrice += book.price;
      });
      return summary;
    },
  },
  actions: {
    addBook(book) {
      this.books.push(book)
    },
  },
})
