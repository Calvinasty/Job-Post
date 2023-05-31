<template>
    <div class="upload-picture">
        <div class="company-logo">
            <img src="/images/logo.png" alt="" class="display-image">
        </div>

        <form action="" class="image-field">
            <InputComponent inputType="file" inputId="image" inputName="image" accept="image/*" />
        </form>
    </div>
</template>

<script>
    import  InputComponent from '../EditInputComponent.vue'
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
        flex-direction: column;
        justify-content: center;
        align-content: center;
        width: 60%;
        height: 30dvh;
        margin-top: 40px;
        row-gap: 20px;
        
    }

    .company-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        width: 160px;
        height: 160px;
        border: 1px solid black;
        border-radius: 50%;
    }

    .image-field {
        margin: 0 auto;
    }

    .company-logo img {
        width: 80%;
    }
</style>