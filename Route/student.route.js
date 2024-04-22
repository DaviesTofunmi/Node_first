const express = require("express")
const router = express.Router()
const {studentsignup, getlandingpage, getstudentsignup, studentlogin} = require("../controller/student.controller")
const { uservalidation } = require("../middleware/uservalidation")
const {validate}= require("../middleware/validator")
const yup= require("yup")



router.get('/', getlandingpage)
router.get("/signup", getstudentsignup)
router.post('/register', validate(uservalidation), studentsignup)
router.post('/login', studentlogin)



module.exports = router