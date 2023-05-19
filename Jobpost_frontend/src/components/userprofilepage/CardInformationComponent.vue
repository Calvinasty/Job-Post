<template>
    <div>
        <aside>
            <div>
                <img src="images/edit_icon.svg" alt="editicon">
            </div>
            <div>
                <h3>Personal Information</h3>
                <div>
                    <div>
                        <label for="">Full Name</label>
                        <input type="text">
                    </div>
                    <div>
                        <label for="">Email</label>
                        <input type="text">
                    </div>
                    <div>
                        <label for="">Contact</label>
                        <input type="text">
                    </div>
                    <div>
                        <label for="">Social Media URL</label>
                        <input type="text">
                    </div>
                </div>
            </div>
        </aside>
    </div>
</template>

<script>
export default {
    name: 'JobPostCardInformationComponent',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="css" scoped>
aside {
    border: 2px solid #ededed;

}
</style>