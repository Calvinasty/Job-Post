<template>
    <div class="input-field">
        <label :for="inputId">{{ fullName }}</label>
        <input :type="inputType" :name="inputName" :id="inputId">
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
        "inputName"
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
    font-size: 15px;
    color: #898989;

}

.input-field input {
    font-weight: 600;
    font-size: 16px;
    color: #000000;
    border: none;
    outline: none;
    border-bottom: 2px solid #D9D9D9;

}

@media screen and (max-width:480px) {

    .input-field {
        width: 235px;
    }

}
</style>

