import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

dotenv.config()

const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use("/images", express.static('uploads'))

//api endpoints
app.use("/api/food", foodRouter)
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
    res.send("API Working")
})

// Error handling middleware
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ success: false, message: 'Invalid JSON format' });
    }
    next(err);
});

let dbConnected = false

const ensureDbConnection = async () => {
    if (!dbConnected) {
        await connectDB()
        dbConnected = true
    }
}

app.use(async (req, res, next) => {
    try {
        await ensureDbConnection()
        next()
    } catch (error) {
        console.error('Database connection failed:', error)
        res.status(500).json({ success: false, message: 'Database connection failed' })
    }
})

if (!process.env.VERCEL) {
    const port = process.env.PORT || 4000
    ensureDbConnection().then(() => {
        app.listen(port, () => {
            console.log(`Server Started on http://localhost:${port}`)
        })
    }).catch((error) => {
        console.error('Failed to start local server:', error)
        process.exit(1)
    })
}

export default app
