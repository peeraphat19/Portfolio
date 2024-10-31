<script setup>
import Navbar from '../components/Navbar.vue';
import toppage from '../components/Aboutpage/toppage.vue';
import botpage from '../components/Aboutpage/botpage.vue';
</script>

<template>
<Navbar/>
<div class="container-fluid">
        <div class="container">
            <div class="row g-0">
                <toppage/>
            </div>
        </div>
</div>
<div class="container-fluid" style="border-top: 1px solid white;">
      <div class="container">
          <div class="row g-0">
            <botpage/>
          </div>
    </div>
</div>
</template>

<style scoped>

</style>