import { Router } from "express";
import { SearchService } from "../services/search.service";
import { SearchController } from "./search.controller";

export class SearchRoutes {
  static get routes(): Router {
    const router = Router();
    const service = new SearchService();
    const controller = new SearchController(service);

    router.get("/", controller.getSearch);

    return router;
  }
}
