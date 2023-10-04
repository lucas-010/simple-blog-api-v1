import express from "express";
import roleRoutes from "./routes/roleRoutes";

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use("/role", roleRoutes);

export default server;
