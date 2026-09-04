<script setup>
import JSONLab from './components/JSONLab.vue'
import BHeader from './components/BHeader.vue'

</script>

<template>
  <div class="main-container">
    <header>
      <BHeader />
    </header>

    <main class="main-box">
      <!-- <LibraryRegistrationForm /> -->
      <!-- <JSONLab /> -->
      <router-view></router-view>
    </main>
  </div>
</template>


<style>
.main-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.main-box {
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
}
</style>
