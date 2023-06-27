<template>
    <div class="upload-picture">
        <div class="company-logo">
            <img v-bind:src="imagePreview" alt="" class="display-image" id="display-image" @click="openUpload">
        </div>

        <form action="" class="image-field">
            <InputComponent type="file" id="image" placeHolder="image" name="image" accept="image/*" @change="updatePreview" :handleInput="handleInput"/>
            
            <div class="btnsec flex-center-row">
                <button class="btn" @click="handleSave">Save</button>
                <button class="btns" @click="handlecloseCard">Cancel</button>
            </div>
        </form>
    </div>
</template>

<script>
    import InputComponent from '../../../../authpage/InputComponent.vue'
    export default {
        components: {
             InputComponent
        },

        props: [
        'handlecloseCard',
        'handleSave',
    ],

        data() {
            return {
                imagePreview: "/images/companySample_logo.png",
                image: ''
        }
    },

    methods: {
        updatePreview(e) {
            var reader, files = e.target.files

            if (files.length === 0) {
                console.log('empty')
            }

            reader = new FileReader()
            reader.onload = (e) => {
                this.imagePreview = e.target.result
            }

            reader.readAsDataURL(files[0])
        },

        handleInput(data) {
            if(data.inputName == 'image') { 
                this.image = data.inputValue.replace(/^.*[\\\/]/, '');
                
        }
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
        height: 40dvh;
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
        border: 1px solid #88CC00;
        border-radius: 50%;
    }

    .image-field {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 30px;
        padding-top: 30px;
    }

    .company-logo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }

    .btnsec {
    /* position: absolute; */
    column-gap: 20px;
    bottom: 0;
    /* background-color: aqua; */
}

.btnsec>* {
    border: none;
}

.btn {
    border-radius: 8px;
    width: 140px;
    height: 50px;
    font-size: 18px;
    background-color: #88CC00;
    color: #ffffff;
}

.btns {
    border-radius: 8px;
    width: 140px;
    height: 50px;
    font-size: 18px;
    background-color: #000000;
    color: #ffffff;
}
</style>