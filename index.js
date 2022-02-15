require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const authRoutes = require('./routes/authWithJwt')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/v1/auth',authRoutes)


app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))