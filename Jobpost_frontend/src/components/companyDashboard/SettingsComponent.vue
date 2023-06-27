<template>
    <main>
        <div class="settings">
            <button type="button" :class="{active:settings?.active}" @click="() => gotoSettings(settings.link, index)">
                <span class="material-symbols-outlined">{{ settings.icon }}</span>
                {{ settings.name }}
            </button>
        </div>
        
        <button @click="handleLogout()" class="icon-btn">
            <span class="material-symbols-outlined">{{ user.signoutIcon }}</span>
            <span class="text">{{ user.text }}</span> 
        </button>
    </main>
</template>

<script>
export default {
    props: [
        "settings",
        "user",
        "gotoSettings"
    ],
    methods:{
        handleLogout(){
            localStorage.clear('companyState')
            this.$router.push('/')
        }
    }
}
</script>

<style lang="css" scoped>
    main {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 20px 0;
        /* border: 1px solid; */
    }
    .settings {
        width: 100%;
        position: relative;
    }
    .settings button {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        padding: 20px 20px;
        outline: none;
        border: none;
        font-size: 15px;
        color: #666;
        font-weight: 600;
        margin: 5px 0;
        /* border-radius: 5px; */
        cursor: pointer;
        text-align: left;
        background-color: transparent;
        transition: 0.2s ease-in-out;
    }
    .settings button:hover {
        background-color: rgba(217, 217, 217, 1);
        color: #000;
        font-weight: bold;
        transition: 0.2s ease-in-out;
    }
    .settings button span {
        margin-right: 10px;
    }

    button span {
        color: #88CC00;
    }
    .icon-btn{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
        width: 80%;
        padding: 20px 20px 20px 40px;
        outline: none;
        border: none;
        font-size: 15px;
        color: #666;
        font-weight: 600;
        margin: 5px 0px;
        border-radius: 5px;
        cursor: pointer;
        text-align: left;
        background-color: rgba(217, 217, 217, 1);
        transition: 0.2s ease-in-out;    

    }
    .icon-btn .text{
        font-size: 16px;
        color: #000;
    }
    .icon-btn:hover{
        background-color: rgba(217, 217, 217, 1);
        transition: 0.2s ease-in-out;
        color:#8c0;
        font-weight: bold  
    }
    .icon-btn:hover .text{
        color: #8c0;
    }


    .settings .active{
        background-color: rgb(136, 204, 0,0.10000000149011612);
        border-left: 10px solid #8c0;
        color: #88cc00;
        font-weight: bolder;
    }
    .settings .active span{
        color: #8c0;
        font-weight: bolder;
    }
</style>