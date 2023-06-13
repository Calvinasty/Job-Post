<template>
    <div class="input-field">
        <label :for="inputId">{{ fullName }}</label>
        <div>
            <input class="input-tag" :type="inputType" :name="inputName" :id="inputId" :value="Value" disabled>
            <img class="editicon" v-show="showpencil" src="/images/edit_icon.svg" alt="editicon" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },

    props: [
        "fullName",
        "inputType",
        "inputId",
        "inputName",
        "Value",
        "showpencil"
    ]

}
</script>

<style lang="css" scoped>
.input-field {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    gap: 10px;
}

.input-field label {
    font-weight: 500;
    font-size: 10px;
    color: #898989;

}

.input-field input {
    font-weight: 600;
    font-size: 15px;
    color: #000000;
    border: none;
    outline: none;

    background-color: transparent;
}

div {
    position: relative;
    /* background: aqua; */
    border-bottom: 2px solid #D9D9D9;
}

.editicon {
    position: absolute;
    right: 0;
    cursor: pointer;
    width: 12px;
    /* background: #000; */
}

@media screen and (max-width:480px) {

    .input-field {
        width: 235px;
    }

}
</style>

