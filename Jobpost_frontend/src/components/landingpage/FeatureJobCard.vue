<template>
    <div class="job">
        <h2>UX/UI Designer</h2>

        <section class="job-details-section1">
            <div>
                <span class="material-symbols-outlined">
                    location_on
                </span>
                <p>Dome, Accra</p>
            </div>

            <div>
                <span class="material-symbols-outlined">
                    pace
                </span>
                <p>Part-time</p>
            </div>
        </section>


        <section class="job-details-section2">

            <div class="company-section">

                <div class="company-logo">
                    <img src="/images/companySample_logo.png" alt="">
                </div>

                <div class="company-name">
                    <p>Maxim Nyansa</p>
                    <p>2 days ago</p>
                </div>
            </div>

            <button class="card-btn" @click="handleApply">Apply Now</button>

        </section>
    </div>
</template>

<script>
export default {


    methods:{
        handleApply(){
            this.$router.push('/')
        }
    }

}
</script>

<style lang="css" scoped>
.job {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    min-width: 300px;
    padding-bottom: 15px;
    box-shadow: 5px 5px 9px #a5a5a5,
    -5px -5px 9px #ECF7D6;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.48);
}

.job h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 54px;
    margin-left: 15px;
}

/* .job:hover {
    background-color: black;
    color: white;
    transition: all 0.4s;
} */

/* .job:hover .card-btn {
    background-color: #fff;
    transition: all 0.4s;
} */

.job-details-section1 {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.job-details-section1 div {
    display: flex;
    column-gap: 5px;
    width: 100%;
}

.job-details-section2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    padding-top: 20px;
    padding: 5px;
    width: 100%;
    border-top: 2px solid rgb(0, 0, 0)
}

/* .job:hover .job-details-section2 {
    border-top: 2px solid rgb(255, 255, 255)
} */

.card-btn {
    padding: 10px;
    background-color: #000;
    cursor: pointer;
    font-weight: 500;
    color: #fff;
}

.card-btn:hover {
    background: #88cc00;
    color: #ffffff;
    font-weight: bolder;
    transition: all .3s ease;
}

.company-section {
    display: flex;
    width: 60%;
    column-gap: 10px;
}

.company-logo {
    background-color: #fff;
    width: 44px;
}

.company-logo img {
    width: 100%;
    height: 100%;
}

/* .job:hover .company-logo {
    background-color: white;
} */

@media screen and (min-width: 1680px) {
    .job {
        width: 600px;
        padding: 20px;
    }

    .job h2 {
    font-weight: 600;
    font-size: 40px;
    }

    .job-details-section1 div {
        padding-top: 18px;
    }

    .job-details-section1 p {
        font-size: 24px;
    }

    .job-details-section1 span {
        font-size: 35px;
    }
}

@media screen and (max-width: 480px) {
    .job {
        width: 350px;
    }

    .job h2 {
        font-size: 23px;
        
    }

    .job-details-section1 p {
        font-size: 15px;
    }

    .job-details-section1 span {
        font-size: 17px;
    }
}
</style>