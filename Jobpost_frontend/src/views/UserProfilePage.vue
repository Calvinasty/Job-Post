<template>
    <div class="userprofile">




        <section class="user-profile">
            <div class="title">
                <h1>{{ title }}</h1>
            </div>
            <div class="profile">

            </div>
            <div class="btnsec">
                <button class="btn">Save</button>
                <button class="btns">Cancel</button>
            </div>
        </section>

        <FooterComponent />

    </div>
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue';
export default {
    components: {
        FooterComponent,

    },

    data() {
        return {
            title: 'User Profile'
        }
    },

}
</script>

<style lang="css" scoped>
.userprofile {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 50px;
    /* background-color: #367192; */
}

.title {
    padding: 66px 146px;
    font-weight: 600;
    font-size: 50px;
}



























.btnsec {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 57px 0;
    gap: 56px;
    /* background-color: aqua; */
}

.btn {

    border-radius: 8px;
    width: 194px;
    height: 64px;
    font-size: 20px;
    background-color: #040404;
    color: #ffffff;
}

.btns {
    border: 1px solid #878787;
    border-radius: 8px;
    width: 194px;
    height: 64px;
    font-size: 20px;
    background-color: #FFFFFF;
    color: #000000;
}
</style>