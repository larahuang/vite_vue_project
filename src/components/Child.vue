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
   </div>

</template>

<script setup lang="ts">
// 父對子傳值時引入defineProps
//Vue3.2 版本后 defineProps 和 defineEmits 无需导入
import { ref } from 'vue'
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
</script>