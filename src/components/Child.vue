<template>
   <div>
        <span>{{ props.name }}</span>
        <ul>
            <li v-for="(item, id) in list" :key="id">
                {{ item.name }}
            </li>
        </ul>
   </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
// 宣告props
const props = defineProps({
    name: {
        type: String,
        default: '11'
    },
    list: {
        type: Array,
        default: '11'
    }

})
</script>