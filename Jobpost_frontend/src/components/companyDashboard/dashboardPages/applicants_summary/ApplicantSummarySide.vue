<template>
    <div class="main-container">
        <div class="profile-pic-container">
            <img src="/images/userprofile.svg"  alt="pic">
            <h2>Daniella McDan</h2>
        </div>
        <div class="contact-info">         
                <p>Coral Avenue, Hse 3, Tantra Hills, Accra-Ghana. GHA-393-133'</p>
                <p>Female</p>
                <p>27</p>
                <p> <a href="mailto:danmcdan@gmail.com">danmacdan@gmail.com</a></p>
                <p><a href="linkedin.com/in/daniella-momo">linkedin.com/in/daniella-momo</a></p>
                <p>+233237458923</p>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'infos'
    ]
}
</script>
<style lang="css" scoped>
.main-container{
    width: 230px;
    padding: 10px;
    position: fixed;

}
.contact-info{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    align-items: flex-start;
    text-align: left;
    gap: 15px;
    color: rgba(120, 114, 114, 1);
}
a{
    color: rgba(120, 114, 114, 1);
    text-decoration: none;
}
</style>