import supertest from "supertest";
import server from "../src/server/server";
import databaseClient from "../src/database/config";

const testServer = supertest(server);

beforeAll(async () => {
	await databaseClient.migrate.latest();
	await databaseClient.seed.run();
});

afterAll(async () => {
	await databaseClient.destroy();
});

export default testServer;
