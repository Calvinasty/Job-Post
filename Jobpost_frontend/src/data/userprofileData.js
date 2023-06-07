const userprofileData = [
    {
        cardTitle: "Personal Information",
        cardInputInformation: {
            inputOne: {
                id: "full-name",
                name: "Full Name",
                type: "text",

            },
            inputTwo: {
                id: "email",
                name: "Email",
                type: "email",

            },
            inputThree: {
                id: "contact",
                name: "Contact",
                type: "tel",

            },
            inputFour: {
                id: "linkedin-link",
                name: "LinkedIn Link",
                type: "text",

            },
            inputFive: {
                id: "date",
                name: "MM/DD/YYYY",
                type: "date",

            },
            inputSix: {
                id: "male",
                name: "Male",
                type: "radio",
                radio: 'gender'

            },
            inputSeven: {
                id: "female",
                name: "Female",
                type: "radio",
                radio: 'gender'

            },
            inputEight: {
                id: "github-link",
                name: "Git Hub Link",
                type: "text",

            },
        }

    },

    {
        cardTitle: "Education History",
        cardInputInformation: {
            inputOne: {
                id: "level-of-study",
                name: "Add Education",
                type: "text",
            },
            inputTwo: {
                id: "degree-type",
                name: "Add Education",
                type: "text",
            },
            inputThree: {
                id: "year-graduated",
                name: "Add Education",
                type: "text",
            },
            inputFour: {
                id: "year-graduated",
                name: "Add Education",
                type: "text",
            },

        }
    },

    {
        cardTitle: "Work Experience",
        cardInputInformation: {
            inputOne: {
                id: 'years-of-experience',
                name: 'Add Experience',
                type: 'text',


            },
            inputTwo: {
                id: 'resume',
                name: 'Add Experience',
                type: 'text',
            }

        }
    },

    {
        cardTitle: "Skills/Interests",
        cardInputInformation:{

            inputOne: {
                id: 'years-of-experience',
                name: 'Add Skill/Interest',
                type: 'text',
    
    
            },
        }
    }


]

export default userprofileData