import express  from "express"
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from "./routes/foodRoute.js";
//import userModel from "./models/userModel.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js"
import 'dotenv/config.js'
import orderModel from "./models/orderModel.js";
import orderRouter from "./routes/orderRoute.js";



// app config
const app = express()
const port = process.env.PORT || 4000;


// middlewares
app.use(express.json())
app.use(cors())

//db connection
connectDB();


//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order",orderRouter)




app.get("/", (req, res) => {
    res.send("API Working")
  });

app.listen(port, () => console.log(`Server started on http://localhost:${port}`))


//mongodb+srv://fd-app:mern@cluster0.pdksore.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0