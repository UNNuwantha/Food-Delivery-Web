import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'


dotenv.config()

const startServer = async () => {
    try {
        // db connection
        await connectDB();

        //app config
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

        if (process.env.NODE_ENV !== "production") {
            const port = 4000
            app.listen(port, () => {
                console.log(`Server Started on http://localhost:${port}`)
            })
       
        }
    } catch (error) {
        console.error('Failed to start server:', error)
        process.exit(1)
    }
}

startServer()

export default startServer;