<template>
  <div>
    <h3>Component - C (Category wise summary)</h3>
    <table border="1">
      <thead>
        <tr>
            <th>Category</th>
            <th>No. of Books</th>
            <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, category) in bookStore.categorySummary" :key="category">
          <td>{{ category }}</td>
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
