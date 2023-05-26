<template>
    <div>
        <div class="main">
                <ul class="title">
                    <li>Applicant Name</li>
                    <li>Role Type</li>
                    <li>Requirements</li>
                    <li>Download CV</li>
                    <li></li>
                </ul>

                <ul v-for="(item, index) in applicants" :key="index" class="list-body">
                    <li>{{ item.applicant }}</li>
                    <li>{{ item.role }}</li>
                    <li>{{ item.requirements }}</li>
                    <li>{{ item.download }}</li>
                    <li class="eye-icon">
                        <span v-show="item.edit"  @click="showTip(index)" class="material-symbols-outlined tooltip">visibility</span>
                        <span v-show="!item.edit" @click="hideTip(index)" class="material-symbols-outlined tooltip">visibility_off</span>
                        <p class="hide"  :class="{view:item.edit}">
                            <span>View Applicant</span>
                            <br>
                            <span>Download Resume</span>
                        </p>
                    </li>
                </ul>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    props: [
        'applicants'
    ],

    data() {
        return {
            showtip: '',
            toolVisible: false
        };
    },

    mounted() {
        
        
    },

    methods: {
        showTip(index){
            this.applicants.forEach(element => {
                element['edit']=false        
            });
            this.applicants.map((item,id)=>{
                console.log(item.edit);
                if(id==index){
                        return item.edit=true
                }else{
                   this.hideTip(index)
                }
            })
            this.toolVisible=!this.toolVisible
        },
        
        hideTip(index){
            this.applicants.map((item,id)=>{
                console.log(item.edit);
                if(id==index){
                        return item.edit=true
                }else{
                    return item.edit=false
                }
            })
            this.toolVisible =! this.toolVisible
        }

    },
};
</script>

<style lang="css" scoped>
    .main {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        background: #F5F5F5;
        flex: 1;
        height: 100%;
        padding: 0px 90px 120px 100px;
        /* overflow: scroll; */
    }

    .main ul {
        list-style: none;
        text-align: start;
    }

    .main .title {
        display: flex;
        justify-content: space-around;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: #000000;
        padding-top: 20px;
    }

    .main .title li {
        width: 25%;
        margin-left: 50px;
    }

    .main .list-body {
        display: flex;
        justify-content: space-around;
        line-height: 27px;
        color: #000000;
        border-bottom: 1px solid #000;
        row-gap: 10px;
        padding-top: 15px;
    }

    .list-body li {
        width: 25%;
        margin-left: 50px;
    }

    .list-body span {
    color: rgba(136, 204, 0, 1);
    }

    .eye-icon {
        position: relative;
        cursor: pointer;
    }
    .hide{
        display: none;
    }
    .hide.view {
        display: block;
        background: #FFFFFF;
        border: 1px solid #919191;
        text-align: center;
        position: absolute;
        width: 100%;
        left: 30px;
        bottom: 5px;
        z-index: 10;
    }

    .hide.view span {
        color: #7D7474;
    }

</style>