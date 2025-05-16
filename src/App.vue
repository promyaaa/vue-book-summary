<script setup>
import AddBookForm from './components/AddBookForm.vue'
import BookList from './components/BookList.vue'
import CategorySummary from './components/CategorySummary.vue'
import AuthorSummary from './components/AuthorSummary.vue'
</script>

<template>
  <h2>Home Page</h2>
  <div class="page-layout">
    <!-- Left side -->
    <div class="left-section">
      <AddBookForm />
      <BookList />
    </div>

    <!-- Right side -->
    <div class="right-section">
      <CategorySummary />
      <AuthorSummary />
    </div>
  </div>
</template>

<style scoped>
.page-layout {
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 2rem;
  margin-top: 2rem;
  align-items: flex-start;
}

.left-section,
.right-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (max-width: 768px) {
  .page-layout {
    grid-template-columns: 1fr;
  }
}
</style>
