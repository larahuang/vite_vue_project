<template>
<div :class="{active:isActive}">Class</div>
<button class="mt-3" @click="changeClass">點擊</button>

<div  class="style" 
     v-bind:style="{ color: activeColor, fontSize: fontSize + 'px',backgroundColor:activeBgColor }">Class</div>
<button class="mt-3" @click="changeStyle">點擊</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isActive = ref<boolean>(false);
const changeClass = () => {
    isActive.value = !isActive.value;
}
const activeColor = ref<string>('green');
const activeBgColor =ref<string |any>('#ddd');
 const fontSize =ref<number>(18);
const changeStyle = () => {
    activeColor.value = 'red';
    fontSize.value = 20;
    activeBgColor.value= '#eee';
}
</script>

<style lang="css" scoped>
.mt-3{
    margin-top: 30px;
}
.active{
    border-bottom:1px solid red;
}
</style>