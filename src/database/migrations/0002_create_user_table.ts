import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
	await knex.schema
		.createTable("user", (table) => {
			table.increments("id").primary().index();
			table.string("name").notNullable().checkLength(">=", 3);
			table.string("email").notNullable().unique().index().checkLength(">=", 5);
			table.string("password").notNullable().checkLength(">=", 8);
			table.integer("roleId").unsigned();
			table.foreign("roleId").references("role.id");
		})
		.then(() => {
			console.log("# Created table user");
		});
};

export const down = async (knex: Knex): Promise<void> => {
	await knex.schema.dropTable("user").then(() => {
		console.log("# Dropped table user");
	});
};
