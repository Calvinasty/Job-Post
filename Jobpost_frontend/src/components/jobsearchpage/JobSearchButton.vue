<template>
    <div class="dropdown">
            <span  class="setting">Settings</span>
            <span class="line"></span>
            <span @click="handleLogout">Log Out</span>
    </div>
</template>

<script>
    export default {
        methods:{
            handleLogout(){
                localStorage.clear()
                this.$router.push('/')
            }
        }
    }
</script>

<style lang="css" scoped>
.dropdown{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: rgba(255, 255, 255, 1);
    width: 8%;
    height: fit-content;
    padding: 10px;
    border: 1px solid rgba(144, 144, 144, 1);
    border-radius: 10px;
    position: absolute;
    right: 80px;
    top: 70px;   
    cursor: pointer;
}
button{
    padding: 20px;
    width: 100%;
    border-radius: 5px;
}   
.line{
    width: 100%;
    border: 1px solid rgba(144, 144, 144, 1);

}
span:hover{
    text-decoration: underline;
    transition: 0.5s ease-in-out;
}

</style>