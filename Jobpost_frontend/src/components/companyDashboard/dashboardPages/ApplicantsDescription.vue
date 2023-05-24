<template>
    <div>
        <div class="main">
                <ul>
                    <li>Applicant Name</li>
                    <li>Role Type</li>
                    <li>Requirements</li>
                    <li>Download CV</li>
                </ul>

                <ul>
                    <li v-for="(item, index) in applicants" :key="index">
                        <td>{{ item.applicant }}</td>
                        <td>{{ item.role }}</td>
                        <td>{{ item.requirements }}</td>
                        <td>{{ item.download }}</td>
                        <td><span @click="show(item.role)" class="material-symbols-outlined">edit</span></td>
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


</style>