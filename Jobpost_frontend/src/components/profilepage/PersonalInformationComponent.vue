<template>
    <div class="card-detail flex-center">
        <div class="input-container">
            <EditInputComponent :inputName="inputOne.placeholder" :inputType="inputOne.type" />
        </div>
        <div class="input-container">
            <EditInputComponent :inputName="inputOne.placeholder" :inputType="inputOne.type" />
            <!-- <EditInputComponent :inputName="inputOne.placeholder" :inputType="inputOne.type" /> -->
        </div>
        <div class="input-container">
            <EditInputComponent :inputName="inputOne.placeholder" :inputType="inputOne.type" />
        </div>
        <div class="input-container">
            <EditInputComponent :inputName="inputOne.placeholder" :inputType="inputOne.type" />
        </div>
        <div class="input-container">
            <EditInputComponent :inputName="inputOne.placeholder" :inputType="inputOne.type" />
        </div>
    </div>
</template>

<script>
import EditInputComponent from './EditInputComponent.vue'
export default {
    components: {
        EditInputComponent,
    },

    data() {
        return {
            inputOne: {
                id: 'fullname',
                type: 'text',
                placeholder: 'fullname'

            },
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
</style>