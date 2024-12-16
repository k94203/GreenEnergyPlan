<template>
  <v-card class="custom-tabs">
    <v-row class="d-flex justify-center">
      <v-col cols="auto">
        <v-tabs v-model="tab">
          <v-tab value="首頁">
            <v-btn class="btn">首頁</v-btn>
          </v-tab>
          <v-tab>
            <v-menu class="custom-menu">
              <template v-slot:activator="{ props: menu }">
                <v-tooltip location="top">
                  <template v-slot:activator="{ props: tooltip }">
                    <v-btn class="btn" v-bind="mergeProps(menu, tooltip)">
                      計畫介紹
                    </v-btn>
                  </template>
                </v-tooltip>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index" class="v-list-item">
                  <v-list-item-title>
                    <v-btn @click="onButtonClick(item.title)" class="btn" outlined>
                      {{ item.title }}
                    </v-btn>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-tab>
          <v-tab>
            <v-btn class="btn">線上報名</v-btn>
          </v-tab>
          <v-tab>
            <v-btn class="btn">線上課程</v-btn>
          </v-tab>
          <v-tab>
            <v-btn class="btn">線上測驗</v-btn>
          </v-tab>
          <v-tab>
            <v-btn class="btn">下載專區</v-btn>
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mergeProps } from "vue";

export default {
  data: () => ({
    tab: null,
    items: [
      { title: "計畫目標", route: "/page1" }, //跳轉計畫目標頁面
      { title: "師資培育", route: "/page1" }, //跳轉師資培育頁面
      { title: "學生培育", route: "/page1" }, //跳轉學生培育頁面
    ],
  }),
  methods: {
    mergeProps,
    onButtonClick(title) {
      // 當按鈕被點擊時執行的動作
      console.log(`You clicked: ${title}`);
    },
  },
};
</script>


<style scoped>
.custom-tabs {
  font-size: 20px;
  background-color: #2f87cf;
}

.btn {
  font-size: 25px;
  box-shadow: none;
  background-color: #2f87cf;
  font-family: "微軟黑體", sans-serif;
}

.v-list-item {
  background-color: #2f87cf;
}

.custom-menu .v-menu__content {
  border: none;
  /* 去除邊框 */
  background-color: #31d9e4;
  /* 改變背景顏色 */
}
</style>
