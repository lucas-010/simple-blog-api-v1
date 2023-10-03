import { Request, Response } from "express";
import BaseService from "../../services/BaseService";
import { StatusCodes } from "http-status-codes";

abstract class BaseController<T, S extends BaseService<T, any>> {
	protected service: S;

	constructor(service: S) {
		this.service = service;
	}

	async post(
		request: Request<object, object, T>,
		response: Response
	): Promise<Response> {
		try {
			const item: T = request.body;
			const result = await this.service.create(item);
			return response.status(StatusCodes.CREATED).json({ id: result });
		} catch (error) {
			return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
		}
	}

	async getAll(request: Request, response: Response) {
		try {
			const result = await this.service.getAll();
			if (result.length > 0) {
				return response.status(StatusCodes.OK).json(result);
			}
			return response
				.status(StatusCodes.NOT_FOUND)
				.json({ message: "No records found" });
		} catch (error) {
			return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
		}
	}

	async getById(request: Request<{ id: number }>, response: Response) {
		try {
			const result = await this.service.getById(request.params.id);
			if (result) {
				return response.status(StatusCodes.OK).json(result);
			}
			return response
				.status(StatusCodes.NOT_FOUND)
				.json({ message: "Record not found" });
		} catch (error) {
			return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
		}
	}

	async put(
		request: Request<{ id: number }, object, Partial<T>>,
		response: Response
	): Promise<Response> {
		try {
			const id = request.params.id;
			const item: Partial<T> = request.body;
			const result = await this.service.update(id, item);
			if (result) {
				return response
					.status(StatusCodes.OK)
					.json({ message: "Updated successfully" });
			}
			return response
				.status(StatusCodes.UNPROCESSABLE_ENTITY)
				.json({ message: "Unable to update record" });
		} catch (error) {
			return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
		}
	}

	async delete(
		request: Request<{ id: number }>,
		response: Response
	): Promise<Response> {
		try {
			const id = request.params.id;
			const result = await this.service.delete(id);
			if (result) {
				return response
					.status(StatusCodes.OK)
					.json({ message: "Successfully deleted" });
			}
			return response
				.status(StatusCodes.NOT_FOUND)
				.json({ message: "Unable to delete record" });
		} catch (error) {
			return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
		}
	}
}

export default BaseController;
