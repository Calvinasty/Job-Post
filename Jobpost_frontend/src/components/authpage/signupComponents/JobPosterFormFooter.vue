<template>
    
        <div @click.prevent="" class=" buttons flex-center">
            <!-- <button v-if="pageNum==1"  v-on:click.prevent="()=>pageNavigation('back')" class="flex-center-row">
                <span class="material-symbols-outlined" style="transform: rotate(180deg);">arrow_right_alt</span>
                Back 
            </button> -->
            <button :type="actionBtnType" v-on:click.prevent="handleSignUp" class="flex-center-row" style="justify-content:center;">
                {{ actionBtnText }} 
                <span class="material-symbols-outlined loading" v-show="loading"> cached </span>
            </button>

            <p v-if="pageNum==0"><span>Already registered?</span> <router-link :to="{name:'Auth', params:{id:'login'}}">Sign in</router-link></p>
        </div>
        <!-- <div class="oauth flex-center-row" v-if="pageNum==0">
            <button @click.prevent="" type=""   class="flex-center-row">
                <img src="/images/social-google.svg" alt="google">
                <span>Sign up with Google</span>
            </button>
            <span class="or">OR</span>
            <button @click.prevent="" type="" class="flex-center-row">
                <img src="/images/social-linkedin.svg" alt="linkedin">
                <span>Sign up with LinkedIn</span>
            </button>            
        </div> -->
    
</template>
<script>
export default {
   props:[
        'actionBtnText',
        'actionBtnType',
        'handleSignUp',
        'pageNum',
        'loading'
   ],

}
</script>
<style lang="css" scoped>
.oauth img{ height: 20px; width: auto;}
.buttons{
    width: 100%;
    gap:31px;
    padding:20px 0px;
    border-bottom: 2px solid #D9D9D9;
}
.buttons a{ color:#7FBF4C; text-decoration: none;}
.buttons p span{
    margin-right: 5px;
}
.buttons button ,.oauth button{
    justify-content: flex-start;
    padding: 15px 40px;
    border-radius: 10px;
    width: 100%;
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
.loading{
    transform: rotate(300deg);
    animation: spin 1s infinite;
}
@keyframes spin {
    0% {transform: rotate(0deg);}
    25% {transform: rotate(90deg);}
    50% {transform: rotate(180deg);}
    75% {transform: rotate(270deg);}
    100% {transform: rotate(360deg);}
}
.oauth >span{font-size:1.5rem; font-weight: 700;}
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