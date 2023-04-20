<script setup>
const props =defineProps({
    msg: String
})
</script>

<template>
    <div class="MeadiumHeading FlexContainer FlexCenter Txt_C">
        {{ msg }}
    </div><hr><br>
    <slot>
        <!-- content placed here -->
    </slot>
    <br><br><hr>
    <div class="LargeHeading FlexContainer FlexCenter">*****</div>
    <hr>
</template>

<style>

</style>