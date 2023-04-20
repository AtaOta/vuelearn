<template>
    <footer>{{ name }}</footer>
</template>

<script setup>
let name = 'Sudipta Mandal'
</script>

<style scoped>
footer{
    position: fixed;
    bottom: 0;
    height: 50px;
    background-color: #fff;
    width: 100vw;
    max-width: 1280px;
    z-index: 1000;
}
</style>