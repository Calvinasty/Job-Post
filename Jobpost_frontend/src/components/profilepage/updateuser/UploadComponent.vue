<template>
    <form class="card-detail flex-center">
        <h2>{{ title }}</h2>
        <div class="profile-pic">
            <img :src="imgPreview" alt="pic">
        </div>
        <div class="choose-file">
            <EditInputComponent inputName="daniellapic.jpeg" accept="image/*" @change="updatePreview" inputType="file" />
        </div>
        <div class="btnsec flex-center-row">
            <button class="btn" @click="handleUpdate">Save</button>
            <button class="btns" @click.prevent="handlecloseCard">Cancel</button>
        </div>
    </form>
</template>

<script>
import { mapActions } from 'pinia'
import { useUserStore } from '../../../stores/users'
import EditInputComponent from '../EditInputComponent.vue'
import axios from 'axios'
const BASE_URL = import.meta.env.VITE_BASE_URL
export default {

    components: {
        EditInputComponent,
    },
    props: [
        'type',
        'handlecloseCard',
        'handleSave',
        'userInfo',
        'index',
    ],
    data() {
        return {
            title: 'Edit Profile Picture',
            imgPreview: "/images/avatar.jpg",
            img: "",
            showModal: false,
        }
    },

    beforeMount() {
        this.img = this.userInfo?.photo
    },

    methods: {
        ...mapActions(useUserStore, ['setUser']),
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

        handleUpdate() {
            const token = JSON.parse(localStorage.getItem('userToken'))
            const updatedUserInfo = new FormData()
            updatedUserInfo.append('photo', this.img.photo)
            axios
                .put(`${BASE_URL}/jobSeeker/updateJobSeeker`, updatedUserInfo, { headers: { token } })
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err)
                })
            this.handlecloseCard()
        }


    }
}
</script>

<style lang="css" scoped>
.card-detail {
    justify-content: space-around;
    gap: 20px;
    width: 520px;
    padding-top: 3%;
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