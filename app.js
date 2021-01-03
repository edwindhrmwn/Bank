const express = require('express')
const app = express()
const customer = require('./routers/index')
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended:true }))

app.use('/', customer)

app.listen(port, () => {
    console.log('connected');
})