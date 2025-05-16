<template>
  <div>
    <h3>Component - C (Category wise summary)</h3>
    <div class="table-wrapper">
    <table>
      <thead>
        <tr>
            <th>Category</th>
            <th>No. of Books</th>
            <th>Total Price</th>
        </tr>
      </thead>
      <tbody>

        <tr v-if="Object.keys(bookStore.categorySummary).length === 0" class="message">
            <td colspan="3">No category summary available.</td>
        </tr>
        <tr v-for="(data, category) in bookStore.categorySummary" :key="category">
          <td>{{ category }}</td>
          <td>{{ data.count }}</td>
          <td>{{ data.totalPrice }}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script setup>
import { useBookStore } from '../stores/bookStore';
const bookStore = useBookStore();
</script>
