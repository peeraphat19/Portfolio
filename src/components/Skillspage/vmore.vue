<script setup>

</script>

<template>
<div class="btn-box">
      <a href=""> View More </a>
    </div>
</template>

<style scoped>
.btn-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 45px;
}

.btn-box a {
  display: inline-block;
  font-family: "Merriweather Sans", sans-serif;
  text-transform: uppercase;
  padding: 10px 45px;
  background-color: #0355cc;
  border: 1px solid #0355cc;
  border-radius: 0;
  color: #ffffff;
}

.btn-box a:hover {
  background-color: transparent;
  color: #0355cc;
}
</style>