<template>
    <Inject></Inject>
    <Mode></Mode>
    <button class="mt-3" @click="changeShow">點擊</button>
</template>

<script setup lang="ts">
import { ref,provide } from 'vue';
import Inject from '../components/Inject.vue';
import Mode from '../components/mode.vue';
const title = ref('這是provide to jnject')
const isShow = ref<boolean>(true);
const changeShow = () => {
    isShow.value = !isShow.value;
}
    provide('title', title)
  provide('isShow',isShow)
</script>

