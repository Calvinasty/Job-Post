<template>
    <div class="job-portal">
        <div class="img-section">
            <div class="main-image"></div>
        </div>
        <div class="text-section">
                <section class="icon-img">
                    <img src="/images/Vector.png" alt="icon">
                    <h1>Trusted & Popular <br>  Job Portal</h1>
                </section>
                
                <section class="text">
                    
                   
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
*{box-sizing: border-box;}
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
    flex-direction: column;
    font-size: 2rem;
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

@media screen and (max-width: 480px) {
    .job-portal {
        display: flex;
        flex-direction: column;
        padding: 20px;
        width: 100dvw;
        gap: 70px;
    }
    .img-section img {
        padding: 50px;
    }

    .img-section {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;   
    }
    .img-section .main-image{
        /* float: right; */
        width: 350px;
        height: 376px;
        margin: auto;
        border: none;
        background-position: right;
        background-size: cover;
        background-color: rgba(73, 91, 55, 0.5);
        background-blend-mode: overlay;
        background-image: url("/images/young-businessmen.jpeg");
        border-radius: 15px;
    }
    .icon-img{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .icon-img img {
        width: 10%;
    }
    .icon-img h1{
        text-align: center;
        font-size: 30px;
        width: 90%;
    }

    .text-section {
       width: 100%;
       padding: 0;
       display: inline-block;
    }
    .text {
        width: 100%;
        font-size: 20px;
    }

    .text p {
        padding-top: 20px;
        padding-bottom: 20px;

    }
    .button {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        column-gap: 20px;
    }

    .button span {
        display: flex;
        justify-content: center;
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
}

@media screen and (min-width: 481px) and (max-width: 600px){
    .job-portal {
        display: block;
        width: 100%;
        border: 1px solid red;
        /* padding: 20px; */
        font-size: 10px;
        
    }
    .img-section {
        width: 50%;  
        font-size: 20px; 
        border: 10px solid green;
    }
    .img-section .main-image{
        /* float: right; */
        width: 250px;
        height: 226px;
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
        flex-direction: column;
        font-size: 10px;
        justify-content: center;
        /* padding: 0px 10px; */
        /* gap: 8px; */
        width: 50%;
        /* height: 80%; */
        border: 1px solid blue;
    }
    .text {
        font-size: 16px;
    }

    .text h1 {
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
        /* padding: 10px; */
        /* width: 10%; */
    }

}

@media screen and (min-width: 601px) and (max-width: 768px){

    .job-portal {
    display: flex;
    align-items: center;
    gap: 70px;
    height: 100dvh;
}

.img-section img {
    padding: 30px;
}

.img-section {
    width: 50%;   
}
.img-section .main-image{
    float: right;
    width: 350px;
    height: 326px;
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
    flex-direction: column;
    font-size: 16px;
    justify-content: center;
    padding: 50px 10px;
    gap: 8px;
    width: 40%;
    height: 150px;
}

.text {
    font-size: 16px;
}

.text h1 {
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
    font-size: 10px;
    padding: 15px;
    text-decoration: none;
    background-color: #000;
    color: #fff
}

.button span:hover {
    background-color: #b4cda1;
    transition: ease-in-out 0.2s;
}

}

</style>