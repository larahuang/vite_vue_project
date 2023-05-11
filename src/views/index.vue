<template>
    <div>
        <!--父對子傳值時-->
        <div>父對子</div>
        <child :name="name" :list="lists"/>  


    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Child from '../components/Child.vue'
//父對子傳值
const name = ref('小叮噹')
const lists = ref([
    {id:110,name:'狂徒'},
    { id: 111, name: '上班族' },
    {id:112,name:'自由業'}
])


</script>
