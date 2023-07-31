const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require("cors")
const connectDB = require('./config')


//  Configuration
dotenv.config();
// Connection mongoDB
connectDB();
const app = express();
// MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Route
app.use('/api/pizzas', require("./routes/pizzaRouter"))
app.use('/api/users', require("./routes/userRouter"))
app.use("/api/orders", require("./routes/orderRoutes"))
app.get("/", (req, res) => {
	res.send("<h1>Hello from Node.js Server...!</h1>")
})

const portNumber = process.env.PORT || 4000;
app.listen( portNumber, ()=> {
	console.log(`Server is running on Port ${portNumber}`)
})

// console.log("Hello")