<template>
    <div>
        <div class="overlay">
            <div class="edit">
                <!-- <form class="form"> -->
                    <input class="text-one" type="text" name="fname" id="fname" placeholder="Job Description">
                    <select class="dropdown">
                        <option value="role type">Role type</option>
                        <option value="role type">Role type</option>
                        <option value="role type">Role type</option>
                        <option value="role type">Role type</option>
                        <option value="role type">Role type</option>
                    </select>
                    <input class="text" type="text" name="lname" id="lname" placeholder="Requirements">
                    <input class="text" type="text" name="dname" id="dname" placeholder="Location">
                <!-- </form> -->
                <div class="btn"> 
                    <button class="save">Save</button>
                    <button class="cancel">Cancel</button>
                </div>
            </div>
        </div>
        <h1>Helloooo World here is Danie Gold</h1>
    </div>
</template>

<script>
export default {
    name: 'JobpostFrontendJobViewEdit',

    data() {
        return {
            
        };
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>
.overlay{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(146, 146, 146, 1);
    z-index: 10;

}
.edit{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 1); 
    position: relative;
    padding: 150px;
    width: 505px;
    height: 586px;
    gap: 30px;
    border-radius: 20px;


}
 .form{
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    /* background-color: rgb(21, 21, 27); */
    font-size: 30px;
    border: 2px solid rgba(127, 191, 76, 1);
    padding: 100px;
    /* width: 100%; */
    gap: 15px;
}  
.text{
    padding: 30px 70px;
    border-radius: 10px;
    border: 2px solid rgba(127, 191, 76, 1);
    height: 70px;
    
}
.text-one{
    padding: 30px 70px;
    border-radius: 10px;
    height: 90px;
    border: 2px solid rgba(127, 191, 76, 1);
    text-align: left;
    
}


.btn{
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 20px; */
    gap: 30px;
    /* background-color: brown; */

}
.btn button{
    padding: 20px 35px;
    border: none;
    border-radius: 8px;
    height: 60px;
    width: 160px;
    margin-top: 50px;
}
.btn .save{
    background-color: rgba(136, 204, 0, 1);
    color: rgba(255, 255, 255, 1);
}
.btn .cancel{
    background-color: rgba(0, 0, 0, 1);
    color: rgba(255, 255, 255, 1);
}

.dropdown{
    padding: 15px 120px;
    border-radius: 10px;
    border: 2px solid rgba(127, 191, 76, 1);
}

</style>