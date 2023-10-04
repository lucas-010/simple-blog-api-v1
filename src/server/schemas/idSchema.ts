import Joi from "joi";

const idSchema = Joi.object({
	id: Joi.number().integer().min(1).required(),
});

export default idSchema;
