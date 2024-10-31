<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
    <div class="container">
      <a class="navbar-brand" href="#">Portfolio</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/resume">Resume</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/skills">Skills</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/aboutme">About Me</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar {
  background-color: rgba(0, 0, 0);
}

.navbar-brand,
.nav-link {
  color: #ffffff !important;
  font-weight: bold;
}

.nav-link:hover {
  color: #f7b6b7 !important; /* Link hover effect */
}
</style>
