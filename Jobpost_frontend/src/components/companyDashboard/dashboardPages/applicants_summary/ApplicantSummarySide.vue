<template>
    <div v-for="(item, index) in infos" :key="index" class="main-container side">
        <!-- <div class="img">
            <img :src="item.image"  alt="">
            <h2>{{item.name }}</h2>
        </div> -->
        <div class="address">
            <p>{{item.address}}</p>
        </div>
        <div class="contact">
            <ul class="list">
                <li>{{ item.gender}}</li>
                <li>{{ item.age}}</li>
                <li> <a href="mailto:danmcdan@gmail.com">{{item.email}}</a></li>
                <li><a href="linkedin.com/in/daniella-momo">{{item.linkedin}}</a></li>
                <li>{{item.number}}</li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    props: [
        'infos'
    ]
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
    background-color: rgb(231, 213, 213);
    border-radius: 100%;

}
/* .address{
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
} */
</style>