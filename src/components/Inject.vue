<template>

</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import Mode from '../components/mode.vue';
const sendTitle = inject('title')
const sendIsShow = inject('isShow')
</script>