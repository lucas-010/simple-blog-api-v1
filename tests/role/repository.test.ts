describe("Role Repository", () => {
	describe("Insertion", () => {
		test("should return the id of the inserted role", async () => {});

		test("should return an error when trying to insert a role with an empty name", async () => {});

		test("should return an error when trying to insert name existing", async () => {});

		test("should return an error when trying to insert a role with a name of 1 character", async () => {});

		test("should return an error when trying to insert an description empty", async () => {});

		test("should return an error when trying to insert a role with a description of 1 character", async () => {});

		test("should return an error when trying to insert a role with an empty description", async () => {});
	});

	describe("Selection", () => {
		test("by ID - should return a role according to the given ID", async () => {});

		test("by Name - should return a role according to the given name", async () => {});

		test("by ID - should return an empty object when searching for a non-existent role ID", async () => {});

		test("by Name - should return an empty object when searching for a non-existent role name", async () => {});
	});

	describe("Deletion", () => {
		test("should delete a role by ID and return true", async () => {});

		test("should return false when trying to delete a non-existent role", async () => {});
	});

	describe("Update", () => {
		test("should update a role and return the updated role", async () => {});

		test("should return error when trying update name empty", async () => {});

		test("should return error when trying update name of 1 character", async () => {});

		test("should return error when trying update description empty", async () => {});

		test("should return error when trying update description of 1 character", async () => {});

		test("should return null when trying to update a non-existent role", async () => {});
	});
});
