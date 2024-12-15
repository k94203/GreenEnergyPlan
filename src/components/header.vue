<template>
  <header class="header">
    <div class="content">
      <a :href="'https://www.stust.edu.tw/'" target="_blank">
        <v-img id="logo" cover :src="logoSrcRef"></v-img>
      </a>
      <v-btn class="text-h5 mx-5" size="large" color="#2f87cf">
        會員註冊
      </v-btn>
      <v-btn class="text-h5" size="large" color="#2f87cf">
        登入
      </v-btn>
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
</style>

