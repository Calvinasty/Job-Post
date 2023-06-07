<template>
    <div class="card-container flex-center">
        <div class="card">
            <NavListComponent :type="type" :index="index" />
            <slot></slot>
            <div class="btnsec flex-center-row">
                <button class="btn" @click="handleSave">Save</button>
                <button class="btns" @click="handlecloseCard">Cancel</button>
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
    props: [
        'type',
        'handlecloseCard',
        'handleSave',
        'index'
    ],
    data() {
        return {

        }
    },

    methods: {



    }

}
</script>

<style lang="css" scoped>
.card-container {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    background-color: rgba(70, 70, 70, 0.532);
    height: 100%;
}

.card {
    position: relative;
    border-radius: 20px;
    background-color: #ffffff;
    width: 60%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;

}


.btnsec {
    position: absolute;
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