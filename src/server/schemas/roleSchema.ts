import Joi from "joi";

const roleSchema = Joi.object({
	name: Joi.string().required().min(2),
	description: Joi.string().required().min(2),
});

export default roleSchema;
