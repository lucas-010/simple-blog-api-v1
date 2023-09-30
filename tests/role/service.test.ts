describe("Role Service", () => {
	describe("Create", () => {
		test("should return an id when creating a role", async () => {});

		test("should return an error with status code 400 when trying crating a role with name empty", async () => {});

		test("should return an error with status code 400 when trying creating a role with a name of 1 character", async () => {});

		test("should return an error with status code 409 when trying creating a role with name existing", async () => {});

		test("should return an error with status code 400 when trying creating a role with description empty", async () => {});

		test("should return an error with status code 400 when trying creating a role with description of 1 character", async () => {});
	});

	describe("Get", () => {
		test("by Id - should return a role according to the id passed", async () => {});

		test("by Id - should return an object empty to id of role non-existing", async () => {});

		test("by Name - should return a role according to the name passed", async () => {});

		test("by Name - should return an object empty to name of role non-existing", async () => {});
	});

	describe("Delete", () => {
		test("should delete a role by ID and return true", async () => {});

		test("should return false when trying to delete a non-existent role", async () => {});
	});

	describe("Update", () => {
		test("should update a role by id and return the updated role", async () => {});

		test("should return an error with status code 404 when trying to update a non-existent role", async () => {});

		test("should return an error with status code 400 when trying to update a role with an empty name", async () => {});

		test("should return an error with status code 400 when trying to update a role with a name of 1 character", async () => {});

		test("should return an error with status code 409 when trying to update a role with a name existing", async () => {});

		test("should return an error with status code 400 when trying to update a role with an empty description", async () => {});

		test("should return an error with status code 400 when trying to update a role with a description of 1 character", async () => {});
	});

	describe("Check Name", () => {
		test("should return true when passed name existing", async () => {});

		test("should return false when passed name non-existing", async () => {});
	});
});
