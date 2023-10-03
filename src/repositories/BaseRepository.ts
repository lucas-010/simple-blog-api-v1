import { Knex } from "knex";
import databaseClient from "../database/config";

abstract class BaseRepository<T> {
	protected tableName: string;
	protected databaseClient: Knex;

	constructor(tableName: string) {
		this.tableName = tableName;
		this.databaseClient = databaseClient;
	}

	public async findAll(): Promise<T[]> {
		return await this.databaseClient(this.tableName).select("*");
	}

	public async findById(id: number): Promise<T> {
		return await this.databaseClient(this.tableName).where("id", id).first();
	}

	public async insert(item: T): Promise<number> {
		const [result] = await this.databaseClient(this.tableName)
			.insert(item)
			.returning("id");
		return result?.id || -1;
	}

	public async update(id: number, item: T): Promise<boolean> {
		const updatedCount = await this.databaseClient(this.tableName)
			.where("id", id)
			.update(item);
		return updatedCount > 0;
	}

	public async delete(id: number): Promise<boolean> {
		const result = await this.databaseClient(this.tableName)
			.where("id", id)
			.del();
		return result > 0;
	}
}

export default BaseRepository;
