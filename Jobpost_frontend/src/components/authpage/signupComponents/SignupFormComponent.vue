<template>
    <form @submit.prevent="handleRegister()" v-if="next !== 2">
        <Transition name="slide-fade">
            <div v-if="next == 0" class="first">
                <div v-if="screen=='desktop'" class="headers">
                    <img src="/images/logo.png" alt="logo">
                    <h1 v-html="form1header"></h1>
                    <h3 v-html="form1sub"></h3>
                </div>

                <h1 v-if="screen=='mobile'" v-html="form1header"></h1>
                <h3 v-if="screen=='mobile'" v-html="form1sub"></h3>

                <InputComponent label="First Name" type="text" name="fname" />
                <aside class="other-names">
                    <InputComponent label="Middle Name" type="text" name="mdname" />
                    <InputComponent label="Last Name" type="text" name="lname" />
                </aside>
                <InputComponent label="Email" type="email" name="email" />
                <InputComponent label="Password" type="password" name="password" />
                <InputComponent label="Confirm Password" type="password" name="confirmPass" />

                <button type="button" @click="setNext(1)">
                    Continue <span class="material-symbols-outlined">arrow_right_alt</span>
                </button>
                <span v-if="screen == 'desktop'" class="progress">
                    <span></span>
                    <span></span>
                </span>
            </div>
        </Transition>

        <Transition name="slide-fade">
            <div v-if="next == 1" class="second">
                <div v-if="screen == 'desktop'" class="headers">
                    <img src="/images/logo.png" alt="logo">
                    <h1 v-html="form2header"></h1>
                    <h3 v-html="form2sub"></h3>
                </div>

                <h1 v-if="screen=='mobile'" v-html="form1header"></h1>
                <h3 v-if="screen=='mobile'" v-html="form1sub"></h3>

                <InputComponent label="Select Date of Birth" type="date" name="date" />
                <span>
                    <label for="fname">Gender</label>
                    <select name="gender" id="gender">
                        <option value="default">Select Your Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                </span>
                <InputComponent label="Select your profile picture (optional)" type="file" name="profile" />

                <button type="submit">
                    SignUp <span class="material-symbols-outlined">how_to_reg </span>
                </button>

                <!-- Back button -->
                <button class="prev-btn" type="button" @click="setPrev(0)">
                    <span class="material-symbols-outlined"> arrow_back_ios_new</span> Back
                </button>
                <!-- Progress indicator -->
                <span v-if="screen == 'desktop'" class="progress progress-2">
                    <span></span>
                    <span></span>
                </span>
            </div>
        </Transition>
    </form>
</template>

<script>
import InputComponent from '../InputComponent.vue';
export default {
    components:{InputComponent},
    props: [
        "screen",
        "next",
        "form1header",
        "form1sub",
        "form2header",
        "form2sub",
        "setNext",
        "setPrev",
        "handleRegister",
        "handleHome"
    ]
}
</script>

<style lang="css" scoped>
@import '../../../assets/auth_assets/signup_js_mobile.css';
</style>