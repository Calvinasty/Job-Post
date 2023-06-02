<template>
    <div class="card-detail flex-center">
        <div class="select-field">
            <Select>
                <option value="">Select</option>
                <option value="">Communication</option>
                <option value="">Problem solving</option>
            </Select>
            <Select>
                <option value="">Select</option>
                <option value="">Teamwork </option>
                <option value="">Teamwork </option>
            </Select>
            <Select>
                <option value="">Select</option>
                <option value="">Vue Js</option>
                <option value="">React</option>
            </Select>
            <Select>
                <option value="">Select</option>
                <option value="">HTML</option>
                <option value="">Css</option>
            </Select>
            <Select>
                <option value="">Select</option>
                <option value="">Python</option>
                <option value="">Java</option>
            </Select>
        </div>

        <div class="btnsec flex-center-row">
            <button class="btn" @click="handleSave">Save</button>
            <button class="btns" @click="handlecloseCard">Cancel</button>
        </div>
    </div>
</template>

<script>

export default {
    components: {

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

.select-field {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    gap: 10px;
}

.select-field select {
    font-weight: 400;
    font-size: 16px;
    padding: 12px;
    color: #000000;
    border: none;
    outline: none;
    border: 1px solid #7FBF4C;
    border-radius: 8px;
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