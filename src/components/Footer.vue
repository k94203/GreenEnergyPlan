<template>
  <footer class="footer">
    <div style="display: block;"></div>
    <ul class="unit">
      <li class="unit-item">
        <div class="content">
          <span class="unit-text">指導單位 |</span>
          <a :href="educationUrl" target="_blank">
            <v-img id="Education-img" cover :src="Education" alt="指導單位" ></v-img>
          </a>
        </div>
      </li>
      <li class="unit-item">
        <div class="content">
          <span class="unit-text">執行單位 |</span>
          <a :href="electricalEngineeringUrl" target="_blank">
            <v-img id="Electrical-img" cover :src="Electrical" alt="執行單位" ></v-img>
          </a>
        </div>
      </li>
    </ul>
    <hr>
    <p>&copy;copyright 2018/5/31, 教育部技職教育再造技能躍進設備精進.</p>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import EducationSrc from '@/assets/MinistryofEducation.png';
import ElectricalSrc from '@/assets/electricalengineering.png';
const Education=ref(EducationSrc);
const Electrical=ref(ElectricalSrc);

// 超連結與圖片路徑
const educationUrl = 'https://www.edu.tw/';
const electricalEngineeringUrl = 'https://ee.stust.edu.tw/';
</script>


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

#Education-img {
  display: block;
  width:150px;
  height: auto;

}
#Electrical-img {
  display: block;
  width:300px;
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
