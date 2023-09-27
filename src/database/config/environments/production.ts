import { Knex } from "knex";
import path from "path";

const production: Knex.Config = {
	client: "mysql2",
	connection: {
		host: process.env.DATABASE_HOST,
		user: process.env.DATABASE_USER,
		password: process.env.DATABASE_PASSWORD,
		database: "questions-answers-v1",
	},
	migrations: {
		directory: path.resolve(__dirname, "..", "..", "migrations"),
	},
	seeds: {
		directory: path.resolve(__dirname, "..", "..", "seeds"),
	},
};

export default production;
