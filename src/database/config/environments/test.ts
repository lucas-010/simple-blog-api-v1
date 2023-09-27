import { Knex } from "knex";
import path from "path";

const test: Knex.Config = {
	client: "sqlite3",
	connection: ":memory:",
	migrations: {
		directory: path.resolve(__dirname, "..", "..", "migrations"),
	},
	seeds: {
		directory: path.resolve(__dirname, "..", "..", "seeds"),
	},
};

export default test;
