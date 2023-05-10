<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios';

const lists = ref<any>();
const getData = async () => {
  const api = `${import.meta.env.VITE_WEB_API}/api/banners`;

  await axios.get(api)
    .then((res: { data: any[]; }) => {
      lists.value = res.data.values;
      console.log(res.data);
    });

}

onMounted(() => {
  getData();
});
</script>

<template>
  <div>
     <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
