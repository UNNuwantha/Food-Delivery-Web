import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'

dotenv.config()

const startServer = async () => {
    try {
        // db connection
        await connectDB();
        
        //app config
        const app = express()
        const port = 4000

        //middleware
        app.use(express.json())
        app.use(cors())
        app.use("/images", express.static('uploads'))

        //api endpoints
        app.use("/api/food", foodRouter)

        app.get("/", (req, res) => {
            res.send("API Working")
        })

        app.listen(port, () => {
            console.log(`Server Started on http://localhost:${port}`)
        })
    } catch (error) {
        console.error('Failed to start server:', error)
        process.exit(1)
    }
}

startServer()