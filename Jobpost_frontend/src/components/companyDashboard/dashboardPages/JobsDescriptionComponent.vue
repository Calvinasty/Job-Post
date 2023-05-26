<template>
    <div class="main">
        <ul class="table-head">
            <li>Job Description</li>
            <li>Role Type</li>
            <li>Requirements</li>
            <li>Location</li>
            <li></li>
        </ul>

        <ul v-for="(item, index) in myjobs" :key="index" class="table-body">
            <li>{{ item.description }}</li>
            <li>{{ item.role }}</li>
            <li>{{ item.requirements }}</li>
            <li>{{ item.location }}</li>
            <li><span @click="show(item.role)" class="material-symbols-outlined">edit</span></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'JobPostJosDescriptionComponent',
    components: {
    },
    props: [
        'myjobs'
    ],

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {
        show(param) {
            alert(param)
            // console.log(param)
        }

    },
};
</script>

<style lang="css" scoped>
.main {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-top: 20px;
    background: #F4F4F4;
    height: 100%;
    width: 100%;
    /* overflow: scroll; */
    flex: 1;
    padding: 0px 90px 120px 100px;
}
.main ul{
    list-style: none;
}

.table-head {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    padding-top: 30px;
    padding-bottom: 10px;
    /* background-color: aqua; */

}

.table-head li{
    width: 20%;
    margin-left: 50px;
}
.table-body{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-bottom: 1px solid #000;
    padding-top: 15px;
    /* margin-right: 10px; */
    /* background-color: aqua; */
    padding: 10px;
    
}
.table-body li{
    width: 20%;
    margin-left: 50px;
}
.table-body span {
    color: rgba(136, 204, 0, 1);
}
</style>