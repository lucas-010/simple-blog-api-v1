import { Request, Response } from "express";
import Role from "../../models/Role";
import RoleService from "../../services/RoleService";
import BaseController from "./BaseController";
import { StatusCodes } from "http-status-codes";

class RoleController extends BaseController<Role, RoleService> {
	constructor() {
		super(new RoleService());
	}

	async create(
		request: Request<object, object, Role>,
		response: Response
	): Promise<Response> {
		try {
			const nameExists = await this.service.checkIfNameExists(
				request.body.name
			);
			if (nameExists) {
				return response
					.status(StatusCodes.CONFLICT)
					.json({ error: "Name already exists" });
			}
			return super.create(request, response);
		} catch (error) {
			return response
				.status(StatusCodes.INTERNAL_SERVER_ERROR)
				.json({ error: "Failed to create role" });
		}
	}
}

export default RoleController;
