<template>
    <div class="input-field">
        <input :placeholder="value" :name="name" v-model="updateValue"
            v-on:change="handleChange({ inputValue: updateValue, inputName: name })" :type="inputType" :id="inputId"
            :accept="accept" :on-focus="this.type = 'date'">
    </div>
</template>

<script>
export default {
    data() {
        return {
            updateValue: '',
        }
    },

    beforeMount() {
        this.updateValue = this.value
    },

    props: [
        "inputType",
        "inputId",
        "inputName",
        "name",
        "accept",
        "value",
        "handleChange",

    ],
    watch: {

    }

}
</script>

<style lang="css" scoped>
.input-field {
    width: 100%;
    /* background: #000; */
}

.input-field input {
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

input::placeholder {
    color: Black;

}
</style>

