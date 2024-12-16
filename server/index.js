require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./routes/student.routes')
const connectDB = require('./database/db')

app.use(express.json())
app.use('/api',router)

const PORT = 6000
connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running at port ${PORT}`)
    })
})