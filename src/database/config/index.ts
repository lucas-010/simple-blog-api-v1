import { knex } from "knex";
import "dotenv/config";
import getEnvironment from "./getEnvironment";

const databaseClient = knex(getEnvironment());

export default databaseClient;
