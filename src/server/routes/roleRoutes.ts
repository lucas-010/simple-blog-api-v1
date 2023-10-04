import { Request, Response, Router } from "express";
import RoleController from "../controllers/RoleController";
import validateBody from "../middlewares/validateBody";
import roleSchema from "../schemas/roleSchema";
import idSchema from "../schemas/idSchema";
import validateParams from "../middlewares/validateParams";

const router = Router();

router.post(
	"/",
	validateBody(roleSchema),
	async (request: Request, response: Response) =>
		await RoleController.create(request, response)
);

router.get("/", async (request: Request, response: Response) => {
	await RoleController.getAll(request, response);
});

router.get(
	"/:id",
	async (request: Request<{ id: number }>, response: Response) => {
		await RoleController.getById(request, response);
	}
);

router.put(
	"/:id",
	validateParams(idSchema),
	async (request: Request<{ id: number }>, response: Response) => {
		await RoleController.update(request, response);
	}
);

export default router;
