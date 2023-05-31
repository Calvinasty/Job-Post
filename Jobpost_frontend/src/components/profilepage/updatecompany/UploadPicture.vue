<template>
    <div class="upload-picture">
        <div>
            <img src="" alt="" class="display-image">
        </div>

        <form action="" class="image-field">
            <InputComponent inputType="file" accept="image/*" id="images-input" />
        </form>
    </div>
</template>

<script>
    import  InputComponent from '../inputComponent.vue'
    export default {
        components: {
             InputComponent
        },

        data() {
            return {
                image: ""
            
        }
    }

    }
</script>

<style lang="css" scoped>
    .upload-picture {
        display: flex;
        justify-content: center;
        align-content: center;
        width: 40%;
    }
</style>