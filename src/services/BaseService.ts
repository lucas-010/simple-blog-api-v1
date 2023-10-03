import BaseRepository from "../repositories/BaseRepository";

abstract class BaseService<T, R extends BaseRepository<T>> {
	protected repository: R;

	constructor(repository: R) {
		this.repository = repository;
	}

	async getAll(): Promise<T[]> {
		try {
			return (await this.repository.findAll()) || [];
		} catch {
			throw new Error("Failed to fetch all records.");
		}
	}

	async getById(id: number): Promise<T> {
		try {
			return await this.repository.findById(id);
		} catch {
			throw new Error("Failed to fetch record by ID.");
		}
	}

	async create(item: T): Promise<number> {
		try {
			return await this.repository.insert(item);
		} catch {
			throw new Error("Failed to create record.");
		}
	}

	async update(id: number, item: T): Promise<boolean> {
		try {
			return await this.repository.update(id, item);
		} catch {
			throw new Error("Failed to update record.");
		}
	}

	async delete(id: number): Promise<boolean> {
		try {
			return await this.repository.delete(id);
		} catch {
			throw new Error("Failed to delete record.");
		}
	}
}

export default BaseService;
