import mongoose from "mongoose";

const clientSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
	},

	message: {
		type: String,
		required: true,
	},
});

const Client = mongoose.model("clients", clientSchema);

export default Client;
