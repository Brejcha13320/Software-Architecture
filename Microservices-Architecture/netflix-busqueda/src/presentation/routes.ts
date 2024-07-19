import { Router } from "express";
import { SearchRoutes } from "./search/search.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    //Definir Rutas
    router.use("/api/search", SearchRoutes.routes);

    return router;
  }
}
