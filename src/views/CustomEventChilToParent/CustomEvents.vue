<script setup>
import SlotingComponent from '@/components/common/BesicPageStructure/SlotingComponent.vue';
import BasicBiding from '@/components/common/TwoWayDataBinding/BasicBinding/BesicBinding.vue';
import BasicFormBinding from '@/components/common/TwoWayDataBinding/BasicFormBinding/BasicFormBinding.vue';
import {reactive} from 'vue';

const besicDataBinding = reactive({
    msg: 'Call A Besic Increament And Decrement Event From Child to Parent'
})
const besicFormBinding = reactive({
    msg: 'here we import data from child componet to parent on child form submission'
})
</script>

<template>
    <div class="ContentWrapper">
        <SlotingComponent v-bind="besicDataBinding">
            <BasicBiding/>
        </SlotingComponent>

        <SlotingComponent v-bind="besicFormBinding">
            <BasicFormBinding/>
        </SlotingComponent>
    </div>
</template>

<style>
</style>