<script setup>
import CustomEventChildInput from '@/components/common/TwoWayDataBinding/BasicFormBinding/BasicFormBindingInput.vue';
import {ref, reactive} from 'vue';

const emit = defineEmits(
    {
        fSubmit: ({name}) =>{
            console.warn(name)
        }
    }
)

const submitedText = ref("")
const formsContent = reactive({
    fname: 'Basic Input',
    fid: 'basicInput',
    inpvalue: 'Basic Value'
})
const submitFrom = (name) =>{
    submitedText.value = name;
    formsContent.inpvalue = name;
    console.warn('form submitted', name)
}
</script>

<template>
    <h2 class="FlexContainer FlexCenter Txt_C">submitted text: {{ submitedText }}</h2><br>
    <h2 class="FlexContainer FlexCenter Txt_C">Text change reactive: {{ formsContent.inpvalue }}</h2><br>

    <div class="FlexContainer FlexEven">
        <CustomEventChildInput 
        v-bind="formsContent"
        @f-submit="submitFrom"/>
    </div>
</template>

<style>
</style>