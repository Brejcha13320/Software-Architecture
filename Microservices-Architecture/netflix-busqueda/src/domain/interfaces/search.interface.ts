export interface Search {
  categories: Category[];
  movies: Movie[];
}

export interface Category {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  name: string;
  language: string;
}
