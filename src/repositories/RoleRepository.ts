import Role from "../models/Role";
import BaseRepository from "./BaseRepository";

class RoleRepository extends BaseRepository<Role> {
	constructor() {
		super("role");
	}

	async findByName(name: string): Promise<Role> {
		return await this.databaseClient(this.tableName)
			.select("*")
			.where("name", name)
			.first();
	}
}

export default RoleRepository;
