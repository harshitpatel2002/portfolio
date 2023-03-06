import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URI = process.env.URI;

mongoose.set("strictQuery", true);

const connectToDatabase = async () => {
	try {
		await mongoose.connect(URI, () => {
			console.log("Successfully connected to the database");
		});
	} catch (error) {
		console.log("Could not connect to the database");
	}
};

export default connectToDatabase;
