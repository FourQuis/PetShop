require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const path = require('path')
const paypal = require('paypal-rest-sdk')

//Paypal Config
paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'Afne3QxAj6Mf7CrHhuZDr9c41bHpyuU1P0aXsS8GcpiucjQMUAmKXWb1i_w5UM9Qw0kbHdVZLbV_vYNE'
    ,
    'client_secret': 'ENClMwG8NU5hN3XwQVX-EYLx5BawpEDUUrgEv3aZOSP5MeZIpbGFbthIBPLfBloYqYaGhrOJ4Bx5iuCf'
})


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

// Routes
app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/categoryRouter'))
app.use('/api', require('./routes/typeRouter'))
app.use('/api', require('./routes/imgRouter'))
app.use('/api', require('./routes/productRouter'))
app.use('/api', require('./routes/paymentRouter'))
app.use('/api', require('./routes/feedbackRouter'))
app.use('/api', require('./routes/address/townRouter'))
app.use('/api', require('./routes/address/district'))
app.use('/api', require('./routes/address/province'))
app.use('/api', require('./routes/orderRouter'))
app.use("/api", require("./routes/paypalRouter"))



// Connect to mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log('Connected to MongoDB')
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})