<script setup>
import { computed, ref } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Navtable from '@/components/Navtable.vue';
</script>


<template>
  <v-app>
    <Header></Header>
    <Navtable></Navtable>
    <Footer></Footer>
    <router-view />
  </v-app>
</template>

<style>
 * {     /* 設定全局字體 */
    font-family: '微軟黑體', sans-serif;
  }
</style>




