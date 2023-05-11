<template>
    <div>
        <!--父對子傳值時-->
        <div>父對子</div>
        <child @childClick="childValFn" :name="name" :list="lists"/>  
        <!--子對父傳值時-->
        <div>{{ childData }}</div>

        <button @click="count += 1">點擊+</button>
    </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import Child from '../components/Child.vue'
//父對子傳值
const name = ref('小叮噹')
const lists = ref([
    {id:110,name:'狂徒'},
    { id: 111, name: '上班族' },
    {id:112,name:'自由業'}
])

const childData = ref(null)
const childValFn = (e: any) => {
    //接收子组件傳遞给父组件的值
    childData.value = e.value
}

const count = ref(0)
provide('count', count)
</script>
