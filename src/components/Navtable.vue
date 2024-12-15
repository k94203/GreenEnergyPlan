<template>
  <v-card class="d-flex justify-center " color="#2f87cf">
    <v-tabs bg-color="#2f87cf" stacked>
      <v-tab class="btn" to="/">
        首頁
      </v-tab>
      <v-tab class="btn">
        計畫介紹
        <v-menu activator="parent">
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" :value="item" :to="item.route"
              class="sub-btn text-center">
              {{ item.title }}
            </v-list-item>
          </v-list>
        </v-menu>
      </v-tab>
      <v-tab class="btn">
        線上報名
      </v-tab>
      <v-tab class="btn">
        線上課程
      </v-tab>
      <v-tab class="btn">
        線上測驗
      </v-tab>
      <v-tab class="btn">
        下載專區
      </v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: '計畫目標', route: '/introduction/goal' },  //跳轉計畫目標頁面
      { title: '師資培育', route: '/introduction/teacher' }, //跳轉師資培育頁面
      { title: '學生培育', route: '/introduction/students' }, //跳轉學生培育頁面
    ],
  }),
  methods: {
    onButtonClick(title) {
      // 當按鈕被點擊時執行的動作
      console.log(`You clicked: ${title}`);
    },
  },
}
</script>

<style scoped>
.btn {
  width: 200px;
  font-size: 28px;
  color: white;
  box-shadow: none;
}

.sub-btn {
  font-size: 25px;
  color: black;
  box-shadow: none;
  background-color: white;
}
</style>
