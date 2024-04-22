const { match } = require("assert")
const yup= require("yup")

const emailregex= /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/

const uservalidation= yup.object().shape({
    // companyname: yup.string().min(2, 'Too Short!').required('company name is required'),
    username: yup.string().min(2, 'Too Short!'),
    email: yup.string().required('email is required').matches(emailregex, 'email must be valid'),
    password: yup.number().required('password is required')
})

module.exports= {uservalidation}