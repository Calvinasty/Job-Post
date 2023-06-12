<template>
    <div class="card-detail flex-center">
        <div class="profile-pic">
            <img :src="imgPreview" alt="pic">
        </div>
        <div class="choose-file">
            <EditInputComponent inputName="daniellapic.jpeg" accept="image/*" @change="updatePreview" inputType="file" />
        </div>
        <div class="btnsec flex-center-row">
            <button class="btn" @click="handleSave">Save</button>
            <button class="btns" @click="handlecloseCard">Cancel</button>
        </div>
    </div>
</template>

<script>
import EditInputComponent from '../EditInputComponent.vue'
export default {

    components: {
        EditInputComponent,
    },
    props: [
        'type',
        'handlecloseCard',
        'handleSave',
        'index'
    ],



    data() {
        return {
            imgPreview: "/images/avatar.jpg",
            img: ""

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
                this.imgPreview = e.target.result
            }
            reader.readAsDataURL(files[0])
        },
    }
}
</script>

<style lang="css" scoped>
.card-detail {
    justify-content: space-around;
    gap: 20px;
    width: 520px;
    padding-top: 10%;
    /* padding-bottom: 70px; */
}

.profile-pic {
    width: 200px;
    height: 200px;
}

.profile-pic>img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.btnsec {
    /* position: absolute; */
    padding-bottom: 20px;
    gap: 20px;
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