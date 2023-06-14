<template>
    <span class="inputfield-component ">
        <label :for="inputId"><span v-html="label"></span></label>
        <input  :type="type" :name="name" v-model="value" v-on:change="()=>handleInput({inputValue:value, inputName:name})" :id="inputId" :placeholder="placeHolder" :accept="accept" min="1900-01-01" max="2005-01-01" :value="Value" :disabled="disabled">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        props:[
            "type", "name", "inputId", "placeHolder", "handleInput", "accept", 'label', 'Value', 'disabled'
        ]
    }
</script>

<!-- styles -->
<style lang="css" scoped>
    span{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 5px;
        width: 100%;
    }
    span label{
        color: #666;
        font-size: 14px;
    }
    span input, select{
        width: 100%;
        padding: 14px;
        border: 1px solid #7FBF4C; 
        border-radius: 10px;
       
        /* outline: none; */
    }
   
    input[type="date"]{
        background-color: #7FBF4C;
        color: #fff;
        color-scheme: dark;
    }
    ::-webkit-calendar-picker-indicator{
        background-color: #fff;
        color-scheme: light;
    }
    span:deep() .red-text{
        color: red;
    }
    span:deep() .green-text{
        color: green;
    }
    
</style>