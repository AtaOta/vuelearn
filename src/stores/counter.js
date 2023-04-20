//Seup store

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', ()=>{
    const count = ref(1) // state
    const doubleCount = computed(() => count.value *2) // Getters
    function increment(){
        count.value++
    }
    function reduction(){
        count.value--
    }
    return { count, doubleCount, increment, reduction }
})