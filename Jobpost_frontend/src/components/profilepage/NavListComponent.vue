<template>
    <nav class="navitems flex-center-row">
        <router-link v-show="type=='user'" v-for="(item, index) in itemList" to="" @click="handleClick(item, index)" :key="item"
            :class="{ active: item.active }">
            {{ item.title }}
        </router-link>

        <router-link v-show="type=='company'" v-for="(item, index) in companyNav" to="" @click="handleClick(item, index)" :key="item"
            :class="{ active: item.active }">
            {{ item.title }}
        </router-link>
    </nav>
</template>

<script>
import { mapActions } from "pinia";
import { useUserProfileStore } from '../../stores/userprofile'
export default {
    data() {
        return {
            itemList: [
                { title: 'Upload Picture', active: true, link: 'UploadPicture' },
                { title: 'Personal Information', active: false, link: 'PersonalInfo' },
                { title: 'Education History', active: false, link: 'EducationHistory' },
                { title: 'Work Experience', active: false, link: 'WorkExperience' },
                { title: 'Skill/Interests', active: false, link: 'SkillInterest' },
            ],
            companyNav: [
                { title: 'Upload Picture', active: true, link: 'UploadCompanyPicture' },
                { title: 'Company Information', active: false, link: 'CompanyInformation' },
                { title: 'Registration Information', active: false, link: 'RegistrationInfo' },
                { title: 'Location', active: false, link: 'CompanyLocation' },
            ]
        }
    },
    props: [
        'type'
    ],
    methods: {
        ...mapActions(useUserProfileStore, ['setNav','setNav2']),
        handleClick(item, itemIndex) {
            this.type == 'user' ? this.setNav(item.link): this.setNav2(item.link)

            if(this.type=='user') {
                Object.keys(this.itemList).forEach((key, index) => {
                if (itemIndex !== index) {
                    this.itemList[key].active = false
                }
                else {
                    this.itemList[key].active = true
                }
                })
            }
            
            if(this.type=='company') {
                Object.keys(this.companyNav).forEach((key, index) => {
                if (itemIndex !== index) {
                    this.companyNav[key].active = false
                }
                else {
                    this.companyNav[key].active = true
                }
                })
            }
            
        }
    }
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
.active {
    border-bottom: 5px solid #88cc00;
    transition: all ease-in-out 0.5ms;
}

.navitems {
    width: 100%;
    gap: 31px;
    border-bottom: 1px solid #C2C2C2;
}
</style>