import { Request, Response } from "express";
import { HandleError } from "../../domain/errors/handle-error";
import { SearchService } from "../services/search.service";

export class SearchController {
  constructor(private searchService: SearchService) {}

  getSearch = (req: Request, res: Response) => {
    this.searchService
      .getSearch()
      .then((search) => res.status(201).json(search))
      .catch((error) => HandleError.error(error, res));
  };
}
