const express = require('express')
const app = express()
const cors = require('cors')

app.set('PORT', process.env.PORT || 3001)

app.use(express.json())
app.use(cors())

app.listen(app.get('PORT'), ()=>{
    console.log(`Server running to port: ${app.get('PORT')} `)
})

app.use('/sendMail', require('./Routes/Contact'))