import production from "./environments/production";
import development from "./environments/development";
import test from "./environments/test";

const environment = process.env.NODE_ENV;

function getEnvironment() {
	if (environment === "production") return production;
	else if (environment === "test") return test;
	return development;
}

export default getEnvironment;
