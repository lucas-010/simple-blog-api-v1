import Role from "../models/Role";
import BaseRepository from "./BaseRepository";

class RoleRepository extends BaseRepository<Role> {
	constructor() {
		super("role");
	}
}

export default RoleRepository;
