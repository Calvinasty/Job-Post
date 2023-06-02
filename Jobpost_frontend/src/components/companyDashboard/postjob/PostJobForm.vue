<template>
    <h3>POST A JOB {{ count }}</h3>
    <PostJobLayout>

        <form @submit.prevent="handlePost">
            <div class="first" v-show="next == 0">
                <input v-model="postjob.title" type="text" placeholder="Job Title">
                <textarea v-model="postjob.description" name="description" id="description" cols="30" rows="10" placeholder="Enter job description..."></textarea>
                <div class="btns">
                    <button type="button" @click="()=>cancelForm()">Cancel</button>
                    <button type="button" @click.prevent="setNext(1)">Next</button>
                </div>
            </div>

            <div class="second" v-show="next == 1">
                <label for="">Select Job Type</label>
                <select v-model="postjob.jobtype">
                    <!-- <option value="default">Select Type</option> -->
                    <option value="fullTime">Full Time</option>
                    <option value="partTime">Part Time</option>
                    <option value="remote">Remote</option>
                    <option value="internship">Internship</option>
                    <option value="contract">Contract</option>
                </select>

                <input v-model="postjob.location" type="text" placeholder="Job Location">
                <textarea v-model="postjob.requirement" name="requirements" id="requirements" cols="30" rows="10" placeholder="Enter job requirements..."></textarea>
                <div class="btns">
                    <button type="button" @click="()=>cancelForm()">Cancel</button>
                    <button type="button" @click.prevent="setNext(2)">Next</button>
                </div>
            </div>

            <div class="third" v-show="next == 2">
                <label for="">Select Salary</label>
                <select v-model="postjob.salary" placeholder="Select Salary Range">
                    <!-- <option value="default">Select Salary Range</option> -->
                    <option value="disclosure">Disclosure</option>
                    <option value="GH¢ 800-1,200">GH¢ 800 - 1,200</option>
                    <option value="GH¢ 1,200-1,800">GH¢ 1,200 - 1,800</option>
                    <option value="GH¢ 1,800-2,500">GH¢ 1,800 - 2,500</option>
                    <option value="GH¢ 2,500-3,000">GH¢ 2,500 - 3,000</option>
                    <option value="GH¢ 3,000-5,000">GH¢ 3,000 - 5,000</option>
                    <option value="GH¢ 500+">5,000+</option>
                </select>
                <input v-model="postjob.deadline" type="date" placeholder="Deadline">
                <textarea v-model="postjob.howto" name="howto" id="howto" cols="30" rows="5" placeholder="Enter job application method..."></textarea>

                <div class="btns">
                    <button type="button" @click="()=>cancelForm()">Cancel</button>
                    <button type="button" @click.prevent="setNext(3)">Next</button>
                </div>
            </div>

            <div class="fourth" v-show="next == 3">
                <input v-model="postjob.recruiter" type="text" placeholder="Recruiter Name">
                <input v-model="postjob.role" type="text" placeholder="Recruiter Role">
                <input v-model="postjob.contact" type="text" placeholder="Recruiter Contact (optional)">
                <div class="btns">
                    <button type="button" @click="()=>cancelForm()">Cancel</button>
                    <button type="submit">Submit</button>
                </div>
            </div>

        </form>
    </PostJobLayout>
</template>

<script>
    import axios from 'axios'
    import PostJobLayout from './PostJobLayout.vue';
    import {useDashboardStore} from '../../../stores/dashboard';
    import {mapState, mapActions} from 'pinia'
    export default {
        components:{
            PostJobLayout
        },
        data(){
            return{
                postjob: {
                    title: '',
                    description: '',
                    requirement: '',
                    jobtype: '',
                    location: '',
                    salary: '',
                    role: '',
                    recruiter: '',
                    contact: '',
                    deadline: '',
                    howto: ''
                },
            }
        },
        computed: {
            ...mapState(useDashboardStore, ['next']),
        },
        methods:{
            ...mapActions(useDashboardStore, ['setNext', 'setModal']),
            handlePost(){
                let newPost = {
                    job_title: this.postjob.title,
                    job_type: this.postjob.jobtype,
                    job_description: this.postjob.description,
                    salary_range: this.postjob.salary,
                    location: this.postjob.location,
                    requirements: this.postjob.requirement,
                    application_deadline: this.postjob.deadline,
                    how_to_apply: this.postjob.howto,
                    name_of_poster: this.postjob.recruiter,
                    role: this.postjob.role,
                    contact: this.postjob.contact
                    
                }
                const newFormData= new FormData()  
                newFormData.append("job_title", this.postjob.title)
                newFormData.append("job_type", this.postjob.jobtype)
                newFormData.append("job_description", this.postjob.description)
                newFormData.append("salary_range", this.postjob.salary)
                newFormData.append("location", this.postjob.location)
                newFormData.append("requirements", this.postjob.requirement)
                newFormData.append("application_deadline", this.postjob.deadline)
                newFormData.append("how_to_apply", this.postjob.howto)
                newFormData.append("name_of_poster", this.postjob.recruiter)
                newFormData.append("role", this.postjob.role)
                newFormData.append("contact", this.postjob.contact)

                let token = localStorage.getItem('companyToken')
                console.log(token);
                axios.post('http://192.168.1.36:5000/jobPost/postJob', newFormData, {headers: token})
                .then(res => {
                    console.log(res.data);
                    this.$router.push('/jobsearch')
                    this.clearForm()
                })
                .catch(err => {
                    console.log(err);
                    alert(err)
                })
            },
            clearForm(){
                this.postjob = {
                    title: '',
                    description: '',
                    jobtype: '',
                    location: '',
                    salary: '',
                    role: '',
                    fname: '',
                    mname: '',
                    lname: '',
                    role: '',
                    contact: ''
                },
                this.setModal('')
            },
            cancelForm(){
                if(confirm("Are you sure of this action?")){
                    this.clearForm()
                }else{
                    return
                }
            }
        }
    }
</script>

<style lang="css" scoped>
    
    h3:nth-of-type(1){
        margin-bottom: 20px;
        color: #88CC00;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        gap: 10px;
        margin-top: 20px;
    }

    .first, .second, .third, .fourth{
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        gap: 10px;
    }

    input, select, textarea{
        padding: 10px;
    }
    .btns button{
        border: none;
        padding: 15px 20px;
        border-radius: 10px;
        cursor: pointer;
        margin: 10px;
        font-weight: bold;
    }
    .btns button:first-child{
        background-color: #000;
        color: #fff;
    }
    .btns button:last-child{
        background-color: #88CC00;
        color: #fff;
    }

</style>