<template>
    <form action="" class="card-detail">
        <h2>{{ title }}</h2>
        <div class="input-container">
            <InputComponent placeHolder="LinkedIn URL" name="linkedIn_link" type="text" :handleInput="handleInput" />
        </div>
        <div class="input-container">
            <InputComponent placeHolder="GitHub URL" name="gitHub_link" type="text" :handleInput="handleInput" />
        </div>
        <div class="btnsec flex-center-row">
            <button class="btn" @click.prevent="handleAdd">Save</button>
            <button class="btns" @click.prevent="handlecloseCard">Cancel</button>
        </div>
    </form>
</template>

<script>
import { mapActions } from 'pinia'
import { useUserStore } from '../../../stores/users'
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL
import InputComponent from '../../authpage/InputComponent.vue';
export default {

    components: {
        InputComponent,
    },

    props: [
        'handlecloseCard',
        'handleSave',
        'userInfo'
    ],

    data() {
        return {
            title: 'Add / Edit Social links',
            socialsLink: {
                linkedIn_link: "",
                gitHub_link: ""
            }

        }
    },

    mounted() {

    },

    methods: {
        ...mapActions(useUserStore, ['setUser']),
        handleAdd() {
            const token = JSON.parse(localStorage.getItem('userToken'))
            // console.log(this.socialsLink.linkedIn_link, this.socialsLink.gitHub_link);
            const updatedUserInfo = new FormData()
            updatedUserInfo.append('linkedIn_link', this.socialsLink.linkedIn_link)
            updatedUserInfo.append('gitHub_link', this.socialsLink.gitHub_link)

            axios.post(`${BASE_URL}/links/jsLinks`, updatedUserInfo, { headers: { token } })
                .then((res) => {
                    if (res.data) {
                        // console.log('update', res.data)
                        // alert(res.data.message)
                        const token = JSON.parse(localStorage.getItem('userToken'))
                        axios.get(`${BASE_URL}/jobSeeker/getAllInfo`, { headers: { token } })
                            .then((res) => {
                                console.log('Social res data', res.data);
                                this.setUser(res.data.allInfo[0])
                            })
                            .then(window.location.reload())
                            .catch((err) => {
                                console.log(err);
                            })
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => { this.handlecloseCard() })

        },
        handleInput(data) {
            // console.log(data);
            if (data?.inputName == 'linkedIn_link') { this.socialsLink.linkedIn_link = data.inputValue }
            if (data?.inputName == 'gitHub_link') { this.socialsLink.gitHub_link = data.inputValue }
        },

    }

}
</script>

<style lang="css" scoped>
.card-detail {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding-top: 3%;
}

.input-container {
    width: 100%;
    padding-left: 200px;
    padding-right: 200px
}


.btnsec {
    padding-bottom: 20px;
    gap: 20px;
    bottom: 0;

}

.btnsec>* {
    border: none;
    cursor: pointer;
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