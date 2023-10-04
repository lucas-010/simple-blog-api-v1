import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Schema } from "joi";

function validateBody(schema: Schema) {
	return (request: Request, response: Response, next: NextFunction) => {
		const { error } = schema.validate(request.body, { abortEarly: false });
		if (error) {
			return response.status(StatusCodes.BAD_REQUEST).json({ errors: error });
		}
		return next();
	};
}

export default validateBody;
