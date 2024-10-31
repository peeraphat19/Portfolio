<script setup>
import Navbar from "../components/Navbar.vue";
import first from "../components/Skillspage/first.vue";
import second from "../components/Skillspage/second.vue";
import vmore from "../components/Skillspage/vmore.vue";
</script>

<template>
  <Navbar />
  <section class="service_section p-5 bgskill">
    <div class="container">
      <div class="text-center">
        <h2>MY SKILLS</h2>
      </div>
      <div class="row">
        <div class="col-sm-6 col-md-4 mx-auto">
            <first />
        </div>
        <div class="col-sm-6 col-md-4 mx-auto">
            <second />
        </div>
      </div>
    </div>
    <vmore/>
  </section>
</template>

<style>
.bgskill {
  background-color: #86a5c4;
  height: 94.1vh;
}

.service_section {
  position: relative;
}

</style>
