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
                    <img src="" alt="">
                </div>

                <div class="company-name">
                    <p>Maxim Nyansa</p>
                    <p>2 days ago</p>
                </div>
            </div>

            <button class="btn">Apply Now</button>

        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.job {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 350px;
    padding-bottom: 15px;
}

.job h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 54px;
    margin-left: 15px;
}

.job:hover {
    background-color: black;
    color: white;
}

.job:hover .btn {
    background-color: #fff;
}

.job-details-section1 {
    display: flex;
    justify-content: space-between;
    max-width: 70%;
    margin-left: 12px;
}

.job-details-section1 div {
    display: flex;
    column-gap: 5px;
}

.job-details-section2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-top: 50px;
    padding-top: 20px;
    width: 80%;
    margin-left: 10px;
    border-top: 2px solid rgb(0, 0, 0)
}

.job:hover .job-details-section2 {
    border-top: 2px solid rgb(255, 255, 255)
}

.btn {
    padding: 10px;
    background-color: #ECF7D6;
}

.btn:hover {
    background: white;
}

.company-section {
    display: flex;
    width: 60%;
    column-gap: 10px;
}

.company-logo {
    background-color: black;
    width: 44px;
}

.job:hover .company-logo {
    background-color: white;
}

@media screen and (min-width: 1622px) {
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