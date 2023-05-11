<template>
   <div>
        <!--父對子傳值時-->
        <span>{{ props.name }}</span>
        <ul>
            <li v-for="(item, id) in list" :key="id">
                {{ item.name }}
            </li>
        </ul>
        <!--子對父傳值時-->
        <button class="el-button el-button--success" @click="toEmit">子组件向外傳遞數據</button>
        <!--從父收到的數據-->
        <h3>{{ childCount }}{{ childData.name }}</h3>
   </div>

</template>

<script setup lang="ts">
import Mode from './mode.vue'
// 父對子傳值時引入defineProps
//Vue3.2 版本后 defineProps 和 defineEmits 無需再導入
import { ref, inject } from 'vue'

// 父對子傳值時子宣告props
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

const childrenSay = ref('我是小孩')
const emits = defineEmits(['childClick'])
//點擊事件，向父組件傳值
const toEmit = () => {
    // 觸發父組件事件childClick攜帶參數
    emits('childClick', childrenSay)
}

const childCount = inject('count')
const childData = inject('data', { name: 'Lara' })
</script>