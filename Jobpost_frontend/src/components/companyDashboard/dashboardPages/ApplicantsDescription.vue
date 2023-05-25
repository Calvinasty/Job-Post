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
                    <li><span @click="show(item.role)" class="material-symbols-outlined">edit</span></li>
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

        };
    },

    mounted() {

    },

    methods: {
        show(param) {
            alert(param)
            console.log(param)
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
        height: 83dvh;
        padding: 0px 90px 0px 100px;
        overflow: scroll;
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

</style>