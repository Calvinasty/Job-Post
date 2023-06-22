<template>
    <section class="Logout">
        <div class="logged-out">
            <img src="/images/logo.png" alt="logo">

            <div>
                <span class="material-symbols-outlined">Logout</span>
                <h2>Logged Out</h2>
                <h3>You have successfully logged out</h3>

            </div>
            <button type="button" @click="handleLogout">
                Back to Home <span class="material-symbols-outlined"> Home</span>
            </button>
        </div>
    </section>
</template>

<script>
export default {

    methods: {
        handleLogout() {
            this.$router.push('/')
        }
    }

}
</script>

<style lang="css" scoped>
.Logout {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('/images/maxim-auth-background.jpeg');
    background-color: #10150cf3;
    mix-blend-mode: overlay;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: overlay;
    width: 100dvw;
    height: 100dvh;

}

.logged-out {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 5px;
    border-radius: 20px;
    width: 550px;
    max-width: 622px;
    padding-bottom: 80px;
    padding-top: 30px;
}

.logged-out div {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    width: 100%;
    justify-content: center;
    align-items: center;
}

.logged-out div .material-symbols-outlined {
    font-size: 50px;
    color: #7FBF4C;
}

.logged-out div h2 {
    font-size: 35px;


}

.logged-out div h3 {
    font-size: 16px;
    font-weight: 300;
}

.Logout img {
    width: 40%
}

.Logout button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 14px 18px;
    margin-top: 50px;
    border-radius: 8px;
    border: none;
    background-color: #7FBF4C;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
}
</style>