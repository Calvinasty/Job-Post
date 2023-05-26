<template>
    <div class="overlay">
        <div class="modal">
            <span @click="$emit('modal-close')">X</span>
            <h3>POST A JOB</h3>
            <PostJobForm />
        </div>
    </div>
</template>

<script>
    import PostJobForm from './PostJobForm.vue';
    export default {
        components:{
            PostJobForm
        }
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
        width: 50%;
        height: 80%;
        padding: 20px 40px;
        border-radius: 10px;
    }
    .modal span{
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bolder;
        cursor: pointer;
        height: 30px;
        width: 30px;
        background-color: #7FBF4C;
        color: #fff;
        border-radius: 50%;
        box-shadow: 1px 0px 9px rgba(131, 131, 131, 0.633);
    }
    .modal > h3{
        margin-bottom: 20px;
        color: #88CC00;
    }
</style>