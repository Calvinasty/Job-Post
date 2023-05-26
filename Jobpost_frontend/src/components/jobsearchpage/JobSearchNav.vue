<template>
    <div class="container">
        <div class="logo">
            <img src="/images/logo.svg" alt="logo">
        </div>
        <span>
            <div class="search-bar">
                <i class="fa fa-fw fa-search"></i> 
                <input  type="text" v-model="searchInput" v-on:change="()=>handleSearch({data:searchInput})" placeholder="Search for job post,company,location"> 
            </div>
        <div class="btn">
            <span>CK</span>
        </div>
        </span>
        <div class="btn mobile">
            <span>CK</span>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'handleSearch'
    ]

}
</script>

<style lang="css" scoped>
.container {
    background-color: #F9F8F8;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    width: 100%;
    gap: 100px;
    padding:20px 50px;
    width: 100dvw;
    gap: 10px;    
}
.container >span{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
}

.logo {
     display: flex; 
    justify-content: flex-start;
    align-items: center;
    padding: 0px; 
    position: relative;
}
.logo img{

    padding: 0px;
    width: 50px;
}

.search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    padding:5px;
    border-radius: 50px;
    padding: 8px 0px 8px 25px;
    background-color:#ffffff;
}


.search-bar input {
    padding: 10px;
    flex: 1;
    width: 100%;
    border: none;
    outline: none;
    border-radius: 30px;
}
.search-bar input::placeholder{
    color: #000;
    font-weight: 200;
    font-size: 13px;
}
.btn {
    padding: 12px;  
    display: flex;
    padding: 12px;
    align-items: center;
    border-radius: 30px;
    width: 50px;
    height: 50px;
    /* gap: 50px; */
    background-color: #88CC00;
    margin-left: 50px;
    justify-content: center;
    
}
.btn.mobile{
    display: none;
}
@media screen and (min-width:871px) {
    .container{
        padding:20px 124px;
    }
   
    .btn{
        margin-left: 124px;
    }
}

@media screen and (max-width:685px) {
    .container {
    justify-content: space-between;
    width: 100%;
    padding: 20px;
}
.search-bar {
    display: flex;
    justify-content:flex-start;
    align-items: center;
    width: 100%;
    border-radius: 50px;
    /* padding: 8px 0px 8px 25px; */
}
.search-bar input {
    
}
.logo img{
padding: 0px;
width: 30px;
}
.search-bar input::placeholder{
  
    font-size: 10px;
}
    .btn{display: none;}
    .btn.mobile{
        display: flex;
        margin-left: 0px;
        width: 30px;
        height: 30px;
        font-size: 12px;
    }
   

}
@media screen  and (max-width:355px){
    .search-bar input::placeholder{
         font-size: 8px;}
}

</style>