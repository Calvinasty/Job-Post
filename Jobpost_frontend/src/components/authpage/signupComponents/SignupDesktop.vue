<template>
    <div class="container">

        <form @submit.prevent="handleRegister()" v-if="next !== 2">
            <Transition name="slide-fade">
                <div v-if="next == 0" class="first">
                    <div class="headers">
                        <img src="/images/maxim-logo.jpeg" alt="logo">
                        <h1>Sign Up</h1>
                        <h3>Enter your details</h3>
                    </div>
                    <span>
                        <label for="fname">First Name</label>
                        <input type="text" name="fname" value="">
                    </span>
                    <aside class="other-names">
                        <span>
                            <label for="mdname">Middle Name</label>
                            <input type="text" name="mdname" value="">
                        </span>
                        <span>
                            <label for="lname">Last Name</label>
                            <input type="text" name="lname" value="">
                        </span>
                    </aside>
                    <span>
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email">
                    </span>
                    <span>
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password">
                    </span>
                    <span>
                        <label for="confirmPass">Confirm Password</label>
                        <input type="password" name="confirmPass" id="confirmPass">
                    </span>

                    <button type="button" @click="setNext(1)">
                        Continue <span class="material-symbols-outlined">arrow_right_alt</span>
                    </button>
                    <span class="progress">
                        <span></span>
                        <span></span>
                    </span>
                </div>
            </Transition>

            <Transition name="slide-fade">
                <div v-if="next == 1" class="second">
                    <div class="headers">
                        <img src="/images/maxim-logo.jpeg" alt="logo">
                        <h1>Sign Up Continue</h1>
                        <h3>Enter additional details</h3>
                    </div>

                    <span>
                        <label for="fname">Select Date of Birth</label>
                        <input type="date" name="date" value="">
                    </span>
                    <span>
                        <label for="fname">Gender</label>
                        <select name="gender" id="gender">
                            <option value="default">Select Your Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                    </span>
                    <span>
                        <label for="fname">Select your profile picture (optional)</label>
                        <input type="file" name="profile" value="">
                    </span>

                    <button type="submit">
                        SignUp <span class="material-symbols-outlined">how_to_reg </span>
                    </button>

                    <!-- Back button -->
                    <button class="prev-btn" type="button" @click="setPrev(0)">
                        <span class="material-symbols-outlined"> arrow_back_ios_new</span> Back 
                    </button>
                    <!-- Progress indicator -->
                    <span class="progress progress-2">
                        <span></span>
                        <span></span>
                    </span>
                </div>
            </Transition>


        </form>

        <Transition>
            <section class="complete" v-if="next == 2">
                <img src="/images/maxim-logo.jpeg" alt="logo">
                <h1>Registration Complete</h1>
                <div>
                    <span class="material-symbols-outlined">mark_email_unread</span>
                    <h2>Thank you</h2>
                    <h3>We have sent a confirm email</h3>
                    <h3>email@gmail.com</h3>
                </div>                
                <button type="button" @click="handleHome()">
                    View dashboard <span class="material-symbols-outlined"> dashboard</span>
                </button>
            </section>
        </Transition>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                next: 0
            }
        },
        methods:{
            setNext(num){
                this.next = num
            },
            setPrev(num){
                this.next = num
            },
            handleRegister(){
                this.setNext(2)
                console.log('Register')
            },
            handleHome(){
                this.$router.push('/userprofile')
            }
        }
    }
</script>

<style lang="css" scoped>
    .container {
        width: 100dvw;
        height: 100dvh;
        padding: 55px 105px;
        background-color: rgba(0, 0, 0, 0.75);
        background-image: url('/images/maxim-auth-background.jpeg');
        /* background-position: 90%; */
        background-repeat: no-repeat;
        background-size:cover;
        background-blend-mode: overlay;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    form{
        background-color: #f1f1f1;
        padding: 50px 70px;
        border-radius: 10px;
        /* border: 1px solid red; */
        width: 40%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    form div{
        width:100%;
        /* border: 1px solid blue; */
        display: flex;
        flex-direction: column;
        gap: 15px;
        position: relative;
    }
    form div img{
        width: 50%;
    }
    form div h1{
        color: #7FBF4C;
        font-size: 20px;
    }
    form div h3{
        margin-bottom: 20px;
        font-size: 13px;
    }
    form div span{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 5px;
        width: 100%;
        /* border: 1px solid red; */
    }
    form div span label{
        color: #666;
        font-size: 14px;
    }
    form div span input, select{
        width: 100%;
        padding: 10px;
        border: 2px solid #7FBF4C;
        border-radius: 8px;
    }
    input[type="date"]{
        background-color: #7FBF4C;
        color: #fff;
    }
    ::-webkit-calendar-picker-indicator{
        background-color: #fff;
    }
    form div button, .complete button{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 40%;
        padding: 14px 18px;
        border-radius: 8px;
        border: none;
        background-color: #7FBF4C;
        color: #fff;
        font-size: 15px;
        font-weight: bold;
        margin-top: 30px;
    }
    form div button span{
        /* border: 1px solid red; */
        margin: 0;
        width: fit-content;
    }

    .headers{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .other-names{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    
    .prev-btn{
        width: 30%;
        text-align: center;
        background-color: #666;
        margin-top: 30px;
    }
    .prev-btn span{
        /* transform: scaleX(-1) */
    }
    /* progress classes */
    .progress{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        position: absolute;
        bottom: -20px;
        right: -50%;
    }
    .progress span{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #7FBF4C;
    }
    .progress span:last-child{
        background-color: #666;
    }
    .progress-2 span:last-child{
        background-color: #7FBF4C;
    }
    .progress-2 span:first-child{
        background-color: #666;
    }

    /* Transition Animation */
    .slide-fade-enter-active {
        transition: all 0.3s ease-out;
    }
    .slide-fade-leave-active {
        transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
    }
    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateX(20px);
        opacity: 0;
    }

    /* Registeration complete */
    .complete{
        width: 40%;
        padding: 50px 70px;
        background-color: #f1f1f1;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    .complete img{
        width: 40%
    }
    .complete h1{
        font-size: 28px;
        font-weight: 500;
        margin-top:50px;
        color: #7FBF4C;
    }
    .complete div{
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
    }
    .complete div .material-symbols-outlined{
        font-size: 50px;
        color: #7FBF4C;
    }
    .complete div h2{
        font-size: 25px;
        font-weight: 300;
        color: #7FBF4C;
    }
    .complete div h3{
        font-size: 16px;
    }
    .complete div h3:first-of-type{
        font-weight: 300;
    }
    .complete button{
        margin-top: 50px;
        width: 50%;
    }



    /* increase form width on mini tablets */
    @media screen and (min-width:481px) and (max-width:768px) {
        form{
            width: 80%;
        }
        .complete{
            width: 80%;
        }
        .complete h1{
            font-size: 25px;
        }
    }
    /* increase form width on tablets */
    @media screen and (min-width:769px) and (max-width:1024px) {
        form{
            width: 60%;
        }
        .complete{
            width: 80%;
        }
    }
</style>