<template>
    <div class="btnsec flex-center-row">
        <button class="btn" type="submit" @click.prevent="handleUpdate">Save</button>
        <button class="btns" @click.prevent="handlecloseCard">Cancel</button>
    </div>
</template>

<script>
export default {

    props: [
        'handlecloseCard',
        'handleSave',
    ]

}
</script>

<style lang="css" scoped>
.btnsec {
    /* position: absolute; */
    padding-bottom: 20px;
    gap: 20px;
    bottom: 0;
    /* background-color: aqua; */
}

.btnsec>* {
    border: none;
    cursor: pointer
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