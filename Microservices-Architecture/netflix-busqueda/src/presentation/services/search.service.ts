import {
  Category,
  Movie,
  Search,
} from "../../domain/interfaces/search.interface";

export class SearchService {
  public async getSearch(): Promise<Search> {
    const categories = await this.getCategories();
    const movies = await this.getMovies();
    return {
      categories: [...categories],
      movies: [...movies],
    };
  }

  private async getCategories(): Promise<Category[]> {
    const url = "http://localhost:4000/api/category";
    const response = await fetch(url);
    return await response.json();
  }

  private async getMovies(): Promise<Movie[]> {
    const url = "http://localhost:4000/api/movie";
    const response = await fetch(url);
    return await response.json();
  }
}
