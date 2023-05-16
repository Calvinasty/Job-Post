<template>
    <section class="reg-flow">
        <RegflowCard :icon="regFlowData[0].icon" :regText="regFlowData[0].text" />
        <span class="line"></span>
        <RegflowCard :icon="regFlowData[1].icon" :regText="regFlowData[1].text" />
        <span class="line"></span>
        <RegflowCard :icon="regFlowData[2].icon" :regText="regFlowData[2].text" />
    </section>
</template>

<script>
import RegflowCard from './RegflowCard.vue';
export default {
    components: {
        RegflowCard
    },
    data() {
        return {
            regFlowData: [
                {
                    icon: 'images/user_icon.svg',
                    text: 'Register Account'
                },
                {
                    icon: 'images/register_icon.svg',
                    text: 'Upload Your Resume'
                },
                {
                    icon: 'images/apply_icon.svg',
                    text: 'Apply for Dream Job'
                }
            ]
        }
    }
}
</script>

<style lang="css" scoped>
.reg-flow {
    display: flex;
    width: 80%;
    max-width: 1460px;
    align-items: center;
    justify-content: space-evenly;
    padding: 2rem;
    max-height: 287px;
    background-image: url(/images/regflow-img.jpg);
    background-position: center;
    background-size: cover;
    background-color: rgba(51, 81, 33, 0.73);
    background-blend-mode: overlay;
}

.line {
    display: block;
    width: 10%;
    height: 2px;
    background: rgba(255, 255, 255, 1);
}
</style>