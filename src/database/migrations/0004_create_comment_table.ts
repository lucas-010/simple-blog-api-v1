import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
	await knex.schema
		.createTable("user", (table) => {
			table.increments("id").primary().index();
			table.string("text").notNullable().checkLength(">=", 1);
			table.integer("userId").unsigned();
			table.foreign("userId").references("user.id");
			table.integer("articleId").unsigned();
			table.foreign("articleId").references("article.id");
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
