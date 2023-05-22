<template>
    <div class="container">
        <div class="logo">
            <img src="/images/logo.png" alt="logo">
        </div>
        <span>
            <div class="search-bar">
                <i class="fa fa-fw fa-search"></i> 
                <input  type="text" value="" placeholder="Search for job post,company,location"> 
        </div>
        <div class="btn">
            <span>CK</span>
        </div>
        </span>
    </div>
</template>

<script>
export default {

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
    width: 150px;
}

.search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    padding:5px;
    border-radius: 50px;
    padding: 8px 0px 8px 25px;
    background-color: white;
}


.search-bar input {
    padding: 10px;
    flex: 1;
    /* cursor: pointer; */
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
@media screen and (min-width:871px) {
    .container{
        padding:20px 124px;
    }
    /* .search-bar{
        min-width: 595px;
    } */
    .btn{
        margin-left: 124px;
    }
}
</style>