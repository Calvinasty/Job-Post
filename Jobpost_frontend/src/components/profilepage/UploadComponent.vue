<template>
    <div class="card-detail flex-center">
        <div class="profile-pic">
            <img src="/images/userprofile.svg" alt="pic">
        </div>
        <div class="choose-file">
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
                id: 'upload-pic',
                type: 'file',
                placeholder: 'daniellapic.jpeg'

            }
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