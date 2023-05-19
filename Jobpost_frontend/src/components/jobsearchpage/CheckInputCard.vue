<template>
    <div class="check-input-filter">
        <input type="checkbox" :id="labelName" >
        <label :for="labelName">{{ checkboxText }}</label>

    </div>
</template>

<script>
export default {
    name: 'JobPostCheckInputCard',

    data() {
        return {
            labelName:this.checkboxText.toLowerCase()
            
        };
    },
    props:[
        'checkboxText'

    ],

    methods: {
        
    },
};
</script>

<style lang="css" scoped>
.check-input-filter{
    display:flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 10px;
   
}
.check-input-filter :is(input,label){
    cursor: pointer;
}

</style>