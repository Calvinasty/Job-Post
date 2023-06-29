<template>
    <div class="apply-input-container flex-center">
        <label :for="id">{{ label }}</label>
        <input v-if="!show" :type="inputType" :id="id" :accept="fileTypes" :name="inputName"
            v-on:change="() => handleInput({ id, value })" :placeholder="placeholder" :value="value" readonly>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'JobPostApplyInputComponent',
    props: ['label', 'inputType', 'inputName', 'id', 'placeholder', 'fileTypes', 'value', 'handleInput', "show"],
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {


    },
};
</script>

<style lang="css" scoped>
.apply-input-container {
    align-items: flex-start;
    width: 100%;
    /* background: #000; */

}

input {
    border: 1px solid rgba(120, 114, 114, 1);
    height: 30px;
    padding-left: 17px;
    background: transparent;
    /* max-width: 360px; */
    width: 100%;
    outline: none;
    cursor: default;
    color: #000;
    border-radius: 8px;
}

label {
    color: rgba(120, 114, 114, 1);
}
</style>