<template>
    <div>
        <div class="main">
            <table class="table">
                <thead>
                    <th>Job Description</th>
                    <th>Role Type</th>
                    <th>Requirements</th>
                    <th>Location</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in myjobs" :key="index">
                        <td>{{ item.description }}</td>
                        <td>{{ item.role }}</td>
                        <td>{{ item.requirements }}</td>
                        <td>{{ item.location }}</td>
                        <td><span @click="show(item.role)" class="material-symbols-outlined">edit</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import DashBoardWelcome from './DashBoardWelcome.vue';
export default {
    name: 'JobPostJosDescriptionComponent',
    components: {
        DashBoardWelcome
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
            console.log(param)
        }

    },
};
</script>

<style lang="css" scoped>

.main{
    display: flex;
    justify-content: center;
    align-content:center;
    font-size: 20px;
    gap: 100px;
    padding: 30px;
    padding-top: 30px;
    background-color: aqua;
}

.table {
    padding: 80px;
    border: 1px solid blue;
}
.table thead{
    column-gap: 10px;
}
</style>