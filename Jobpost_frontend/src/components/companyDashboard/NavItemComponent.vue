<template>
    <aside class="nav-item flex-center">
        <button type="button" v-for="navItem in navItems" @click="goto(navItem.link)">
            <span class="material-symbols-outlined"> {{navItem.icon}} </span>
            {{ navItem.name }}
        </button>
    </aside>
</template>

<script>
    export default {
        props:[
            "navItems"
        ],
        methods:{
            goto(link){
                alert(link)
            }
        }
    }
</script>

<style lang="css" scoped>
    .nav-item{
        width: 100%;
        /* border: 1px solid red */
    }
    .nav-item button{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        padding: 15px 20px;
        outline: none;
        border: none;
        font-size: 15px;
        font-weight: 500;
        color: #666;
        margin: 5px 0;
        border-radius: 5px;
        cursor: pointer;
        text-align: left;
        background-color: transparent;
        border-bottom: 0.5px solid #666;
    }
    .nav-item button:hover{
        box-shadow: 5px 0px 9px rgba(131, 131, 131, 0.633);
        background-color: #7FBF4C;
        color: #fff;
        font-weight: bold;
    }
    .nav-item button span{
        margin-right: 10px;
    }
    .nav-item button span:hover{
    }
    .material-symbols-outlined{
        /* fill: #7FBF4C; */
    }

</style>