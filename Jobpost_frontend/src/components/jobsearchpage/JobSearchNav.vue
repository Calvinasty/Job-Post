<template>
    <div class="container">
        <div class="logo">
            <img src="/images/mn_logo.png" alt="logo">
        </div>
        <div class="search-bar">
            <!-- <form class="search-bar">
                <button type="submit"><i class="fa fa-search"></i></button>
            </form> -->
            <span> <i class="fa fa-fw fa-search"></i> <input  type="text" value=""
                    placeholder="Search for a job post. company. location"> </span>
            <!-- <button>CK</button> -->
        </div>
        <div class="btn">
            <span>CK</span>
        </div>



    </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.container {
    background-color: #F9F8F8;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 100%;
    gap: 10px;
    
}

.logo {
     display: flex; 
    justify-content: flex-start;
    align-items: center;
    padding: 0px; 
    /* width: 20%; */
    background-color: blueviolet;
}
.logo img{
    position: absolute;
    padding: 0px;
    width: 150px;
    height: 120px;
    left: 50px;
}

.search-bar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 60%;
    padding:5px;
    


}

.search-bar span {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    border-radius: 30px;
    padding: 8px 0px 8px 25px;
    background-color: white;
    /* background-color: aqua; */
   
 }

.search-bar span input {
    padding: 10px;
    /* cursor: pointer; */
    width: 350px;
    border: none;
    outline: none;
    border-radius: 30px;

}
.btn {
    padding: 12px;
    align-items: center;
    border-radius: 30px;
    width: 50px;
    height: 50px;
    background-color: #88CC00;
}
</style>