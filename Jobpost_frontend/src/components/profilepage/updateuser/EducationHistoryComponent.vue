<template>
    <div class="card-detail flex-center">
        <div class="input-container">
            <EditInputComponent inputName="Course" name="first_name" inputType="text" />
        </div>
        <div class="input-container">
            <EditInputComponent inputName="Institution" name="first_name" inputType="text" />
        </div>
        <div class="input-container">
            <EditInputComponent inputName="Level" name="first_name" inputType="text" />
        </div>
        <div class="input-container">
            <EditInputComponent inputName="Degree" name="first_name" inputType="text" />
        </div>
        <div class="input-container">
            <EditInputComponent inputName="Year" name="first_name" inputType="date" />
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
        'handlecloseCard',
        'handleSave',
    ],

    mounted() {
        // this.education.institution = 
    },

    data() {
        return {
            education: {
                institution: '',
                certification: '',
                field_of_study: '',
                start_date: '',
                end_date: '',
            }
        }
    },

    methods: {

    }
}
</script>

<style lang="css" scoped>
.card-detail {
    justify-content: space-around;
    gap: 20px;
    width: 520px;
    padding-top: 20px;
    /* padding-bottom: 70px; */
}

.input-container {
    width: 100%;
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