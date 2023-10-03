import Role from "../models/Role";
import RoleRepository from "../repositories/RoleRepository";
import BaseService from "./BaseService";

class RoleService extends BaseService<Role, RoleRepository> {
	constructor() {
		super(new RoleRepository());
	}

	async checkIfNameExists(name: string): Promise<boolean> {
		try {
			const nameAlreadyExists = await this.repository.findByName(name);
			return !!nameAlreadyExists;
		} catch {
			throw new Error("Failed to fetch record by name.");
		}
	}
}

export default RoleService;
