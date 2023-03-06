import express from "express";
const router = express.Router();

// importing the services from the controllers
import { registerClient } from "../controllers/clientService.js";

router.post("/", async (req, res) => {
	const register = await registerClient(req, res);
	return res
		.status(200)
		.json({ message: "Received your message. I will contact you asap." });
});

export default router;
