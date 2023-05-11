import { defineStore } from 'pinia';
import axios from 'axios';
import { ref, computed } from 'vue';
export const useCounterStore = defineStore('counter', () =>
{
    const count = ref(0);
    const doubleCount = computed(() =>
    {
       return count.value * 2
    })
    const addCount = () =>
    {
        count.value ++
    }
    const cardLists = ref([])
    
    const fetchApi = async() =>
    {
        try {
            const api = `${import.meta.env.VITE_WEB_API}/api/banners`;
            const res = await axios.get(api);
            cardLists.value = res.data;
        } catch (error) {
            console.log(error)
        }
     
    }
    //必須 return
    return {
        count, 
        doubleCount,
        cardLists,
        fetchApi,
        addCount
    }
})