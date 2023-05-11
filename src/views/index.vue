<template>
    <div>
        <!--父對子傳值時-->
        <div>父對子</div>
        <child @childClick="childValFn" :name="name" :list="lists"/>  
        <!--子對父傳值時-->
        <div>{{ childData }}</div>

        <button @click="count += 1">點擊+</button>

        <div>{{ counter }}</div>
        <button @click="clickAdd">Add</button>
        <div> {{ cardLists }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted } from 'vue'
//引入 import {storeToRefs } from 'pinia'
import { storeToRefs } from 'pinia';
// @ts-ignore
import { useCounterStore } from '../stores/index';
// @ts-ignore
import Child from '../components/Child.vue'
//宣告store = useCounterStore()
// @ts-ignore
const store = useCounterStore();
//解構store,數據取出counter, cardLists
// @ts-ignore
const { counter, cardLists } = storeToRefs(store);
// @ts-ignore
const { fetchApi, addCount } = store;
//宣告store = useCounterStore()

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
// @ts-ignore
const clickAdd = () => {
    addCount()
}

onMounted(() => {
    fetchApi();
});
</script>
