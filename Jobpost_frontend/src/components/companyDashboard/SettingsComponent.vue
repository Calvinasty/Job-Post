<template>
    <aside class="settings flex-center">
        <button type="button">
            <span class="material-symbols-outlined">settings</span>
            {{ settings[0].name }}
        </button>
        <button type="button">
            <span class="material-symbols-outlined">support_agent</span>
            {{ settings[1].name }}
        </button>

        <div class="profile flex-center-row ">
            <span>K</span>
            <div class="name">
                <span>{{ user.name }}</span>
                <span>{{ user.email }}</span>
            </div>
        </div>
    </aside>
</template>

<script>
    export default {
        props:[
            "settings",
            "user"
        ],
        mounted(){
            console.log('Hello')
        }
    }
</script>

<style lang="css" scoped>
    .settings{
        width: 100%;
    }
    .settings button{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        padding: 15px 20px;
        outline: none;
        border: none;
        font-size: 15px;
        font-weight: 600;
        margin: 5px 0;
        border-radius: 5px;
        cursor: pointer;
        text-align: left;
        /* background-color: transparent; */
    }
    .settings button:hover{
        box-shadow: 5px 0px 9px rgba(131, 131, 131, 0.633);
        border: 2px solid #7FBF4C;
    }
    .settings button span{
        margin-right: 10px;
    }
    .settings button span:hover{
        color: #7FBF4C;
        display: none;
        background-color: #7FBF4C;
    }
    .material-symbols-outlined{
    }
    .profile{
        gap: 10px;
        width: 100%;
        padding: 10px;
        margin-top: 5px;
        justify-items:flex-start;
        border: 1px solid #7FBF4C;
        border-radius: 5px;
        cursor: pointer;
    }
    .profile:hover{
        box-shadow: 5px 0px 9px rgba(131, 131, 131, 0.633);
        border: 2px solid #7FBF4C;
    }
    .settings .profile > span{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .profile .name{
        display: flex;
        flex-direction: column;
        justify-content: center ;
        align-items: flex-start;
    }
</style>