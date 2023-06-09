<template>
    <form action="" class="card-detail">
        <div class="input-container">

            <EditInputComponent inputName="First Name" name="first_name" inputType="text" :value="userInfo.first_name"
                :handleChange="handleInput" />
        </div>
        <div class="input-container flex-center-row double">
            <EditInputComponent inputName="Middle Name" name="middle_name" inputType="text" :value="userInfo.middle_name"
                :handleChange="handleInput" />
            <EditInputComponent inputName="Last Name" name="last_name" inputType="text" :value="userInfo.last_name"
                :handleChange="handleInput" />
        </div>
        <div class="input-container">
            <EditInputComponent inputName="Email" name="email" inputType="email" :value="userInfo.email"
                :handleChange="handleInput" />
        </div>
        <div class="input-container">
            <EditInputComponent inputName="Contact" name="contact" inputType="tel" :value="userInfo.phone"
                :handleChange="handleInput" />
        </div>
        <div class="input-container flex-center-row double">
            <EditInputComponent inputName="LinkedIn URl" name="linkedIn_url" inputType="text" :handleChange="handleInput" />
            <EditInputComponent inputName="GitHub URL" name="git_url" inputType="text" :handleChange="handleInput" />
        </div>
        <div class="input-container">
            <EditInputComponent inputName="Date of Birth" name="dob" inputType="date"
                :value="userInfo.date_of_birth.split('T')[0]" :handleChange="handleInput" />
        </div>
        <div class="input-container">
            <EditInputComponent inputType="file" name="resume_cv" inputName="Resume CV" :handleChange="handleInput" />
        </div>
        <div class="input-container flex-center-row gender">
            <p>Gender :</p>
            <span>
                <input type="radio" name="gender" id="male" :handleChange="handleInput">
                <label for="male">Male</label>
            </span>
            <span>
                <input type="radio" name="gender" id="female" :handleChange="handleInput">
                <label for="female">Female</label>
            </span>

        </div>
        <div class="btnsec flex-center-row">
            <button class="btn" @click="handleSave">Save</button>
            <button class="btns" @click="handlecloseCard">Cancel</button>
        </div>
    </form>
</template>

<script>
import EditInputComponent from '../EditInputComponent.vue'
export default {
    components: {
        EditInputComponent,
    },

    props: [
        'handlecloseCard',
        'handleSave',
        'userInfo'
    ],

    data() {
        return {
            // personalInfo: {
            //     first_name: '',
            //     middle_name: '',
            //     last_name: '',
            //     email: '',
            //     contact: '',
            //     linkedIn_url: '',
            //     git_url: '',
            //     dob: '',
            //     resume_cv: '',
            //     gender: '',
            // }
        }
    },
    mounted() {
        // this.personalInfo.first_name = this.userInfo?.first_name
        // this.personalInfo.middle_name = this.userInfo?.middle_name
        // this.personalInfo.last_name = this.userInfo?.last_name
        // this.personalInfo.email = this.userInfo?.email
        // this.personalInfo.phone_number = this.userInfo?.phone_number
        // this.personalInfo.dob = this.userInfo?.dob
        // this.personalInfo.gender = this.userInfo?.gender
        // this.personalInfo.first_name=this.userInfo.first_name
        // this.personalInfo.first_name=this.userInfo.first_name
        // this.personalInfo.first_name=this.userInfo.first_name


    },
    methods: {
        handleUpdate() {
            const userPersonalInfo = {
                first_name: this.personalInfo.first_name,
                middle_name: this.personalInfo.middle_name,
                last_name: this.personalInfo.last_name,
                email: this.personalInfo.email,
                contact: this.personalInfo.contact,
                linkedIn_url: this.personalInfo.linkedIn_url,
                git_url: this.personalInfo.git_url,
                dob: this.personalInfo.dob,
                resume_cv: this.personalInfo.resume_cv,
                gender: this.personalInfo.gender,
            }

            console.log(userPersonalInfo)

        }



    },
    handleInput(data) {
        if (data.inputName == 'first_name') {
            this.personalInfo.first_name = data.inputValue

        }
        if (data.inputName == 'middle_name') {
            this.personalInfo.middle_name = data.inputValue

        }
        if (data.inputName == 'last_name') {
            this.personalInfo.last_name = data.inputValue

        }
        if (data.inputName == 'email') {
            this.personalInfo.email = data.inputValue

        }
        if (data.inputName == 'contact') {
            this.personalInfo.contact = data.inputValue

        }
        if (data.inputName == 'linkedIn_url') {
            this.personalInfo.linkedIn_url = data.inputValue

        }
        if (data.inputName == 'git_url') {
            this.personalInfo.git_url = data.inputValue

        }
        if (data.inputName == 'dob') {
            this.personalInfo.dob = data.inputValue

        }
        if (data.inputName == 'resume_cv') {
            this.personalInfo.resume_cv = data.inputValue

        }
        if (data.inputName == 'gender') {
            this.personalInfo.gender = data.inputValue

        }

        console.log(this.personalInfo)

    }
}

</script>

<style lang="css" scoped>
.card-detail {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding-top: 3%;
    /* border: 2px solid aqua; */
    /* padding-bottom: 70px; */
}

.input-container {
    width: 100%;
    padding-left: 200px;
    padding-right: 200px
}

.double {
    gap: 20px;

}

.input-container.gender {
    align-items: flex-start;
    justify-content: flex-start;
    gap: 40px;

    /* background: aqua; */
}

.gender p {
    padding-left: 30px;
}

.gender span {
    display: flex;
    align-items: center;
    justify-content: center;
}

.gender span label {
    margin-left: 8px;

}

.btnsec {
    /* position: absolute; */
    padding-bottom: 20px;
    gap: 20px;
    bottom: 0;
    /* background-color: aqua; */
}

.btnsec>* {
    border: none;
}

.btn {
    border-radius: 8px;
    width: 140px;
    height: 50px;
    font-size: 18px;
    background-color: #88CC00;
    color: #ffffff;
}

.btns {
    border-radius: 8px;
    width: 140px;
    height: 50px;
    font-size: 18px;
    background-color: #000000;
    color: #ffffff;
}


/* .double:nth-child(1) {
    max-width: 50%;
    background: #000;
}

.double:nth-child(2) {
    max-width: 50%;
    background: #000
} */
</style>