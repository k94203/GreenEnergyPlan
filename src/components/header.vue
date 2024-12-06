<template>
  <header class="header">
    <div class="content">
      <a :href="'https://www.stust.edu.tw/'" target="_blank">
        <v-img id="logo" cover :src="logoSrcRef"></v-img>
      </a>
      <v-btn class="button">會員註冊</v-btn>
      <v-btn class="button">登入</v-btn>
    </div>
  </header>

</template>


<script setup>
import { ref } from 'vue';

// 使用 import 引入圖片
import logoSrc from '@/assets/LOGO.png';

const logoSrcRef = ref(logoSrc);

</script>

<style scoped>
.header {
  color: white; 
  padding: 1rem 0; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  width: 100%; 
  box-sizing: border-box; 
}

.content {
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  width: 80%; 
  max-width: 1200px; 
}


#logo {
  max-height: 100px; 
  width:1000px; 
}


.button {
  width: 140px;
  height: 45px;
  font-size: 25px;
  background-color:#2f87cf;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px; 
  margin: 8px;
  font-family: '微軟黑體', sans-serif;
}
</style>

