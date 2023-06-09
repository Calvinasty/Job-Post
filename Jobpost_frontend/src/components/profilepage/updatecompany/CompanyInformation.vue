<template>
    <div class="company-info">
        <form action="" class="company-form">
            <InputComponent id="companyName" type="text" placeHolder="Company name" name="companyName" :handleInput="handleInput"/>
            <InputComponent id="phoneNumber" type="tel" placeHolder="Phone Number" name="phoneNumber" :handleInput="handleInput"/>
            <InputComponent id="companySite" type="url" placeHolder="Company Site" name="companySite" :handleInput="handleInput"/>
            <InputComponent id="linkin" type="url" placeHolder="LinkIn Link" name="linkin" :handleInput="handleInput"/>
            <select class="select" name="industry" id="industry" v-model="industry" :handleInput="handleInput" >
                <option value="default">Select Industry</option>
                <option value="agriculture">Agriculture</option>
                <option value="chemical">Chemical industries </option>
                <option value="commerce">Commerce</option>
                <option value="Construction">Construction</option>
                <option value="education">Education</option>
                <option value="financial">Financial services</option>
                <option value="food">Food</option>
                <option value="forestry">Forestry</option>
                <option value="health">Health services</option>
                <option value="hotels">Hotels</option>
                <option value="mining">Mining</option>
                <option value="mechanical">Mechanical and electrical engineering</option>
                <option value="technology">Technology</option>
            </select>

            <div class="btnsec flex-center-row">
                <button class="btn" @click="handleSave">Save</button>
                <button class="btns" @click="handlecloseCard">Cancel</button>
            </div>
        </form>
        
    </div>
</template>

<script>
    import InputComponent from '../../authpage/InputComponent.vue';
    export default {
        components: {
            InputComponent
        },

        props: [
        'handlecloseCard',
        'handleSave',
    ],
        data() {
            return {
                companyName:'',
                companyNumber: '',
                companySite:'',
                industry: '',

            }
        },
        methods:{
            handleInput(data){
                if(data.inputName == 'companyName') { this.companyName = data.inputValue }
                if(data.inputName == 'companyNumber') { this.companyNumber = data.inputValue }
                if(data.inputName == 'companySite') { this.companySite = data.inputValue }
                if(data.inputName == 'industry') { this.industry = data.inputValue }
            }
        }
    }
</script>

<style lang="css" scoped>
    .company-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 30px;
        margin-top: 40px;
    }
    .select {
    font-weight: 400;
    padding: 10px;
    color: #666;
    font-size: 14px;
    border: none;
    outline: none;
    border: 1px solid #7FBF4C;
    border-radius: 8px;
    width: 500px;
}

.btnsec {
    /* position: absolute; */
    padding-bottom: 20px;
    gap: 20px;
    bottom: 0;
    /* background-color: aqua; */
}

.btnsec>* {
    border: none;
}

.btn {
    border-radius: 8px;
    width: 140px;
    height: 50px;
    font-size: 18px;
    background-color: #88CC00;
    color: #ffffff;
}

.btns {
    border-radius: 8px;
    width: 140px;
    height: 50px;
    font-size: 18px;
    background-color: #000000;
    color: #ffffff;
}
</style>