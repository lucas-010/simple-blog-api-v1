import { Knex } from "knex";
import databaseClient from "../database/config";

abstract class BaseRepository<T> {
	protected tableName: string;
	protected databaseClient: Knex;

	constructor(tableName: string) {
		this.tableName = tableName;
		this.databaseClient = databaseClient;
	}

	public async findAll(): Promise<T[] | null> {
		return await this.databaseClient(this.tableName).select("*");
	}

	public async findById(id: number): Promise<T | null> {
		return await this.databaseClient(this.tableName).where("id", id).first();
	}

	public async insert(item: T): Promise<number | null> {
		try {
			const [result] = await this.databaseClient(this.tableName)
				.insert({ ...item })
				.returning("id");
			return result.id;
		} catch (error) {
			throw new Error(`Error inserting item: ${(error as Error).message}`);
		}
	}

	public async update(id: number, item: T): Promise<T | null> {
		try {
			await this.databaseClient(this.tableName).where("id", id).update(item);
			return this.findById(id);
		} catch (error) {
			throw new Error(`Error updating item: ${(error as Error).message}`);
		}
	}

	public async delete(id: number): Promise<boolean> {
		const result = await this.databaseClient(this.tableName)
			.where("id", id)
			.del();
		return result > 0;
	}
}

export default BaseRepository;
