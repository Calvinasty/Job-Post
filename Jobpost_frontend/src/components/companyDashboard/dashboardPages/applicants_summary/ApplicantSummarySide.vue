<template>
    <div  class="main-container">
        <div class="profile-pic-container">
            <img src="/images/userprofile.svg"  alt="pic">
            <h2>{{ users.name }}</h2>
        </div>

        <div  class="contact-info">         
                <p>{{addresses.address}}</p>
                <p>{{addresses.gender}}</p>
                <p>{{addresses.age}}</p>
                <p> <a href="mailto:danmcdan@gmail.com">{{addresses.email}}</a></p>
                <p><a href="linkedin.com/in/daniella-momo">{{addresses.linkedin}}</a></p>
                <p>{{addresses.number}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'users',
        'addresses'
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