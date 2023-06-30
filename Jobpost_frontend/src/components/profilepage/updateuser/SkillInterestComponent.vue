<template>
    <form action="" class="card-detail">
        <h2>{{ title }}</h2>
        <div v-for="key in count" :key=key class="input-container">
            <!-- <EditInputComponent inputName="Add Skill" name="add_skill" inputType="text" :handleChange="handleInput" /> -->
            <InputComponent id="" type="text" placeHolder="Add Skill" name="skill_name" :handleInput="handleInput"
                :Value="skills.skill_name" />
        </div>
        <div class="edit-skill flex-center-row">
            <div class="add-skill flex-center-row" @click="add">
                <img class="editicon" src="/images/plusediticon.svg" alt="editicon">
                <p>Add Skill</p>
            </div>
            <div class="remove-skill flex-center-row" @click="remove">
                <img class="editicon" src="/images/drop.svg" alt="editicon">
            </div>
        </div>

        <div class="btnsec flex-center-row">
            <button class="btn" @click.prevent="handleUpdate">Save</button>
            <button class="btns" @click.prevent="handlecloseCard">Cancel</button>
        </div>
    </form>
</template>

<script>
import { mapActions } from 'pinia'
import { useUserStore } from '../../../stores/users'
// import EditInputComponent from '../EditInputComponent.vue';
import InputComponent from '../../authpage/InputComponent.vue';
import axios from 'axios';
const BASE_URL_USER = import.meta.env.VITE_BASE_URL_USER
export default {
    components: {
        // EditInputComponent,
        InputComponent,
    },

    data() {
        return {
            title: 'Add / Edit Education Skills/Interest',
            count: 1,
            skills: {
                skill_name: '',
            }
        }
    },

    mounted() {

    },

    props: [
        'handlecloseCard',
        'handleSave',
        'userInfo',
    ],

    methods: {
        ...mapActions(useUserStore, ['setUser']),
        add() {
            this.count++;
        },
        remove() {
            this.count--;
        },

        handleUpdate() {
            const token = JSON.parse(localStorage.getItem('userToken'))
            const updatedUserInfo = new FormData()
            updatedUserInfo.append('skill_name', this.skills.skill_name)

            axios.post(`${BASE_URL_USER}/skills/addSkills`, updatedUserInfo, { headers: { token } })
                .then((res) => {
                    if (res.data) {
                        const token = JSON.parse(localStorage.getItem('userToken'))
                        axios.get(`${BASE_URL_USER}/jobSeeker/getAllInfo`, { headers: { token } })
                            .then((res) => {
                                console.log('Skills res data', res.data);
                                this.setUser(res.data.allInfo[0])
                            })
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
            if (data?.inputName == 'skill_name') { this.skills.skill_name = data.inputValue }
        }




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
    padding-top: 5%;
}

.input-container {
    width: 100%;
    padding-left: 200px;
    padding-right: 200px
}

.editicon {
    cursor: pointer;
}

.add-skill {
    gap: 10px;

}

.edit-skill {
    gap: 10px;

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