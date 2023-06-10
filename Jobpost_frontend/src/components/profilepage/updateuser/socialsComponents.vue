<template>
    <form @submit.prevent="handleUpdate" class="card-detail">
        <div class="input-container">
            <EditInputComponent inputName="LinkedIn URl" name="linkedIn_url" inputType="text" :handleChange="handleInput" />
        </div>
        <div class="input-container">
            <EditInputComponent inputName="GitHub URL" name="git_url" inputType="text" :handleChange="handleInput" />
        </div>
        <div class="btnsec flex-center-row">
            <button class="btn" @click="handleSave">Save</button>
            <button class="btns" @click="handlecloseCard">Cancel</button>
        </div>
    </form>
</template>

<script>
import EditInputComponent from '../EditInputComponent.vue';
export default {

    components: {
        EditInputComponent,
    },

    props: [
        'handlecloseCard',
        'handleSave',
    ],

    data() {

    },

    mounted() {

    },

    methids: {

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
    /* border: 2px solid aqua; */
    /* padding-bottom: 70px; */
}

.input-container {
    width: 100%;
    padding-left: 200px;
    padding-right: 200px
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