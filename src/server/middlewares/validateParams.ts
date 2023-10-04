import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { Schema } from "joi";

function validateParams(schema: Schema) {
	return (
		request: Request<{ id: number }>,
		response: Response,
		next: NextFunction
	) => {
		const { error } = schema.validate(request.params);
		if (error) {
			return response.status(StatusCodes.BAD_REQUEST).json({ errors: error });
		}
		return next();
	};
}

export default validateParams;
