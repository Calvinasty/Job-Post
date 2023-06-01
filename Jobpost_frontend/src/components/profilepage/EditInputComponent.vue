<template>
    <div class="input-field">
        <input :placeholder="inputName" :name="name" :type="inputType" :id="inputId" :accept="accept">
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },

    props: [
        "inputType",
        "inputId",
        "inputName",
        "name",
        "accept"
    ]

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
</style>

