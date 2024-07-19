import { Router } from "express";
import { CategoryController } from "./category.controller";
import { CategoryService } from "../services/category.service";

export class CategoryRoutes {
  static get routes(): Router {
    const router = Router();
    const service = new CategoryService();
    const controller = new CategoryController(service);

    router.get("/", controller.getCategories);

    return router;
  }
}
