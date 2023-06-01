<template>
    <div class="main-container">
        <div class="img">
            <img src="/images/userprofile.svg" alt="picture">
            <h2>Daniella McDan</h2>
        </div>
        <div class="address">
            <p>Coral Avenue, Hse 3, Tantra 
            Hills, Accra-Ghana. <br> GHA-393-133</p>
        </div>
        <div class="contact">
            <ul class="list">
                <li>Female</li>
                <li>27</li>
                <li> <a href="mailto:danmcdan@gmail.com">danmcdan@gmail.com</a></li>
                <li><a href="linkedin.com/in/daniella-momo">linkedin.com/daniellamcdan</a></li>
                <li>+233254775545</li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.main-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 8px;
    font-size: 8px;
    /* color: rgba(120, 114, 114, 1); */
    /* background-color: aqua; */
}
.img{
    display: flex;
    font-size: 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.img img{
    width: 100px;
    /* border: 1px solid; */
    background-color: rgb(231, 213, 213);
    border-radius: 100%;

}
.address{
    display: flex;
    justify-content: flex-start;
    font-size: 13px;
    color: rgba(120, 114, 114, 1);
    
}
.contact{
    display: flex;
    font-size: 12px;
    color:rgba(120, 114, 114, 1)
}
.list{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    list-style: none;
}
a{
    text-decoration: none;
    color: rgba(120, 114, 114, 1);
}
</style>