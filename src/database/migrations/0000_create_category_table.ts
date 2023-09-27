import { Knex } from "knex";

export const up = async (knex: Knex) => {
	await knex.schema
		.createTable("category", (table) => {
			table.increments("id").primary().index();
			table.string("name").notNullable().unique().index().checkLength(">=", 2);
		})
		.then(() => {
			console.log("# Created table category");
		});
};

export const down = async (knex: Knex) => {
	await knex.schema.dropTable("category").then(() => {
		console.log("# Dropped table category");
	});
};
