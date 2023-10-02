import { Knex } from "knex";

class BaseRepository<T> {
	protected tableName: string;
	protected databaseClient: Knex;

	constructor(tableName: string, databaseClient: Knex) {
		this.tableName = tableName;
		this.databaseClient = databaseClient;
	}

	public async findAll(): Promise<T[]> {
		return await this.databaseClient(this.tableName).select("*");
	}

	public async findById(id: number): Promise<T | null> {
		return await this.databaseClient(this.tableName).where("id", id).first();
	}

	public async insert(item: T): Promise<number | null> {
		const [result] = await this.databaseClient(this.tableName)
			.insert(item)
			.returning("id");
		return result?.id || null;
	}

	public async update(id: number, item: T): Promise<T | null> {
		const updatedCount = await this.databaseClient(this.tableName)
			.where("id", id)
			.update(item);
		return updatedCount > 0 ? await this.findById(id) : null;
	}

	public async delete(id: number): Promise<boolean> {
		const result = await this.databaseClient(this.tableName)
			.where("id", id)
			.del();
		return result > 0;
	}
}

export default BaseRepository;
