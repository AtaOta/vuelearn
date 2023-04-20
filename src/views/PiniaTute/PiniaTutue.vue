<template>
    <div>Pinia tute</div>
    <!-- BASIC -->
    <!-- <h1>Count: {{ store.count }}</h1>
    <h1>Double Count: {{ store.doubleCount }}</h1>
    <button @click="store.increment ">Increase Num</button> -->

    <!-- DI-STRUCTURE -->
    <h1>Count: {{ count }}</h1>
    <h1>Double Count: {{ doubleCount }}</h1>
    <button @click="increment ">Increase Num</button>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
// BASIC
// const store = useCounterStore()
// console.warn(store);

// DI-STRUCTURE
const store = useCounterStore()
const { count, doubleCount } = storeToRefs(store);
const {increment} = store
</script>