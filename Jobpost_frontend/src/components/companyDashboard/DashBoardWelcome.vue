<template>
    <section class="container">
        <aside class="text">
            <h4>Good Morning, Maxim</h4>
            <p>
                Here is your job listing statictic and report from {{ date }}
            </p>
        </aside>
        <aside class="date">
            <h5>April 1st - May 30th</h5><span class="material-symbols-outlined">
                calendar_month
            </span>
        </aside>
    </section>
</template>

<script>
export default {
    name: 'JobPostDashBoardWelcome',
};
</script>

<style lang="css" scoped>
.container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* padding-top: 80px; */
    /* border: 1px solid green; */
}
.text{
    /* padding-left: 40px; */
}
.text p {
    color: #9C9595;
    font-size: 15px;
}
.date{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 20px;
    gap: 5px;
    border: 1px solid #88CC00;
}
.date span{
    color: #88CC00;
}


</style>