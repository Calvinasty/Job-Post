<template>
    <div class="overlay">
        <div class="modal">
            <h1>Post a Job</h1>
            <p>Hello Momo!</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
    .overlay{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.677);
    }
    .modal{
        text-align: center;
        background-color: #f1f1f1;
        width: 30%;
        height: 30%;
        padding: 20px;
        border-radius: 10px;
    }
</style>