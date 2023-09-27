import { Knex } from "knex";
import path from "path";

const development: Knex.Config = {
	client: "sqlite3",
	connection: {
		filename: path.resolve(
			__dirname,
			"..",
			"..",
			"..",
			"..",
			"database.sqlite"
		),
	},
	migrations: {
		directory: path.resolve(__dirname, "..", "..", "migrations"),
	},
	seeds: {
		directory: path.resolve(__dirname, "..", "..", "seeds"),
	},
	useNullAsDefault: true,
	pool: {
		afterCreate: (
			conn: { run: (arg0: string, arg1: unknown) => void },
			cb: unknown
		) => {
			conn.run("PRAGMA foreign_keys = ON", cb);
		},
	},
};

export default development;
