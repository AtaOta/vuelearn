<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div>
        <ul>
            <li>
                <RouterLink to="/">
                    Home
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/displayIcons">
                    Icon Styling Component
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/CustomEvents">
                    Transfer data child to parent
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<style scoped>
ul{
    padding-inline-start: 0;
    height: auto;
}
ul li{
    min-height: 40px;
    font-weight: bold;
    background-color: #5900ff;
    margin-bottom: 5px;
}
ul li a{
    font-weight: bold;
    width: 100%;
    height: 100%;
    min-height: 40px;
    display: inline-block;
    color: #fff;
    padding: 5px;
}
ul li a:hover{
    color: #00ffaa;
}
</style>