import express from "express";
const app = express();

// Importing some other modules
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Database connection using mongoose
import connectToDatabase from "./database/conn.js";
connectToDatabase();

// Importing all the routes
import authRoute from "./routes/authRoutes.js";
import contactRoute from "./routes/contactRoutes.js";

// All routes
app.use("/contact", contactRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server started running at port ${PORT}`);
});
