<template>
    <span>
        <label :for="inputId">{{label}}</label>
        <input 
            :type="type" 
            :name="name" 
            :value="value" 
            :id="inputId" 
            :placeholder="placeHolder"
        >
    </span>
</template>

<script>
    export default {
        props:[
            "label", "type", "name", "value", "inputId", "placeHolder"
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
        border: 2px solid #7FBF4C;
        border-radius: 5px;
        /* outline: none; */
       
    }
   
    input[type="date"]{
        background-color: #7FBF4C;
        color: #fff;
    }
    ::-webkit-calendar-picker-indicator{
        background-color: #fff;
    }
    
</style>