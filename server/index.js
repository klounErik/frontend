const express = require('express')
const cors = require('cors')

const App = express()

const PORT = 8080 || process.env.PORT

App.use(cors())

App.get('/test', (req, res) => {
    res.send("test")
})

App.listen(PORT, (err) => {
    if(err){
        console.log("Could not connect to server")
    }
    console.log(`Connected to server on port: ${PORT}`)
})