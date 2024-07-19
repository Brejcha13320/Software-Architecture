import { Category } from "../../domain/interfaces/category.interface";

export class CategoryService {
  categories: Category[] = [
    { id: 1, name: "Acción" },
    { id: 2, name: "Drama" },
    { id: 3, name: "Suspenso" },
    { id: 4, name: "Terror" },
    { id: 5, name: "Fantasia" },
  ];

  public async getAllCategories(): Promise<Category[]> {
    return this.categories;
  }
}
