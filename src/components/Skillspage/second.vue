<script setup>

</script>

<template>
            <div class="box">
              <a href="https://peeraphat19.github.io/vue_sh/" target="_blank">
                <div class="img-box">
                  <img src="@/assets/Picture/vue_shop.png" />
                </div>
                <div class="detail-box">
                  <h5 class="m-3 fw-bold">Online Shop Vue</h5>
                  <p>
                    Online Shop page created in HTML into Vue to practice
                    using Vue.
                  </p>
                </div>
              </a>
            </div>

</template>

<style scoped>

.box {
  margin-top: 30px;
  text-align: center;
  -webkit-box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.15);
  padding: 25px 15px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.box .img-box img {
  max-height: 100%;
  max-width: 100%;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.box:hover {
  background-color: #F8D7C1;
  color: #ffffff;
}
</style>