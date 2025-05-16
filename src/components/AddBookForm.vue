<template>
  <div>
    <h3>Component - A (Addition to list)</h3>
    <select v-model="category">
      <option>Fiction</option>
      <option>Non-Fiction</option>
      <option>Science</option>
      <option>History</option>
      <option>Biography</option>
      <option>Fantasy</option>
    </select>
    <select v-model="author">
      <option>John</option>
      <option>Russow</option>
      <option>Samuel</option>
      <option>Lynda</option>
      <option>Samira</option>
    </select>
    <input v-model="title" placeholder="Book Title" />
    <input v-model.number="price" type="number" placeholder="Price" />
    <button @click="addBook">ADD</button>
  </div>
</template>

<script setup>

</script>
