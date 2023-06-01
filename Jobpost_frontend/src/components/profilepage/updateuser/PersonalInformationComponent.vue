<template>
    <div class="card-detail">
        <div class="input-container">
            <EditInputComponent inputName="First Name" inputType="text" />
        </div>
        <div class="input-container flex-center-row double">
            <EditInputComponent inputName="Middle Name" inputType="text" />
            <EditInputComponent inputName="Last Name" inputType="text" />
        </div>
        <div class="input-container">
            <EditInputComponent inputName="Email" inputType="email" />
        </div>
        <div class="input-container">
            <EditInputComponent inputName="Contact" inputType="tel" />
        </div>
        <div class="input-container flex-center-row double">
            <EditInputComponent inputName="LinkedIn URl" inputType="text" />
            <EditInputComponent inputName="GitHub URL" inputType="text" />
        </div>
        <div class="input-container">
            <EditInputComponent inputName="Date of Birth" inputType="date" />
        </div>
        <div class="input-container">
            <EditInputComponent inputName="Resume CV" inputType="" />
        </div>
        <div class="input-container">
            <EditInputComponent inputName="" inputType="radio" />
            <EditInputComponent inputName="" inputType="radio" />
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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding-top: 8%;
    border: 2px solid aqua;
    /* padding-bottom: 70px; */
}

.double {
    width: 100%;
}

.double:nth-child(1) {
    max-width: 50%;
    background: #000;
}

.double:nth-child(2) {
    max-width: 50%;
    background: #000
}
</style>