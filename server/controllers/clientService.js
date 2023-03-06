import Client from "../models/clientModel.js";

// Not exactly register
export const registerClient = async (req, res) => {
	try {
		let { name, email, message } = req.body;
		console.log(name, email, message);

		if (!name || !email || !message) {
			return res
				.status(200)
				.json({ error: "Please fill out all the fields." });
		}

		// Made a new client using the Client model
		const newClient = new Client({ name, email, message });

		// Saving the client into the database
		const savedClient = await newClient.save();
		console.log(
			"Printing the saved client into the database: ",
			savedClient
		);
		return savedClient;
	} catch (error) {
		console.log(error);
	}
};
