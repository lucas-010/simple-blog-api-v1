describe("Role Controller", () => {
	describe("POST", () => {
		test("should return an id when creating a role and return status code 201", async () => {});

		test("should return an error and status code 409 when trying create a role with name existing", async () => {});

		test("should return an error and status code 400 when trying create a role with name empty", async () => {});

		test("should return an error and status code 400 when trying create a role with name of 1 character", async () => {});

		test("should return an error and status 400 when trying create a role with description empty", async () => {});

		test("should return an error and status code 400 when trying create a role with description of 1 character", async () => {});
	});

	describe("GET", () => {
		test("should return all roles and return status code 200", async () => {});

		test("by Id - should return a role according to the id passed and return status code 200", async () => {});

		test("by Id - should return an error and status code 400 when passing a non-integer value with id", async () => {});

		test("by Id - should return an object empty and status code 404 when passed id of role non-existing", async () => {});
	});

	describe("PUT", () => {
		test("should update a role by id and return the updated role and return status code 200", async () => {});

		test("should return an error with status code 404 when trying to update a non-existent role", async () => {});

		test("should return an error with status code 400 when trying to update a role with an empty name", async () => {});

		test("should return an error with status code 400 when trying to update a role with a name of 1 character", async () => {});

		test("should return an error with status code 409 when trying to update a role with a name existing", async () => {});

		test("should return an error with status code 400 when trying to update a role with an empty description", async () => {});

		test("should return an error with status code 400 when trying to update a role with a description of 1 character", async () => {});
	});

	describe("DELETE", () => {
		test("should delete a role by ID and return status code 204", async () => {});

		test("should return an error and status code 404 when trying to delete a non-existent role", async () => {});
	});
});
