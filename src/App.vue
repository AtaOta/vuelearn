<script setup>
import IconDisplay from './views/IconDisplay.vue';
import RouterPaths from './components/RouterPaths/RouterPaths.vue';
import { RouterView } from 'vue-router';
// import PiniaTutue from '@/views/PiniaTute/PiniaTutue.vue';
// import PiniaTuteChildElm from '@/views/PiniaTute/PiniaTuteChildElm.vue';
</script>

<template>
    <header>
        <div class="HeaderContent">"AtaOta" App Components Tutorial</div>
    </header>
    <aside>
        <RouterPaths />
    </aside>
    <section>
        <RouterView />
    </section>
</template>

<style>
header {
    grid-column: 4 / 18;
    grid-row: 1 / 2;
    background-color: #fff;
    border: 5px solid lightgray;
    border-bottom: 0px;
    border-left: 0px;
}

.HeaderContent{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bolder;
}

aside {
    grid-column: 1 / 4;
    grid-row: 1 / 18;
    background-color: transparent;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 5px;
    border: 5px solid lightgray;
    background-color: #fff;
    padding: 5px;
}

section {
    grid-column: 4 / 18;
    grid-row: 2 / 18;
    background-color: transparent;
    overflow-x: hidden;
    overflow-y: scroll;
    border: 5px solid lightgray;
    border-left: 0px;
    background-color: #fff;
    padding: 5px;
}</style>
