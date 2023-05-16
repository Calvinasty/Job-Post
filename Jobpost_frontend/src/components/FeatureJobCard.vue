<template>
    <div class="job">
        <h2>UX/UI Designer</h2>

        <section class="job-details-section1">
            <div>
                <img src="/black-location.svg" alt="">
                <p>Dome, Accra</p>
            </div>

            <div>
                <img src="/black-clock.svg" alt="">
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
    width: 362px;
    height: 30dvh;
}

.job h2 {
    padding: 10px;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;
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
    margin-top: 20px;
    padding-top: 30px;
    width: 80%;
    margin-left: 10px;
    border-top: 1px solid white
}

.btn {
    padding: 10px;
    background: rgb(174, 201, 153)
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
</style>