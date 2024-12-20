require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./routes/student.routes')
const connectDB = require('./database/db')
const cors = require('cors')

const corsOption ={
    origin: "http://localhost:5173",
    methods: "PUT,POST,GET,PATCH,DELETE"
}

app.use(cors(corsOption))
app.use(express.json())
app.use('/api',router)

const PORT = 4000
connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running at port ${PORT}`)
    })
})