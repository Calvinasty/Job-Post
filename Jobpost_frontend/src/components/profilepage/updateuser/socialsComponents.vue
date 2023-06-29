<template>
    <form action="" class="card-detail">
        <h2>{{ title }}</h2>
        <div class="input-container">
            <InputComponent placeHolder="LinkedIn URL" name="linkedIn_link" type="text" :handleInput="handleInput"
                :Value="socialsLink.linkedIn_link" />
        </div>
        <div class="input-container">
            <InputComponent placeHolder="GitHub URL" name="gitHub_link" type="text" :handleInput="handleInput"
                :Value="socialsLink.gitHub_link" />
        </div>
        <div class="btnsec flex-center-row">
            <button class="btn" @click.prevent="handleAdd">Save</button>
            <button class="btns" @click.prevent="handlecloseCard">Cancel</button>
        </div>
    </form>
</template>

<script>
import { mapActions } from 'pinia'
import { mapState } from 'pinia'
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

    computed: {
        ...mapState(useUserStore, ['user'])
    },

    mounted() {
        this.socialsLink.linkedIn_link = this.user?.js_social_link?.linkedIn_link
        this.socialsLink.gitHub_link = this.user?.js_social_link?.gitHub_link
    },

    methods: {
        ...mapActions(useUserStore, ['setUser']),
        handleAdd() {
            // console.log(this.user.js_social_link);
            // if (!this.user.js_social_link || this.user.js_social_link == null) {
            const token = JSON.parse(localStorage.getItem('userToken'))
            // console.log(this.socialsLink.linkedIn_link, this.socialsLink.gitHub_link);
            const updatedUserInfo = new FormData()
            updatedUserInfo.append('linkedIn_link', this.socialsLink.linkedIn_link)
            updatedUserInfo.append('gitHub_link', this.socialsLink.gitHub_link)
            console.log(this.socialsLink);
            axios.post(`${BASE_URL}/links/jsLinks`, updatedUserInfo, { headers: { token } })
                .then((res) => {
                    console.log(token);
                    if (res.data) {
                        console.log('post', res.data)
                        // this.socialsLink = res.data.newLink
                        console.log(this.socialsLink);

                        const token = JSON.parse(localStorage.getItem('userToken'))
                        axios.get(`${BASE_URL}/jobSeeker/allInfo`, { headers: { token } })
                            .then((res) => {
                                console.log('Jobseeker All Info', res.data);
                                // res.data.allInfo[0]['js_social_link'] = this.socialsLink
                                this.setUser(res.data.allInfo[0], 'socials')
                            })
                            .catch((err) => {
                                let msg
                                if (err.response)
                                    msg = err.response.data.message
                                else
                                    msg = err.message

                                this.showToast(msg, 'error')
                                this.loading = false
                                console.log(err)
                            })
                    }
                })
                .then(() => {
                    setTimeout(() => {
                        this.handlecloseCard()
                        window.location.reload()
                    }, 2000)

                })
                .catch((err) => {
                    let msg
                    if (err.response)
                        msg = err.response.data.message
                    else
                        msg = err.message

                    this.showToast(msg, 'error')
                    this.loading = false
                    console.log(err)
                })
            // .finally(() => { this.handlecloseCard() })
            // }
            // else {
            //     const token = JSON.parse(localStorage.getItem('userToken'))
            //     const id = this.user.js_social_link.id
            //     console.log(id);
            //     const updatedUserInfo = new FormData()
            //     updatedUserInfo.append('linkedIn_link', this.socialsLink.linkedIn_link)
            //     updatedUserInfo.append('gitHub_link', this.socialsLink.gitHub_link)

            //     axios.put(`${BASE_URL}/links/update/${id}`, updatedUserInfo, { headers: { token } })
            //         .then((res) => {
            //             if (res.data) {
            //                 console.log('update', res.data)
            //                 // alert(res.data.message)
            //                 this.socialsLink = res.data.newLink

            //                 const token = JSON.parse(localStorage.getItem('userToken'))
            //                 axios.get(`${BASE_URL}/jobSeeker/getAllInfo`, { headers: { token } })
            //                     .then((res) => {
            //                         console.log('All Job Seeker', res.data);
            //                         res.data.allInfo[0]['js_social_link'] = this.socialsLink
            //                         this.setUser(res.data.allInfo[0], 'socials')
            //                     })
            //                     .then(window.location.reload())
            //                     .catch((err) => {
            //                         console.log(err);
            //                     })
            //             }
            //         })
            //         .catch((err) => {
            //             console.log(err);
            //         })
            //         .finally(() => { this.handlecloseCard() })
            // }


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