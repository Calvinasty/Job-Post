<template>
    <div class="container" @click="handleClick(navItem.link)">
        {{ navItem.name }}
    </div>
</template>

<script>
    export default {
        props:['navItem', 'handleClick']
    }
</script>

<style lang="css" scoped>
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        color: #FFF;
        background: #8C0;
        width: 50%;
        padding: 30px;
        cursor: pointer;
        border-radius: 20px; 
    }
    .container:hover{
        background-color: transparent;
        color: #000;
        border: 1px solid #8C0;
        border-left: 10px solid #8C0;
        background-color: #fff;
        font-weight: bold;
        transition: 0.3s;
    }

</style>