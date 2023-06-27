<template>
    <aside class="nav-item">
        <button type="button" :class="{ active:navItem?.active}" v-for="(navItem, index) in navItems" @click="() => goto(navItem.link, index)" :key="index">
            <span class="material-symbols-outlined"> {{ navItem.icon }} </span>
            {{ navItem.name }}
        </button>
    </aside>
</template>

<script>
    export default {
        props:[
            "navItems",
            "goto"
        ]
    }
</script>

<style lang="css" scoped>
    .nav-item {
        width: 100%;
        height: 100%;
        /* padding: 0 20px; */
        gap: 20px;
        display: flex;
        flex-direction: column;
        position: relative;
        /* border: 1px solid green;     */
    }

    .nav-item button {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        padding: 20px 20px;
        outline: none;
        border: none;
        font-size: 15px;
        font-weight: 500;
        color: #666;
        font-weight: 600;
        margin: 5px 0;
        /* border-radius: 5px; */
        cursor: pointer;
        text-align: left;
        background-color: transparent;
        transition: 0.2s ease-in-out;
    }

    .nav-item button:hover {
        background-color: rgba(217, 217, 217, 1);
        color: #000;
        font-weight: bold;
    }

    .nav-item button span {
        margin-right: 10px;
    }
    .material-symbols-outlined {
        /* fill: #7FBF4C; */
        color: #88CC00;
    }

    .nav-item .active{
        background-color: rgb(136, 204, 0,0.10000000149011612);
        border-left: 10px solid #8c0;
        color: #88cc00;
        font-weight: bolder;
    }
    .nav-item .active span{
        color: #8c0;
        font-weight: bolder;
    }
</style>