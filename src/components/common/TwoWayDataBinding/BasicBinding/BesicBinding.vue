<script setup>
import {ref } from 'vue';
import bindingWithoutArgument from '@/components/common/TwoWayDataBinding/BasicBinding/bindingWithoutArgument.vue';
import CustomEventChildBtnAction from '@/components/common/TwoWayDataBinding/BasicBinding/CustomEventChildBtnAction.vue';

const count = ref(0);
const Increase10 = (n) =>{
    count.value += n
}
// OPTIONAL BUT INCASE OF CODE READING PURPOSE IT IS IMPORTANT
// const emit = defineEmits(['increaseCount'],)
// const emit = defineEmits(['decreaseCount'])
const emit = defineEmits(['increase10Time'])
// const emit = defineEmits(['decrease10Time'])

</script>

<template>
    <h1 class="FlexContainer FlexCenter Txt_C">
        counter: {{ count }}
    </h1><br>

    <div class="FlexContainer FlexEven">
        <bindingWithoutArgument
            @increase-count="count++" 
            @decrease-count="count--"
        />
        <CustomEventChildBtnAction 
            @increase10-time="(n) => Increase10(n)"
            @decrease10-time="(m) => (count -= m)"
        />
    </div>
</template>

<style>
</style>