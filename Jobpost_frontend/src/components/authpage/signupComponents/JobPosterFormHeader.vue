<template>
    
    <header class="flex-center">
        <div class="image-box">
            <span class="material-symbols-outlined back-arrow" @click="$router.back()"> west</span>
            <img src="/images/logo.png" alt="logo">
        </div>
        <span>
            <span style="text-align: center;">
                <h1>Sign Up</h1>
                <h3>Create an account as an Employer</h3>
            </span>
            <span v-if="pageNum==0" class="mobile-oauth">
                <img src="/images/social-linkedin.svg" alt="linkedin">
                <img src="/images/social-google.svg" alt="google">
            </span>
        </span>
    </header>
   
</template>
<script>
export default {
    props:['pageNum']
}
</script>

<style lang="css" scoped>
.image-box {
    display: flex;
    align-items: center;
    justify-content: center;

}
.back-arrow {
    color: #7FBF4C;
    position: absolute;
    left: 0;
    font-size: 30px;
    font-weight: bolder;
    cursor: pointer;
}

h1{ color: #7FBF4C; font-size: 20px;}
h3{ margin-bottom: 30px; font-size: 13px;}
header{ 
    row-gap:20px;
    position: relative;
}
header img{ height: 35px; width: auto;}
h3{ margin-top: 10px; color: rgba(125, 116, 116, 1);}
@media screen and (max-width:600px) {

header{ row-gap:10px;  padding-top: 5px;}

 h3{ margin-bottom:0px; }

header >span{
    width:100%;
    margin-bottom:15px;
    display: flex;
    align-items: center;
    justify-content:space-around;
    padding:5px;
}
.mobile-oauth img{
    margin-left:10px;
    width:20px;
    cursor: pointer;
}

}

@media screen and (min-width:600px){
    .mobile-oauth{ display:none; }
}

</style>