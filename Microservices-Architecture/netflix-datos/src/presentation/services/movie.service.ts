import { Movie } from "../../domain/interfaces/movie.interface";

export class MovieService {
  movies: Movie[] = [
    { id: 1, name: "Titanic", language: "Inglés" },
    { id: 2, name: "El Padrino", language: "Inglés" },
    { id: 3, name: "La La Land", language: "Inglés" },
    { id: 4, name: "Coco", language: "Español" },
    { id: 5, name: "Parasite", language: "Coreano" },
    { id: 6, name: "Pulp Fiction", language: "Inglés" },
    { id: 7, name: "El Señor de los Anillos", language: "Inglés" },
    { id: 8, name: "El laberinto del fauno", language: "Español" },
    { id: 9, name: "Interestelar", language: "Inglés" },
    { id: 10, name: "Volver al Futuro", language: "Inglés" },
  ];

  public async getAllMovies(): Promise<Movie[]> {
    return this.movies;
  }
}
