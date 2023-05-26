<template>
    <nav class="navitems flex-center-row">
        <router-link v-for="item in itemList" :to="`${item.link}`" :key="item">
            {{ item.title }}
        </router-link>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            itemList: [
                { title: 'Upload Picture', link: '/userprofile/modal/uploadpicture' },
                { title: 'Personal Information', link: '/userprofile/modal/personalinfo' },
                { title: 'Education History', link: '/userprofile/modal/education' },
                { title: 'Work Experience', link: '/userprofile/modal/experience' },
                { title: 'Skill/Interests', link: '/userprofile/modal/skills' },
            ],
        }
    },
}
</script>

<style lang="css" scoped>
a {
    text-decoration: none;
    color: black;
    font-weight: 600;
    padding-bottom: 10px;
    font-size: 16px;
    border-bottom: 5px solid transparent;
}

a:hover,
.router-link-exact-active {
    border-bottom: 5px solid #88cc00;
    transition: all ease-in-out 0.5ms;
}

.navitems {
    width: 100%;
    gap: 31px;
    border-bottom: 1px solid #C2C2C2;
}
</style>