<template>
    <div>
        <ul>
            <router-link to="" v-for="(navItem, index) in navItems" @click="setNav(index)"
                :class="{ active: navItem?.active }" :key="index">
                <li>
                    {{ navItem.navName }}
                </li>
            </router-link>
        </ul>
    </div>
</template>

<script>
import { useDashboardStore } from '../../../stores/dashboard';
import { mapActions } from 'pinia'
export default {
    data() {
        return {
            navItems: [
                { navName: 'Details', active: true },
                { navName: 'Job Type', active: false },
                { navName: 'Salary Range', active: false },
                { navName: 'Recruiter Details', active: false },
            ]
        }
    },
    computed: {
    },
    methods: {
        ...mapActions(useDashboardStore, ['setNext']),
        setNav(num) {
            this.setNext(num)
            Object.keys(this.navItems).forEach((key, index) => {
                if (index == num)
                    this.navItems[key].active = true
                else
                    this.navItems[key].active = false
            })
        }
    }
}
</script>

<style lang="css" scoped>
ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    padding: 0px;
    border-bottom: 0.5px solid #666;
}

ul a {
    text-decoration: none;
    color: #000;
    font-size: 15px;
    font-weight: 600;
    padding-bottom: 5px;
    /* margin-bottom: -3px; */
}

ul a.active {
    border-bottom: 5px solid #88CC00;
    transition: 0.5s;
    transform: translateX(-10px);
}</style>