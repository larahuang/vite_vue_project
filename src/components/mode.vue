<template>
    <div v-show="sendIsShow">
        <div>Model</div>
        <h3>{{ sendTitle }}</h3>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
const sendTitle = inject('title')
const sendIsShow = inject('isShow')
</script>