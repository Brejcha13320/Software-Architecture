import { Request, Response } from "express";
import { HandleError } from "../../domain/errors/handle-error";
import { MovieService } from "../services/movie.service";

export class MovieController {
  constructor(private movieService: MovieService) {}

  getMovies = (req: Request, res: Response) => {
    this.movieService
      .getAllMovies()
      .then((movies) => res.status(201).json(movies))
      .catch((error) => HandleError.error(error, res));
  };
}
