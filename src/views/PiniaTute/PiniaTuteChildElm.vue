<template>
    <br><hr>
    <div>Pinia tute child</div>
    <h1>Count: {{ store.count }}</h1>
    <h1>Count: {{ store.doubleCount }}</h1>
    <button @click="store.reduction">Reduce Number</button>
</template>


<script setup>
import { useCounterStore } from '@/stores/counter';
const store = useCounterStore()
console.warn(store.count)
</script>