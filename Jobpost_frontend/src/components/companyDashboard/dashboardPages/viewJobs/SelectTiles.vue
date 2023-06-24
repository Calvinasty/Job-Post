<template>
    <div class="container" 
        @click="
            navItem.link=='pending'
            ? handleSelectLocal(navItem.link, navIndex) 
            : navItem.link=='accepted'
            ? handleSelectLocal(navItem.link, navIndex) 
            : navItem.link=='declined'
            ? handleSelectLocal(navItem.link, navIndex) 
            : handleClick(navItem.link)
        " 
        :class="{
            pending:(navItem.link=='pending'), accepted:(navItem.link=='accepted'), declined:(navItem.link=='declined'), 
            activePending: navItem.active, activeAccepted: navItem.active, activeDeclined: navItem.active 
        }"
    >
        {{ navItem.name }}
        <span class="material-symbols-outlined icon"> {{ navItem.icon }} </span>
    </div>
</template>

<script>
    export default {
        props:['navItem', 'navIndex', 'status', 'handleClick', 'handleSelect'],
        data(){
            return{
                localStatus: ''
            }
        },
        mounted(){
            // this.localStatus = this.status.toLowerCase()
        },
        methods:{
            handleSelectLocal(link, navIndex){
                if(!this.navItem.active){
                    if(confirm(`${link.toUpperCase()}: Are you sure of this action`))
                        this.handleSelect(navIndex)
                    else return
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
    .container.pending{ background-color: #dcd40ecc; transition: 0.1s; }
    .container.pending:hover, .container.pending.activePending{ background-color: #fff; color: #000; font-weight: bold; border: 1px solid #dcd40ecc; border-left: 10px solid #dcd40ecc; transition: 0.3s; }
    .container.pending:hover .icon, .container.pending.activePending .icon{ display: block; color: #dcd40ecc; right: 20px; transition: 1s; }
    /* accepted */
    .container.accepted{ background-color: #8C0; transition: 0.1s; }
    .container.accepted:hover, .container.accepted.activeAccepted{ background-color: #fff; color: #000; font-weight: bold; border: 1px solid #8C0; border-left: 10px solid #8C0; transition: 0.3s; }
    .container.accepted:hover .icon, .container.accepted.activeAccepted .icon{ display: block; color: #8C0; right: 20px; transition: 1s; }
    /* declined */
    .container.declined{ background-color: #d81a1acc; transition: 0.1s; }
    .container.declined:hover, .container.declined.activeDeclined{ background-color: #fff; color: #000; font-weight: bold; border: 1px solid #d81a1acc; border-left: 10px solid #d81a1acc; transition: 0.3s; }
    .container.declined:hover .icon, .container.declined.activeDeclined .icon{ display: block; color: #d81a1acc; right: 20px; transition: 1s; }
</style>