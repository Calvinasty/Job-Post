<template>
    <main>
        <div class="settings">
            <button type="button" :class="{ active:settings[0]?.active}" @click="() => gotoSettings(settings[0].link, index)">
                <span class="material-symbols-outlined">{{ settings[0].icon }}</span>
                {{ settings[0].name }}
            </button>
            <!-- <button type="button">
                <span class="material-symbols-outlined">{{ settings[1].icon }}</span>
                {{ settings[1].name }}
            </button> -->
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
        padding: 0 20px;
        padding-bottom: 20px;
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
        padding: 15px 20px;
        border: none;
        font-size: 15px;
        font-weight: 600;
        margin: 45px 0;
        border-radius: 5px;
        cursor: pointer;
        text-align: left;
        transition: 0.2s ease-in-out;
        background-color: transparent;
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
        border: none;
        display: flex;
        align-items: center;
        gap: 15px;
        transition: 0.2s ease-in-out;
        width: 100%;
        padding: 15px 20px;
        font-size: 15px;
        font-weight: 500;
        border-radius: 5px;
        cursor: pointer;    

    }
    .icon-btn .text{
        font-size: 16px;
        color: #000;
    }
    .icon-btn:hover{
        background-color: rgba(217, 217, 217, 1);
        transition: 0.2s ease-in-out;
        color:#000;
        font-weight: bold  
    }

    .settings .active{
        background-color: #88CC00;
        color: #fff;
        font-weight: bolder;
    }
    .settings .active span{
        color: #fff;
        font-weight: bolder;
    }
</style>