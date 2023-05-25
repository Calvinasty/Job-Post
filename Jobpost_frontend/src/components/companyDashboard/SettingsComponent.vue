<template>
    <aside class="settings flex-center">
        <button type="button">
            <span class="material-symbols-outlined">{{ settings[0].icon }}</span>
            {{ settings[0].name }}
        </button>
        <button type="button">
            <span class="material-symbols-outlined">{{ settings[1].icon }}</span>
            {{ settings[1].name }}
        </button>

        <div class="profile flex-center-row ">
            <span></span>
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
        transition: 0.2s ease-in-out;
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
    .profile{
        gap: 10px;
        width: 100%;
        padding: 10px;
        margin-top: 5px;
        justify-items:flex-start;
        border: 1px solid #7FBF4C;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.2s ease-in-out;
    }
    .profile:hover{
        box-shadow: 5px 0px 9px rgba(131, 131, 131, 0.633);
        border: 2px solid #7FBF4C;
    }
    .settings .profile > span{
        background-image: url('/images/company_logo.png');
        background-size: 300%;
        background-position: 50% 45%;
        display: inline-block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 0.1px solid #666;
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
    /* .material-symbol-outlined{
        color: #88CC00;
    } */
    button span{
        color: #88CC00;
    }
</style>