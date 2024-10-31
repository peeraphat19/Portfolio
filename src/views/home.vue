<script setup>
import Navbar from '../components/Navbar.vue'
</script>

<template>
<Navbar />
  <section class="bgindex">
    <img src="../assets/Picture/galaxy.jpg" class="background-img" />
    <div class="container text-center mt-5 content">
      <h1 class="display-4 fw-bold text-white">
        Welcome To My Portfolio
      </h1>
      <p class="lead text-white">
        “Education is the most powerful weapon which you can use to change the world.” — Nelson Mandela
      </p>
    </div>
  </section>
</template>

<style scoped>
.bgindex {
    position: relative;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.background-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}

.content {
    position: relative;
    z-index: 1;
}

</style>