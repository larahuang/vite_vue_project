<template>
    <div>
        <div>Model</div>
        <h3>{{ data }}</h3>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const data = inject('data')
</script>