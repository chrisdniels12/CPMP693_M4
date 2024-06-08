// Import Express with the 'type': 'module' property set in 'package.json'
// import express from "express";
// Create an Express app:
// const app = express()
// Set the 'public' folder as a static folder
// app.use(express.static("public"))
// Define a route for the '/' path to load 'index.html' from the 'public' folder
// app.get("/", (req, res) => res.sendFile(__dirname + "/public/index.html"))
// Have the app listen on port 5000
// app.listen(5000, () => {
//     console.log("server is running on port 5000")
// })
//  an Express server to serve static files from the 'public' folder and listens for incoming requests on port 5000.
//  When a request is made to the root path '/', it responds by sending the 'index.html' file from the 'public' folder.

import express from 'express'
import {} from 'dotenv/config'
import routes from './routes/routes.js'
import connectDB from './db/connect.js'
import bodyParser from 'body-parser'

const app = express()
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', routes)

const PORT = process.env.PORT || 5000

const init = async () => {
    try {
        await connectDB(process.env.DB)
        console.log('Connected to the database...')
        app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
    } catch (err) {
        console.log(err)
    }
}
init()