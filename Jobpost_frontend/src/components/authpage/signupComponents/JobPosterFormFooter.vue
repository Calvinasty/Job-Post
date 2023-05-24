<template>
    <div>
        <div class="buttons flex-center-row">
            <button :type="actionBtnType" v-on:click="()=>pageNavigation(actionBtnText)" class="flex-center-row">
                {{ actionBtnText }} <span class="material-symbols-outlined">arrow_right_alt</span>
            </button>
            <p><span>Already registered?</span> <router-link :to="{name:'Auth', params:{id:'login'}}">Sign in</router-link></p>
        </div>
        <div class="oauth flex-center-row">
            <button @click.prevent="" type=""   class="flex-center-row">
                <img src="/images/social-google.svg" alt="google">
                <span>Sign up with Google</span>
            </button>
            <span>OR</span>
            <button @click.prevent="" type="" class="flex-center-row">
                <img src="/images/social-linkedin.svg" alt="linkedin">
                <span>Sign up with LinkedIn</span>
            </button>
           
        
            
        </div>
    </div>
</template>
<script>
export default {
   props:[
        'actionBtnText',
        'actionBtnType',
        'pageNavigation'
   ],

}
</script>
<style lang="css" scoped>
.oauth img{ height: 35px; width: auto;}
.buttons{
    width: 100%;
    gap:31px;
    padding:20px 0px;
    border-bottom: 2px solid #D9D9D9;
}
.buttons a{ color:#7FBF4C; text-decoration: none;}
.buttons button ,.oauth button{
    justify-content: flex-start;
    padding: 15px 40px;
    border-radius: 10px;
    width: 195px;
    border: none;
    background-color: #7FBF4C;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    transition:all .3s ease;
    
}
.buttons button:hover{
    background-color: #6c934c;

}
.oauth button:hover{
    background:#D9D9D9
    
}

.oauth{
    justify-content: space-evenly;
    width: 100%;
    padding:10px 5px;
}
.oauth >span{font-size:2rem; font-weight: 700;}
.oauth button{
    background: transparent;
    color: #000;
    border: 2px solid #7FBF4C;
    justify-content: space-between;
    padding: 5px;
    font-size: 10px;
    font-weight:700px;
    width: fit-content;
    gap: 10px;
}

@media screen and (max-width:786px) {
    .buttons button{
        padding: 15px 20px;
        border-radius: 10px;
        width: 120px;
        cursor: pointer;
}
    
}
@media screen and (max-width:600px) {
.buttons {  padding: 5px;}
.buttons p span{display: block;}
.oauth{    display: none;   }

}

</style>