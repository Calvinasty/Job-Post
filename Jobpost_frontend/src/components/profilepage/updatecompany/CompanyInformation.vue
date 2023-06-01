<template>
    <div class="company-info">
        <form action="" class="company-form">
            <InputComponent inputId="companyName" inputType="text" inputName="Company name" name="companyName" />
            <InputComponent inputId="phoneNumber" inputType="tel" inputName="Phone Number" name="phoneNumber" />
            <InputComponent inputId="companySite" inputType="url" inputName="Company Site" name="companySite" />
            <InputComponent inputId="linkin" inputType="url" inputName="LinkIn Link" name="linkin" />
            <select class="select" name="industry" id="industry">
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

        </form>
        
    </div>
</template>

<script>
    import InputComponent from '../EditInputComponent.vue';
    export default {
        components: {
            InputComponent
        },
        data() {
            return {
                
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
    font-size: 16px;
    padding: 10px;
    color: #000000;
    border: none;
    outline: none;
    border: 1px solid #7FBF4C;
    border-radius: 8px;
    width: 500px;
}
</style>