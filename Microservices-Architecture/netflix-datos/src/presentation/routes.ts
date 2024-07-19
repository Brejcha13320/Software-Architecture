import { Router } from "express";
import { CategoryRoutes } from "./category/category.routes";
import { MovieRoutes } from "./movie/movie.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    //Definir Rutas
    router.use("/api/category", CategoryRoutes.routes);
    router.use("/api/movie", MovieRoutes.routes);

    return router;
  }
}
