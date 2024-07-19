import { Router } from "express";
import { MovieService } from "../services/movie.service";
import { MovieController } from "./movie.controller";

export class MovieRoutes {
  static get routes(): Router {
    const router = Router();
    const service = new MovieService();
    const controller = new MovieController(service);

    router.get("/", controller.getMovies);

    return router;
  }
}
