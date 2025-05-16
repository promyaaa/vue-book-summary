<template>
  <div>
    <h3>Component - B (List)</h3>
    <table border="1">
      <thead>
        <tr>
          <th>#</th>
          <th>Book Category</th>
          <th>Author</th>
          <th>Book Title</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) in bookStore.books" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ book.category }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.price }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4" class="price"><strong>Total Price</strong></td>
          <td>
            <strong>{{ bookStore.totalPrice }}</strong>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup>
import { useBookStore } from '../stores/bookStore'
const bookStore = useBookStore()
</script>

<style>
    table {
        border-collapse: collapse;
    }

    table th, td {
        padding: 10px;
    }
    .price {
        text-align: right;
    }
</style>