<template>
  <footer class="footer">
    <div style="display: block;"></div>
    <ul class="unit">
      <li class="unit-item">
        <div class="content">
          <span class="unit-text">指導單位 |</span>
          <a href="https://www.edu.tw/" target="_blank">
            <img src="@/assets/MinistryofEducation.png" alt="指導單位">
          </a>
        </div>
      </li>
      <li class="unit-item">
        <div class="content">
          <span class="unit-text">執行單位 |</span>
          <a href="https://ee.stust.edu.tw/" target="_blank">
            <img src="@/assets/electricalengineering.png" alt="執行單位">
          </a>
        </div>
      </li>
    </ul>
    <hr>
    <p>&copy;copyright 2018/5/31, 教育部技職教育再造技能躍進設備精進.</p>
  </footer>
</template>


<style scoped>
.footer {
  background-color: #cfcdcd;
  color: rgb(0, 0, 0);
  text-align: center;
  padding: 1rem 0;
  position: fixed;
  bottom: 0;
  width: 100vw;
  font-family: '微軟黑體', sans-serif;
  padding: 10px 0; /* 調整上下內邊距為 20px */
}

.unit {
  list-style-type: none; 
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center; 
  align-items: center; 
  gap: 100px; 
}

.unit-item {
  display: flex;
  align-items: center; 
}

.content {
  display: flex;
  align-items: center; 
  gap: 10px; 
}

.unit-text {
  font-weight: bold;
  text-align: center;
  margin-right: 10px;
  font-size: 25px;
  font-family: '微軟黑體', sans-serif;
}

.content img {
  display: block;
  max-width: 200%; 
  height: auto;
}

hr {
  margin: 10px 0;
  border: none;
  border-top: 1px solid #ddd;
}

footer p {
  margin: 0.5rem 0 0;
  font-size: 14px;
  color: #333;
}
</style>
