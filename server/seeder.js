const mongoose = require("mongoose")
const dotenv = require("dotenv")
const connectDB = require('./config')
const Pizza = require("./models/pizzaModels")
const PizzaData = require("./data/pizza-data")

// config dot env and MongoDB conn file
dotenv.config()
connectDB()
//  Import Data
const importData = async() => {
		try {
			await Pizza.deleteMany()
			const sampleData = PizzaData.map(pizza => {	return {...pizza}})
			await Pizza.insertMany(sampleData)
			console.log(sampleData)
			console.log("Data Imported in the DataBase...")
			process.exit()
		}
		catch(error){
			console.log(`${error.message}`)
			process.exit(1)
		}
}

const dataDestroy = () => {}

if(process.argv[2] === "-d"){
    dataDestroy()
}else{
	importData()
}