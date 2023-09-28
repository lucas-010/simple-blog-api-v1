import { Knex } from "knex";

export const seed = async (knex: Knex) => {
	const [{ count }] =
		await knex("category").count<[{ count: number }]>("* as count");

	if (!Number.isInteger(count) || Number(count) > 0) return;
	const categoriesToInsert = categories.map((nameCategory) => ({
		name: nameCategory,
	}));
	await knex("category").insert(categoriesToInsert);
};

const categories = [
	"Alimentação",
	"Meio Ambiente",
	"Automóveis",
	"Família",
	"Finanças",
	"História",
	"Tutoriais",
	"Dicas de Estudo",
	"Viagens",
	"Culinária",
	"Animais de Estimação",
	"Música",
	"Livros",
];
