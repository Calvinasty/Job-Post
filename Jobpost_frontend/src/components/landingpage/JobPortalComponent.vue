<template>
    <div class="job-portal">
        <div class="img-section">
            <div class="image-container"></div>
        </div>
        <div class="text-section">
            <section class="text-heading">
                <img src="/images/Vector.png" alt="icon">
                <h2>Trusted & Popular Job Portal</h2>
            </section>

            
                <p class="main-text">Our job portal is trusted and popular amongst job seekers and employers alike,
                    providing a reliable platform for finding the right job or candidate. With our extensive database
                    and user-friendly interface, <br> we make the job search  process easy and efficient for everyone
                </p>

            <section class="buttons">

                <button class="job-btn" @click="handlePostJob">Post a Job <span class="material-symbols-outlined">
                            arrow_right_alt
                        </span></button>
                <router-link to="/jobsearch"><button class="job-btn">Find a Job <span class="material-symbols-outlined">
                            arrow_right_alt
                        </span></button></router-link>

            </section>
        </div>
    </div>
</template>

<script>
export default {

    methods: {
        handlePostJob() {
            const empToken = localStorage.getItem('empToken');
            if (!empToken) {
                this.$router.push('/auth/poster-register')
                return
            }
            this.$router.push('/admin/analytics')


        }
    }

}
</script>

<style lang="css" scoped>
/* mobile-view */
.job-portal{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 480px;
    padding: 40px 10px;
    background-color: rgba(238, 238, 238, 1);
    /* gap: 24px; */
}
.img-section{
    /* width: 66px; */
    
}
.image-container{
   
    background-size: cover;
    background-color: rgba(17, 19, 15, 0.44);
    /* background-color: rgba(73, 91, 55, 0.5); */
    background-blend-mode: overlay;
    background-image: url("/images/young-businessmen.jpeg");
    background-position: 100% 90%;
    border-radius: 15px;
    width: 300px;
    height: 200px;
}

.text-heading{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 40px;
    height: 100%;
    font-weight: 700;
}
.text-heading img{
    width: 34px;
    height: 31px;
}
.main-text{
    margin: 30px 0px;
    width: 256x;
    font-weight: 300px;
    
}
.buttons{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 100%;
}
.job-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 16px 10px 16px;
    border: 2px solid #000;
    background-color: #000;
    color: #fff;
    border-radius: 6px;
    font-weight: 600;
}
.buttons a .job-btn{
    background-color: #fff;
    color: #000;
    font-weight: 700 ;
}
.text-section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.text-section p{
    font-size: 15px;
}

a{
    text-decoration: none;
}

@media screen and (min-width: 481px){
    .job-portal{
        width: 100dvw; 
        max-width: none;  
    }
    .text-section{
        width: 100%;
    }
    .main-text{
        width: 80%;

    }
}
@media screen and (min-width: 768px){
    .job-portal{
        width: 100%; 
        flex-direction: row; 
        gap: 30px; 
        height: 80vh;
       
    }
    .text-section{
        width: 100%;
        align-items: flex-start;
        text-align: left;    }
    .img-section{
      width: 100%;
    }
    .img-section,.text-section{
        flex: 1;
        /* width: 100%; */
    }
    .main-text{
        width: 80%;

    }
    .image-container{
        width: 100%;
        background-position: 100% 70%;
        height: 306px;
        border-radius: 20px;
    }
    .buttons{
    align-items: flex-start;
    justify-content: flex-start;

   
}
}

@media screen and (min-width: 900px){
    .job-portal{
        gap: 50px;  
        max-width: 1720px ;  
    }
    .text-section{
        width: 100%;
        gap: 20px;
        align-items: flex-start;
        text-align: left;    }
    .img-section{
      width: 700px;
      height: 100%;
    }
    .img-section,.text-section{
        flex: 1;
        /* width: 100%; */
    }
    .main-text{
        width: 80%;

    }
    .image-container{
        width: 80%;
        margin-left: 80px;
        max-width: 721px;
        background-position: 100% 90%;
        height: 100%;
        max-height: 774px;
        border-radius: 20px;
    }
}

@media screen and (min-width: 1024px){

    .text-section{
        width: 100%;
        align-items: flex-start;
        text-align: left;    }
    .img-section{
      width: 100%;
    }
    .img-section,.text-section{
        flex: 1;
        /* width: 100%; */
    }
    .main-text{
        width: 70%;

    }
    .buttons{
    align-items: flex-start;
    justify-content: flex-start;
    
   
}

.text-heading{
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    width: 100%;
    font-size: 25px;
}

}


   
</style>