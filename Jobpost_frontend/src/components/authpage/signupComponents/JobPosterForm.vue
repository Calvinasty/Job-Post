<template>
    <main>
        <Transition name="slide-fade">
            <form v-if="pageNumber == 0" class=" flex-center">

                <InputComponent class="input" type="text" placeHolder="Organization Name" name="name"
                    :handleInput='handleUserInput' />

                <div class="input-container pass  flex-center-row">
                    <InputComponent class="input" type="password" placeHolder="Enter Password" name="password"
                        :handleInput='handleUserInput' />
                    <InputComponent class="input" type="password" placeHolder="Confirm Password" name="confirmPassword"
                        :handleInput='handleUserInput' />
                </div>
                <InputComponent class="input" type="email" placeHolder="Company Email" name="email"
                    :handleInput='handleUserInput' />

                <InputComponent class="input" type="tel" placeHolder="Company Number" name="phone"
                    :handleInput='handleUserInput' />
                <div class="flex-center input-container verification">
                    <label class="selected" style="width: 100%;text-align: left;" for="verification">How do you want to be
                        verified?</label>
                    <select name="verification" class="verification input" id="verification" v-model="verify"
                        v-on:change="() => handleVerify({ verification: verify })">
                        <option :value="null" disabled></option>
                        <option value="regCert">Registration Certificate /Documents</option>
                        <option value="visit">Physical Visit</option>
                        <option value="vat">VAT</option>
                        <option value="others">Others</option>
                    </select>
                </div>

                <JobPosterFormFooter :pageNum="pageNumber" :loading="loading" actionBtnText="Register" actionBtnType="submit"
                    :handleSignUp="handleSignUp" />
            </form>
        </Transition>
        <Transition name="slide-fade">
            <div v-if="pageNumber == 2"  class="success-form">
                <SignupSuccess :userEmail="comapanyEmail" :handleRoute="handleHome" />
            </div>

        </Transition>
    </main>
</template>

<script>
import InputComponent from '../InputComponent.vue';
import JobPosterFormFooter from './JobPosterFormFooter.vue';

import SignupSuccess from './SignupSuccess.vue';
export default {
    components: { InputComponent, JobPosterFormFooter, SignupSuccess },
    name: 'JobPostJobPosterForm',

    data() {
        return {
        };
    },

    props: [
        'handleSignUp',
        'pageNumber',
        'handleUserInput',
        'handleVerify',
        'userInfo',
        'loading',
        'companyEmail'


    ],

    methods: {
        handleHome() {
            this.$router.push('/admin/analyticsView')
        },
    },
};
</script>

<style lang="css" scoped>
form {
    gap: 16px;
}

.success-form {
    width: 100%;
    background: rgba(255, 255, 255, 1);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
}

.input-container {
    flex: 1;
    width: 100%;
    gap: 19px;
    min-width: 200px;


}

.slide-fade-enter-active {
    transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    transition: all .3s;
}

.selected {
    color: #666;
}

.verification select {
    width: 100%;
    padding: 14px;
    border: 2px solid #7FBF4C;
    border-radius: 5px;
}

.input-container.verification {
    gap: 0px;
}

label {
    font-size: 14px;
}


@media screen and (max-width:786px) {
    .input-container {
        column-gap: 30px;
    }
}

@media screen and (max-width:600px) {
    .auth-container {
        padding: 0;
        background: #fff;
    }

    .input-container {
        flex-wrap: wrap;
    }

    .input-container.pass {
        flex-wrap: nowrap;
    }

}

@media screen and (max-width:480px) {
    .input-container {
        row-gap: 5px;
        padding: 0px 10px;
    }

}
</style>