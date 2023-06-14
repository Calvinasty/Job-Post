<template>
    <form action="" class="card-detail">

        <div class="input-container">
            <InputComponent id="" type="text" placeHolder="Job Title / Role" name="role" :handleInput="handleInput"
                :Value="experience.role" />
        </div>
        <div class="input-container">
            <InputComponent id="" type="text" placeHolder="Company Organization" name="company_name"
                :handleInput="handleInput" :Value="experience.company_name" />
        </div>
        <div class="input-container flex-center-row double">
            <InputComponent placeHolder="Middle Name" name="middle_name" type="date" :Value="experience.start_date"
                :handleInput="handleInput" />
            <InputComponent placeHolder="Last Name" name="last_name" type="date" :Value="experience.end_date"
                :handleInput="handleInput" />
        </div>
        <div class="input-container">
            <textarea placeholder="Job Description" name="" id="" cols="70" rows="6"></textarea>
        </div>
        <div class="btnsec flex-center-row">
            <button class="btn" v-on="handleSave" type="submit" @click.prevent="handleUpdate">Save</button>
            <button class="btns" @click.prevent="handlecloseCard">Cancel</button>
        </div>

    </form>
</template>

<script>
import InputComponent from '../../authpage/InputComponent.vue';
// import EditInputComponent from '../EditInputComponent.vue'
export default {
    components: {
        // EditInputComponent,
        InputComponent,
    },

    props: [
        'handlecloseCard',
        'handleSave',
    ],

    data() {
        return {
            experience: {
                role: '',
                company_name: '',
                start_date: '',
                end_date: '',

            }
        }
    },
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

.double {
    gap: 20px;

}

textarea {
    font-weight: 400;
    font-size: 16px;
    padding: 10px;
    color: #000000;
    border: none;
    outline: none;
    border: 1px solid #7FBF4C;
    border-radius: 8px;
    width: 100%;
}

.double {
    gap: 20px;

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