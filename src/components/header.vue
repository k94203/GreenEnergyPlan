<template>
  <header class="header">
    <div class="content">
      <a href="https://www.stust.edu.tw/" id="logo">
        <img src="@/assets/LOGO.png" alt="LOGO">
      </a>
      <button class="button">會員註冊</button>
      <button class="button">登入</button>
    </div>
  </header>
</template>

<style scoped>
.header {
  color: white; /* 文字顏色 */
  padding: 1rem 0; /* 上下內邊距 */
  display: flex; /* 使用 Flexbox */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  width: 100%; /* 滿版寬度 */
  box-sizing: border-box; /* 包含內邊距 */
}

/* Header 內部內容 */
.content {
  display: flex; /* 使用 Flexbox */
  justify-content: space-between; /* 左右兩側內容間距 */
  align-items: center; /* 垂直居中 */
  width: 80%; /* 設置固定寬度（例如 80%） */
  max-width: 1200px; /* 最大寬度 */
}

/* LOGO 圖片樣式 */
#logo img {
  max-height: 100px; /* 限制 LOGO 高度 */
  width:1000px; /* 自動調整寬度 */
}

/* 按鈕樣式 */
.button {
  width: 110px;
  height: 30px;
  font-size: 16px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px; /* 按鈕圓角 */
}
</style>

