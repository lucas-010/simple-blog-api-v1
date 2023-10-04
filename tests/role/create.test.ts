import testServer from "../jest.setup";
import { StatusCodes } from "http-status-codes";

describe("Role - Create", () => {
	test("should create a role with success and return status code 201 and id", async () => {
		const data = {
			name: "Test Role",
			description: "Test role description",
		};

		const response = await testServer.post("/role").send(data);

		expect(response.statusCode).toEqual(StatusCodes.CREATED);

		expect(response.body).toHaveProperty("id");

		expect(typeof response.body.id).toEqual("number");
	});

	test("should return an error and status code 400 when passing an empty name", async () => {
		const data = {
			name: "",
			description: "Test role description",
		};

		const response = await testServer.post("/role").send(data);

		expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST);

		expect(response.body).toHaveProperty("errors");

		expect(response.body.errors.details[0].path[0]).toEqual("name");
	});

	test("should return an error and status code 400 when passing an name with 1 character", async () => {
		const data = {
			name: "T",
			description: "Test role description",
		};

		const response = await testServer.post("/role").send(data);

		expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST);

		expect(response.body).toHaveProperty("errors");

		expect(response.body.errors.details[0].path[0]).toEqual("name");
	});

	test("should return an error and status code 400 when passing an empty description", async () => {
		const data = {
			name: "Test Role 2",
			description: "",
		};

		const response = await testServer.post("/role").send(data);

		expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST);

		expect(response.body).toHaveProperty("errors");

		expect(response.body.errors.details[0].path[0]).toEqual("description");
	});

	test("should return an error and status code 400 when passing an description with 1 character", async () => {
		const data = {
			name: "Test Role 3",
			description: "",
		};

		const response = await testServer.post("/role").send(data);

		expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST);

		expect(response.body).toHaveProperty("errors");

		expect(response.body.errors.details[0].path[0]).toEqual("description");
	});

	test("should return an error and status code 409 when passing an name duplicate", async () => {
		const data = {
			name: "Test Role 4",
			description: "Test role description",
		};

		const response = await testServer.post("/role").send(data);

		expect(response.statusCode).toEqual(StatusCodes.CREATED);

		expect(response.body).toHaveProperty("id");

		expect(typeof response.body.id).toEqual("number");

		const data2 = {
			name: "Test Role 4",
			description: "Test role description",
		};

		const response2 = await testServer.post("/role").send(data2);

		expect(response2.statusCode).toEqual(StatusCodes.CONFLICT);

		expect(response2.body).toHaveProperty("error");
	});
});
