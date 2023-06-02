<template>
    <div class="card-detail flex-center">

        <div class="input-container">
            <EditInputComponent inputName="Job Title / Role " inputType="text" />
        </div>
        <div class="input-container">
            <EditInputComponent inputName="Company / Organization " inputType="text" />
        </div>
        <div class="input-container flex-center-row double">
            <EditInputComponent inputName="Started year " inputType="date" />
            <EditInputComponent inputName="Ended Year " inputType="date" />
        </div>
        <div class="input-container">
            <textarea name="" id="" cols="72" rows="6"></textarea>
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

    data() {
        return {

        }
    },
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