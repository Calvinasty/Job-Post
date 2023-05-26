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
                name: "DD/MM/YYYY",
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
                name: "Level of Study",
                type: "text",
            },
            inputTwo: {
                id: "degree-type",
                name: "Degree Type",
                type: "text",
            },
            inputThree: {
                id: "year-graduated",
                name: "Year Graduated",
                type: "text",
            },

        }
    },

    {
        cardTitle: "Work Experience",
        cardInputInformation: {
            inputOne: {
                id: 'years-of-experience',
                name: 'Year of experience',
                type: 'text',


            },
            inputTwo: {
                id: 'resume',
                name: 'Resume/CV',
                type: 'file',
            }

        }
    },

    {
        cardTitle: "Skills/Interests",

    }


]

export default userprofileData