import { Knex } from "knex";

export const up = async (knex: Knex) => {
	await knex.schema
		.createTable("role", (table) => {
			table.increments("id").primary().index();
			table.string("name").notNullable().unique().index().checkLength(">=", 2);
		})
		.then(() => {
			console.log("# Created table role");
		});
};

export const down = async (knex: Knex) => {
	await knex.schema.dropTable("role").then(() => {
		console.log("# Dropped table role");
	});
};
