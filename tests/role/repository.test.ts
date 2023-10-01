import RoleRepository from "../../src/repositories/RoleRepository";

describe("Role Repository", () => {
	let roleRepository: RoleRepository;

	beforeEach(() => {
		roleRepository = new RoleRepository();
	});

	describe("Insertion", () => {
		test("should return the id of the inserted role", async () => {
			const data = {
				name: "Test",
				description: "Test test",
			};

			const insertedRoleId = await roleRepository.insert(data);

			try {
				expect(insertedRoleId).toBeGreaterThan(0);
			} finally {
				if (insertedRoleId) roleRepository.delete(insertedRoleId);
			}
		});

		test("should throw an error when trying to insert a role with invalid data", async () => {
			const data = {
				name: "",
				description: "Test test",
			};

			await expect(roleRepository.insert(data)).rejects.toThrowError(
				"Error inserting item"
			);
		});
	});

	describe("Selection", () => {
		test("should return all roles", async () => {
			const data = {
				name: "Test",
				description: "Test test",
			};

			const insertedRoleId = await roleRepository.insert(data);

			try {
				const result = await roleRepository.findAll();
				expect(result?.length).toBeGreaterThan(0);
			} finally {
				if (insertedRoleId) roleRepository.delete(insertedRoleId);
			}
		});

		test("should return an empty array for non-existent data", async () => {
			const result = await roleRepository.findAll();
			expect(result).toEqual([]);
		});
	});

	describe("Deletion", () => {
		test("should delete a role by ID and return true", async () => {
			const data = {
				name: "Test",
				description: "Test test",
			};

			const insertedRoleId = await roleRepository.insert(data);

			try {
				const deletionResult = await roleRepository.delete(insertedRoleId!);
				expect(deletionResult).toBeTruthy();
			} finally {
				if (insertedRoleId) roleRepository.delete(insertedRoleId);
			}
		});

		test("should return false when trying to delete a non-existent role", async () => {
			const deletionResult = await roleRepository.delete(-1);
			expect(deletionResult).toBeFalsy();
		});
	});

	describe("Update", () => {
		test("should update a role and return the updated role", async () => {
			const data = {
				name: "Test",
				description: "Test test",
			};

			const insertedRoleId = await roleRepository.insert(data);

			try {
				const newData = {
					name: "UpdatedTest",
					description: "Updated description",
				};

				const updatedRole = await roleRepository.update(
					insertedRoleId!,
					newData
				);

				expect(updatedRole).toEqual({ ...newData, id: insertedRoleId });
			} finally {
				if (insertedRoleId) roleRepository.delete(insertedRoleId);
			}
		});

		test("should return null when trying to update a non-existent role", async () => {
			const data = {
				name: "NonExistentRole",
				description: "NonExistent description",
			};

			const updatedRole = await roleRepository.update(-1, data);
			expect(updatedRole).toBeNull();
		});
	});
});
