<template>
    <PostJobLayout 
        @details="setNext(0)"
        @jobtype="setNext(1)"
        @salary="setNext(2)"
        @recruiter="setNext(3)"
    >
        <form>
            <div class="first" v-show="next == 0">
                <input type="text" placeholder="Job Title">
                <textarea name="description" id="description" cols="30" rows="10"></textarea>
                <div class="btns">
                    <button>Cancel</button>
                    <button type="button" @click="() => setNext(1)">Next</button>
                </div>
            </div>

            <div class="second" v-show="next == 1">
                <select>
                    <option value="default">Select Type</option>
                    <option value="fullTime">Full Time</option>
                    <option value="partTime">Part Time</option>
                    <option value="remote">Remote</option>
                    <option value="internship">Internship</option>
                    <option value="contract">Contract</option>
                </select>
                <div class="btns">
                    <button>Cancel</button>
                    <button type="button" @click="setNext(2)">Next</button>
                </div>
            </div>

            <div class="third" v-show="next == 2">
                <select>
                    <option value="default">Select Salary Range</option>
                    <option value="disclosure">Disclosure</option>
                    <option value="800 - 1,200">800 - 1,200</option>
                    <option value="1,200 - 1,800">1,200 - 1,800</option>
                    <option value="1,800 - 2,500">1,800 - 2,500</option>
                    <option value="2,500 - 3,000">2,500 - 3,000</option>
                    <option value="3,000 - 5,000">3,000 - 5,000</option>
                    <option value="500+">5,000+</option>
                </select>
                <div class="btns">
                    <button>Cancel</button>
                    <button type="button" @click="setNext(3)">Next</button>
                </div>
            </div>

            <div class="fourth" v-show="next == 3">
                <input type="text" placeholder="Recruiter First Name">
                <input type="text" placeholder="Recruiter Middle Name">
                <input type="text" placeholder="Recruiter Last Name">
                <input type="text" placeholder="Recruiter Role">
                <input type="text" placeholder="Recruiter Contact (optional)">
                <div class="btns">
                    <button>Cancel</button>
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
                next:0
            }
        },
        methods:{
            setNext(num){
                this.next = num
            }
        }
    }
</script>

<style lang="css" scoped>
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

    input, select{
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