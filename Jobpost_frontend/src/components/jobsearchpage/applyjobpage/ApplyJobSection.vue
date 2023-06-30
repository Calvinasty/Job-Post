<template>
    <div class="apply-section flex-center">
        <h2>
            {{ title }}
        </h2>
        <div class="general-info ">
            <form v-show="!applied" class="flex-center">
                <h3>General Information</h3>
                <ApplyInputComponent :id="inputInfo[0].id" :input-name="inputInfo[0].inputName"
                    :input-type="inputInfo[0].inputType" :label="inputInfo[0].label" :placeholder="inputInfo[0].placeholder"
                    :value="inputValues?.first_name?.toUpperCase()" />

                <ApplyInputComponent :id="inputInfo[1].id" :input-name="inputInfo[1].inputName"
                    :input-type="inputInfo[1].inputType" :label="inputInfo[1].label" :placeholder="inputInfo[1].placeholder"
                    :value="inputValues?.last_name?.toUpperCase()" />

                <ApplyInputComponent :id="inputInfo[2].id" :input-name="inputInfo[2].inputName"
                    :input-type="inputInfo[2].inputType" :label="inputInfo[2].label" :placeholder="inputInfo[2].placeholder"
                    :value="inputValues?.phone" />

                <ApplyInputComponent :id="inputInfo[3].id" :input-name="inputInfo[3].inputName"
                    :input-type="inputInfo[3].inputType" :label="inputInfo[3].label" :placeholder="inputInfo[3].placeholder"
                    :value="inputValues?.email" />

                <ApplyInputComponent id="cover-letter" input-name="cover-letter" input-type="file" label="Cover Letter"
                    file-types=".pdf,.docx" :show="true" :handleInput="handleInput">
                    <textarea name="cover-letter" id="cover-letter" value='' style="width: 100%; padding: 5px;" cols="30"
                        rows="" placeholder=" paste / type cover letter here"
                        v-on:change="() => handleInput({ id: 'cover-letter' })">

                </textarea>
                </ApplyInputComponent>

                <div class="cv flex-center">
                    <ApplyInputComponent fileTypes=".pdf,.docx" id="cv" inputName="cv" inputType="file" label="CV/Resume"
                        placeholder="cv" :handleInput="handleInput" />

                    <button class="apply-job-btn flex-center-row" type="button" @click.prevent="handleApply">
                        Apply
                        <span class="material-symbols-outlined loading" style="margin-left:5px ;" v-show="loading"> cached
                        </span>
                    </button>
                    <button class="apply-job-btn alt" type="button" @click.prevent="handleCancel">Cancel</button>
                </div>

            </form>
            <button v-show="applied" class="apply-job-btn alt" type="button" @click.prevent="handleCancel">Back</button>
        </div>
        <ToastMessage style="width: fit-content; top:40%;" v-show="toast.active" :toast="toast" />
    </div>
</template>

<script>
import axios from 'axios';
import { applyJobInput } from '../../../data';
import ApplyInputComponent from './ApplyInputComponent.vue';
import ToastMessage from '../../utils/ToastMessage.vue'
const BASE_URL_USER = import.meta.env.VITE_BASE_URL_USER
export default {
    components: { ApplyInputComponent, ToastMessage },
    name: 'JobPostApplyJobSection',

    data() {
        return {
            title: 'Apply Job',
            inputInfo: '',
            applied: false,
            inputValues: [],
            application: {
                cv: false,
                cover_letter: '',
            },
            loading: false,
            toast: {
                active: false, msg: '', color: ''
            }

        }
    },
    props: ['user', 'job', 'handleCancel'],
    beforeMount() {

    },
    created() {
        this.inputInfo = applyJobInput
        this.setInputValues()
        this.checkAppliedJobs()
    },

    methods: {
        handleApply() {
            if (!this.application.cv) {
                // console.log(this.application.cv);
                this.showToast("cv is required", 'error')
                return
            }
            const token = JSON.parse(localStorage.getItem('userToken'))
            if (!token) {
                this.showToast("Sign in to Apply", 'error')
                setTimeout(() => (this.$router.push('/auth/login')), 6000)
                return
            }

            this.loading = true
            const userApply = new FormData()
            // userApply.append('js_id', this.user.id)

            userApply.append('job_id', this.job.id)
            userApply.append('company_id', this.job.company_id)
            userApply.append('cv_resume', this.application.cv)
            userApply.append('cover_letter', this.application.cover_letter)
            console.log(token);
            axios.post(`${BASE_URL_USER}/jobSeeker/apply`, userApply, { headers: { token } })
                .then(res => {
                    if (res.data) {
                        let msg = res.data.message
                        this.showToast(msg, 'success')
                        this.loading = false

                        this.setAppliedJobs()
                        console.log(res.data);
                    }
                })
                .then(() => setTimeout(() => {this.handleCancel()}, 3000))
                .catch((err) => {
                    let msg
                    if (err.response)
                        msg = err.response.data.message
                    if (err.message)
                        msg = err.message
                    this.showToast(msg, 'error')
                    this.loading = false
                    console.log(err)
                })

        },
        handleInput(input) {
            if (input.id == "cv") { this.application.cv = event.target.value }
            if (input.id == "cover-letter") { this.application.cover_letter = event.target.value }
            console.log(this.application);
        },
        setInputValues() {
            if (this.user) {
                this.inputValues = this.user
            }
        },
        showToast(msg, color) {
            this.toast = {
                active: true, msg, color
            }
            setTimeout(() => {
                this.toast = { active: false, msg: '', color: '' }
            }, 3000)
        },
        setAppliedJobs() {
            let appliedJobs = JSON.parse(localStorage.getItem('jobsApplied'))
            if (!appliedJobs) {
                localStorage.setItem('jobsApplied', JSON.stringify([this.job.id]))
            } else {
                localStorage.setItem('jobsApplied', JSON.stringify([...appliedJobs, this.job.id]))
            }
        },
        checkAppliedJobs() {
            const appliedJobs = JSON.parse(localStorage.getItem('jobsApplied'))
            if (appliedJobs) {
                appliedJobs.find((job) => job == this.job.id
                    ? (this.applied = true, this.title = "Job Applied")
                    : (this.applied = false, this.title = "Apply Job"))

            } else {
                this.applied = false
                this.title = "Apply Job"
            }
        }


    },
};
</script>

<style lang="css" scoped>
.apply-section {
    max-width: 400px;
    min-width: 320px;
    flex: 1;
    height: 100%;
    border: 1px solid #9E9E9E;
    border-radius: 20px;

}

.apply-section>* {
    width: 100%;
    /* padding: 0px 40px; */
}

h2 {
    color: #000000;
    margin-bottom: 10px;
    padding: 10px 40px;
}

.general-info {
    padding: 20px 40px;
    border-top: 1px solid #898989;
    max-width: 556px;
}

h3 {
    color: rgba(120, 114, 114, 1);
    font-weight: 700;
    margin-bottom: 10px;
    width: 100%;
}

form {
    width: 100%;
    align-items: flex-start;
    /* background: #000; */
    gap: 20px;
    position: relative;
    padding-bottom: 260px;
}

.cv {
    border-top: 1px solid #898989;
    position: absolute;
    /* background: #541d1d; */
    align-items: flex-start;
    width: 100%;
    bottom: 0;
    padding: 20px 0;
    /* height: 100px; */
}

.apply-job-btn {
    background: rgba(136, 204, 0, 1);
    color: #fff;
    width: 100%;
    margin-top: 20px;
    padding: 10px 0;
    font-size: 20px;
    font-weight: 700;
    outline: none;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

#cover-letter {
    resize: none;
    height: 100px;
}

.apply-job-btn:hover {
    background: rgb(98, 147, 2);
    transition: all .3s ease;
}

.apply-job-btn.alt {
    background: transparent;
    color: #000;
    border: 1px solid #898989;
}
</style>