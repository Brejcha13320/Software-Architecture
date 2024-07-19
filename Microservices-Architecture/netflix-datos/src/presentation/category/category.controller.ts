import { Request, Response } from "express";
import { HandleError } from "../../domain/errors/handle-error";
import { CategoryService } from "../services/category.service";

export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  getCategories = (req: Request, res: Response) => {
    this.categoryService
      .getAllCategories()
      .then((categories) => res.status(201).json(categories))
      .catch((error) => HandleError.error(error, res));
  };
}
