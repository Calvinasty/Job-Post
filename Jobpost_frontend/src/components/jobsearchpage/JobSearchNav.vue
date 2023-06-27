<template>
    <div class="container">
        <div class="logo">
            <img src="/images/logo.png" alt="logo" @click="handleHome">
        </div>
        <span>
            <div class="search-bar">
                <i class="fa fa-fw fa-search"></i>
                <input type="text" v-model="searchInput" v-on:change="() => handleSearch({ data: searchInput })"
                    placeholder="Search for job post,company,location">
            </div>
            <div class="btn" v-show="userExist" @click="showDropdown">
                <span> <span class="material-symbols-outlined"> person </span> </span>
            </div>
        </span>
        <div class="btn mobile" v-show="userExist" @click="showDropdown">
            <span> <span class="material-symbols-outlined"> person </span> </span>
        </div>

        <Transition name="slide-fade">
            <JobSearchButton v-show="show" />
        </Transition>

    </div>
</template>

<script>
import { mapState } from 'pinia'
import { useUserStore } from '../../stores/users';
import JobSearchButton from './JobSearchButton.vue';
export default {
    components: {
        JobSearchButton
    },

    data() {
        return {
            show: false,
            userExist: false
        }
    },

    props: [
        'handleSearch'
    ],
    computed: {
        ...mapState(useUserStore, ['email'])
    },
    mounted() {
        const userToken = JSON.parse(localStorage.getItem('userToken'))
        const companyToken = JSON.parse(localStorage.getItem('companyToken'))
        if (userToken || companyToken) {
            this.userExist = true
        }
    },
    methods: {

        handleHome() {
            this.$router.push('/')
        },

        showDropdown() {
            this.show = !this.show
        }
    },



}
</script>

<style lang="css" scoped>
.container {
    background-color: #F9F8F8;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 100px;
    padding: 20px 50px;
    gap: 10px;
}

.container>span {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
}

.dropdown {
    /* transition: 3s; */
    /* transition-delay: 1s; */
}

.logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0px;
    position: relative;
    /* cursor: pointer; */
}

.logo img {
    padding: 0px;
    max-width: 200px;
    cursor: pointer;

}

.search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    padding: 5px;
    border-radius: 50px;
    padding: 8px 0px 8px 25px;
    background-color: #ffffff;
}


.search-bar input {
    padding: 10px;
    flex: 1;
    width: 100%;
    border: none;
    outline: none;
    border-radius: 30px;
}

.search-bar input::placeholder {
    color: #000;
    font-weight: 200;
    font-size: 13px;
}

.btn {
    padding: 12px;
    display: flex;
    padding: 12px;
    align-items: center;
    border-radius: 30px;
    width: 50px;
    height: 50px;
    /* gap: 50px; */
    background-color: #88CC00;
    margin-left: 50px;
    justify-content: center;
    cursor: pointer;
    transition: 1s ease-in;

}

.btn.mobile {
    display: none;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

@media screen and (min-width:871px) {
    .container {
        padding: 20px 124px;
    }

    .btn {
        margin-left: 124px;
    }

}

@media screen and (max-width:685px) {
    .container {
        justify-content: space-between;
        width: 100%;
        padding: 20px;
    }

    .search-bar {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        border-radius: 50px;
        /* padding: 8px 0px 8px 25px; */
    }

    .search-bar input {}

    .logo img {
        padding: 0px;
        max-width: 70px;
    }

    .search-bar input::placeholder {

        font-size: 10px;
    }

    .btn {
        display: none;
    }

    .btn.mobile {
        display: flex;
        margin-left: 0px;
        width: 30px;
        height: 30px;
        font-size: 12px;
    }


}

@media screen and (max-width:355px) {
    .search-bar input::placeholder {
        font-size: 8px;
    }

    .logo img {
        max-width: 100px;
    }

}</style>