<template>
    <div class="flex-center container" v-if="show">
       
        <div class="flex-center alert-card">
            <span class="close" @click="handleClose">x</span>
            <p>SignIn or SignUp to Apply</p>
        <span class="flex-center-row">

            <button @click.prevent="()=>handleRoute('/auth/login')">SignIn</button>
            <button @click.prevent="()=>handleRoute('/auth')">SignUp</button>
        </span>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'JobPostSignInSignUpToApply',
    props:['show','handleClose'],

    data() {
        return {
            
        };
    },

    mounted() {
        
    },
    methods: {
        handleRoute(route){
            this.$router.push(`${route}`)
        }
    },
};
</script>

<style lang="css" scoped>
.container{
background: #00000071;
position: absolute;
top: 0px;
justify-content: flex-start;
left: 0;
width: 100%;
height: 100vh;
padding-top: 20vh;
}
.alert-card{
    width: 250px;
    max-width: 429px;   
        background: #FFF;
        height: 183px;
        border-radius: 10px;
        padding: 20px;
        gap:20px;
        
        transition: .2s ease-in-out;
        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.568);
        position:relative;
        z-index: 1;
}
.close{
    position: absolute;
    top:5px;
    right: 5px;
    width: 15%;
    font-size: 25px;
    font-weight: 600;
    padding: 2px;
    color:#88CC00;
    cursor: pointer;
    /* color: #FFF; */
    text-align: center;
}
/* div::before{
    content:"" ;
    position: absolute;
    z-index:-2;
    height: 200vh;
    width:100dvw;
    background: #0000003c;
} */
span{
    width: 100%;
    justify-content: space-around;
}
button{
    background: #88CC00;
    cursor: pointer;
    color: #FFF;
    padding: 5px 10px ;
    border: none;

}
</style>