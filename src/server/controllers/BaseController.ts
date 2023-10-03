import { Request, Response } from "express";
import BaseService from "../../services/BaseService";
import { StatusCodes } from "http-status-codes";

abstract class BaseController<T, S extends BaseService<T, any>> {
	protected service: S;

	constructor(service: S) {
		this.service = service;
	}

	async create(
		req: Request<object, object, T>,
		res: Response
	): Promise<Response> {
		try {
			const item: T = req.body;
			const id = await this.service.create(item);
			return res.status(StatusCodes.CREATED).json({ id });
		} catch (error) {
			return res
				.status(StatusCodes.INTERNAL_SERVER_ERROR)
				.json({ error: "Failed to create" });
		}
	}

	async getAll(req: Request, res: Response): Promise<Response> {
		try {
			const result = await this.service.getAll();
			if (result.length > 0) {
				return res.status(StatusCodes.OK).json(result);
			}
			return res
				.status(StatusCodes.NOT_FOUND)
				.json({ message: "No items found" });
		} catch (error) {
			return res
				.status(StatusCodes.INTERNAL_SERVER_ERROR)
				.json({ error: "Failed to fetch all" });
		}
	}

	async getById(
		req: Request<{ id: number }>,
		res: Response
	): Promise<Response> {
		try {
			const result = await this.service.getById(req.params.id);
			if (result) {
				return res.status(StatusCodes.OK).json(result);
			}
			return res
				.status(StatusCodes.NOT_FOUND)
				.json({ message: "Item not found" });
		} catch (error) {
			return res
				.status(StatusCodes.INTERNAL_SERVER_ERROR)
				.json({ error: "Failed to fetch by ID" });
		}
	}

	async update(
		req: Request<{ id: number }, object, Partial<T>>,
		res: Response
	): Promise<Response> {
		try {
			const id = req.params.id;
			const item: Partial<T> = req.body;
			const success = await this.service.update(id, item);
			if (success) {
				return res
					.status(StatusCodes.OK)
					.json({ message: "Updated successfully" });
			}
			return res
				.status(StatusCodes.UNPROCESSABLE_ENTITY)
				.json({ message: "Unable to update" });
		} catch (error) {
			return res
				.status(StatusCodes.INTERNAL_SERVER_ERROR)
				.json({ error: "Failed to update" });
		}
	}

	async delete(req: Request<{ id: number }>, res: Response): Promise<Response> {
		try {
			const id = req.params.id;
			const success = await this.service.delete(id);
			if (success) {
				return res
					.status(StatusCodes.OK)
					.json({ message: "Successfully deleted" });
			}
			return res
				.status(StatusCodes.NOT_FOUND)
				.json({ message: "Unable to delete" });
		} catch (error) {
			return res
				.status(StatusCodes.INTERNAL_SERVER_ERROR)
				.json({ error: "Failed to delete" });
		}
	}
}

export default BaseController;
