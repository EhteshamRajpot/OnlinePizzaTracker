const mongoose = require("mongoose")
	const connectDB = () => {
		try{
			const url = process.env.MONGO_URI;
			const conn = mongoose.connect(url, {})
			console.log(`MongoDB DataBase Connected! ${conn.connection.host}`)
		}
		catch(error) {
			console.log(`error: ${error.message}`)
		}
	}

	module.exports = connectDB;