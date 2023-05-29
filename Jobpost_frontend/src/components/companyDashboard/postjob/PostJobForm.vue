<template>
    <h3>POST A JOB</h3>
    <PostJobLayout 
        @details="(event) => setNext(0, event)"
        @jobtype="setNext(1)"
        @salary="setNext(2)"
        @recruiter="setNext(3)"
    >

        <form @submit.prevent="handlePost">
            <div class="first" v-show="next == 0">
                <input v-model="postjob.title" type="text" placeholder="Job Title">
                <textarea v-model="postjob.description" name="description" id="description" cols="30" rows="10" placeholder="Enter job description..."></textarea>
                <div class="btns">
                    <button type="button">Cancel</button>
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
                <div class="btns">
                    <button type="button">Cancel</button>
                    <button type="button" @click.prevent="setNext(2)">Next</button>
                </div>
            </div>

            <div class="third" v-show="next == 2">
                <label for="">Select Salary</label>
                <select v-model="postjob.salary">
                    <!-- <option value="default">Select Salary Range</option> -->
                    <option value="disclosure">Disclosure</option>
                    <option value="GH¢ 800-1,200">GH¢ 800 - 1,200</option>
                    <option value="GH¢ 1,200-1,800">GH¢ 1,200 - 1,800</option>
                    <option value="GH¢ 1,800-2,500">GH¢ 1,800 - 2,500</option>
                    <option value="GH¢ 2,500-3,000">GH¢ 2,500 - 3,000</option>
                    <option value="GH¢ 3,000-5,000">GH¢ 3,000 - 5,000</option>
                    <option value="GH¢ 500+">5,000+</option>
                </select>
                {{ this.postjob.fname }}
                <div class="btns">
                    <button type="button">Cancel</button>
                    <button type="button" @click.prevent="setNext(3)">Next</button>
                </div>
            </div>

            <div class="fourth" v-show="next == 3">
                <input v-model="postjob.fname" type="text" placeholder="Recruiter First Name">
                <input v-model="postjob.mname" type="text" placeholder="Recruiter Middle Name">
                <input v-model="postjob.lname" type="text" placeholder="Recruiter Last Name">
                <input v-model="postjob.role" type="text" placeholder="Recruiter Role">
                <input v-model="postjob.contact" type="text" placeholder="Recruiter Contact (optional)">
                <div class="btns">
                    <button type="button">Cancel</button>
                    <button type="submit">Submit</button>
                </div>
            </div>

        </form>
    </PostJobLayout>
</template>

<script>
    import PostJobLayout from './PostJobLayout.vue';
    export default {
        components:{
            PostJobLayout
        },
        data(){
            return{
                next:0,
                valuex: '',
                postjob: {
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
                }
            }
        },
        methods:{
            setNext(num, event){
                this.next = num
                console.log(event);
            },
            handlePost(){
                let newPost = {
                    jobSalary: this.postjob.salary,
                    jobExperince: this.postjob.description,
                    jobLocation: this.postjob.location,
                    jobTitle: this.postjob.title,
                    jobPoster: this.postjob.fname,
                    jobPosterLogo:'/images/logo.svg',
                    jobUpdatedAt:'1 min',
                    jobPositionsAvailable:'1 of 2'
                }
                const oldData = JSON.parse(localStorage.getItem('postedjobs'))
                if(oldData){
                    let newData = [newPost, ...[oldData]]
                    localStorage.setItem('postedjobs', JSON.stringify(newData))
                }else{
                    localStorage.setItem('postedjobs', JSON.stringify(newPost))
                }
                this.clearForm()
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
                }
                alert('Job Posted')
                this.$router.push('/jobsearch')
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