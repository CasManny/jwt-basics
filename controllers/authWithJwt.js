const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { StatusCodes } = require('http-status-codes')

const register = asyncHandler (async (req, res) => {
    const { name, email, password } = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    res.status(StatusCodes.OK).json({user: {
        name,
        email,
        password: hashedPassword,
        token: generateToken(email)
    }})
    

}) 

const login = asyncHandler( async (req, res) => {
    res.send(`hello user this is your email ${req.user}`)
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
}



module.exports = { login, register }