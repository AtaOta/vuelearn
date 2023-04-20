<script setup>
import { ref, onMounted } from 'vue';
const props = defineProps({
    fname: String,
    fid: String,
    inpvalue: String
})
const name = ref("")
onMounted(() =>{
    name.value = props.inpvalue;
})
</script>

<template>
    <form @submit.prevent="$emit('fSubmit', name)">
        <label :for="fid">{{ fname }}</label><br>
        <input type="text" :id="fid" v-model="name">
        <button type="submit">Submit</button>
    </form>

</template>

<style>
</style>