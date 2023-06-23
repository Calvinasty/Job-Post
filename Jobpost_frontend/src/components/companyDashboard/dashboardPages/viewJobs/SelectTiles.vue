<template>
    <div class="container" 
        @click="
            navItem.link=='pending'
            ? handleSelect(navItem.link) 
            : navItem.link=='accepted'
            ? handleSelect(navItem.link) 
            : navItem.link=='declined'
            ? handleSelect(navItem.link) 
            : handleClick(navItem.link)
        " 
        :class="{
            pending:(navItem.link=='pending'), accepted:(navItem.link=='accepted'), declined:(navItem.link=='declined'), 
            activePending: (activeStatus=='pending'), activeAccepted: (activeStatus=='accepted'), activeDeclined: (activeStatus=='declined') 
        }"
    >
        {{ navItem.name }}
        <span class="material-symbols-outlined icon"> {{ navItem.icon }} </span>
    </div>
</template>

<script>
    export default {
        props:['navItem', 'handleClick'],
        data(){
            return{
                activeStatus: ''
            }
        },
        methods:{
            handleSelect(link){
                if(confirm(`${link.toUpperCase()}: Are you sure of this action`)){
                    this.activeStatus = link
                }else{
                    return
                }
            }
        }
    }
</script>

<style lang="css" scoped>
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        color: #FFF;
        background: #8C0;
        width: 50%;
        padding: 30px;
        cursor: pointer;
        border-radius: 20px; 
        position: relative;
    }
    .container > span{
        position: absolute;
        right: 0px;
        font-size: 50px;
        color: transparent;
    }
    .container:hover{
        background-color: transparent;
        color: #000;
        border: 1px solid #8C0;
        border-left: 10px solid #8C0;
        background-color: #fff;
        font-weight: bold;
        transition: 0.3s;
    }
    /* pending */
    .container.pending{ background-color: #dcd40ecc; }
    .container.pending:hover, .container.activePending{ background-color: #fff; color: #000; font-weight: bold; border: 1px solid #dcd40ecc; border-left: 10px solid #dcd40ecc; }
    .container.pending:hover .icon, .container.activeAccepted .icon{ display: block; color: #dcd40ecc; right: 20px; transition: 1s; }
    /* accepted */
    .container.accepted{ background-color: #8C0; }
    .container.accepted:hover, .container.activeAccepted{ background-color: #fff; color: #000; font-weight: bold; border: 1px solid #8C0; border-left: 10px solid #8C0; }
    .container.accepted:hover .icon, .container.activeAccepted .icon{ display: block; color: #8C0; right: 20px; transition: 1s; }
    /* declined */
    .container.declined{ background-color: #d81a1acc; }
    .container.declined:hover, .container.activeDeclined{ background-color: #fff; color: #000; font-weight: bold; border: 1px solid #d81a1acc; border-left: 10px solid #d81a1acc; }
    .container.declined:hover .icon,  .container.activeDeclined .icon{ display: block; color: #d81a1acc; right: 20px; transition: 1s; }



</style>