<template>
  <div>
    <h3>Component - D (Author wise summary)</h3>
    <table border="1">
      <thead>
        <tr>
            <th>Author</th>
            <th>No. of Books</th>
            <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, author) in bookStore.authorSummary" :key="author">
          <td>{{ author }}</td>
          <td>{{ data.count }}</td>
          <td>{{ data.totalPrice }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useBookStore } from '../stores/bookStore';
const bookStore = useBookStore();
</script>
