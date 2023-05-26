<template>
    <div class="card-container flex-center">
        <div class="card">
            <NavListComponent />
            <router-view></router-view>
            <div class="btnsec flex-center-row">
                <button class="btn" @click="handleEdit">Save</button>
                <button class="btns" @click="handleEdit">Cancel</button>
            </div>

        </div>

    </div>
</template>

<script>
import NavListComponent from './NavListComponent.vue'
export default {
    components: {
        NavListComponent,
    },

    data() {
        return {

        }
    },

    methods: {
        handleEdit() {
            this.$router.push('/userprofile');
        }
    }

}
</script>

<style lang="css" scoped>
.card-container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    background-color: rgba(70, 70, 70, 0.532);
    height: 100vh;
}

.card {
    position: relative;
    border-radius: 20px;
    background-color: #ffffff;
    width: 60%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 83px;
}


.btnsec {
    position: absolute;
    padding: 57px 0;
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