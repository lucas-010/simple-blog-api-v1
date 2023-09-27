const config = {
	clearMocks: true,
	coverageProvider: "v8",
	setupFilesAfterEnv: ["./tests/jest.setup.ts"],
	testMatch: ["<rootDir>/tests/**/*.test.ts"],
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
	},
};

export default config;
