<template>
    <div class="job-portal">
        <div class="img-section">
            <div class="main-image"></div>
            <!-- <img src="/young-businessmen.jpg"  alt="image"> -->
        </div>
        <div class="text-section">
            <section class="icon-img">
                <img src="/images/Vector.png" alt="icon">
            </section>

            <section class="text">
                <h1>Trusted & Popular <br>
                    Job Portal</h1>
                <p>Find your dream job from thousands daily updated job vacancies. Find the best jobs online from Ghana
                    sites or apply directly on a business websites. Search and find jobs today!
                </p>

            </section>
            <section class="button">



                <router-link to=""><span class="span">Post a Job <img src="/images/arrow_right.svg"
                            alt="arrow"></span></router-link>
                <router-link to=""><span class="span">Find a Job <img src="/images/arrow_right.svg"
                            alt="arrow"></span></router-link>

            </section>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.job-portal {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 70px;
    height: 100dvh;
}

.img-section img {
    padding: 50px;


}

.img-section {
    width: 50%;   
    /* border: 1px solid red;  */
}
.img-section .main-image{
    float: right;
    width: 500px;
    height: 524px;
    border: none;
    background-position: right;
    background-size: cover;
    background-color: rgba(73, 91, 55, 0.5);
    background-blend-mode: overlay;
    background-image: url("/images/young-businessmen.jpeg");
    border-radius: 15px;
}

.icon-img img {
    width: 30px;

}

.text-section {
    display: flex;
    font-size: 2rem;
    flex-direction: column;
    justify-content: center;
    padding: 80px 20px;
    gap: 30px;
    width: 50%;
    height: 600px;


}

.text {
    font-size: 20px;
}

.text h1 {
    /* font-size: 2rem; */
    font-size: 70px;
}

.text p {
    padding-top: 20px;
    padding-bottom: 20px;

}

.button {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    column-gap: 20px;
}

.button span {
    border: 1px solid;
    border-radius: 8px;
    font-size: 20px;
    padding: 15px;
    text-decoration: none;
    background-color: #000;
    color: #fff
}

.button span:hover {
    background-color: #b4cda1;
    transition: ease-in-out 0.2s;
}

a {
    text-decoration: none;
}
</style>