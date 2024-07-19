<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/300px-Node.js_logo.svg.png" width="180" alt="NodeJS Logo" />
</p>

# Microservicio 1 - Netflix-Busqueda

Este microservicio esta encargado de consultar la información de las categorias y peliculas a otro microservicio mediante la url http://localhost:3000/api/search y retornar la información.

## NOTA IMPORTANTE!!!

Para que este microservicio funcione correctamente ya debe de estar ejecutar el microservicio 2 de netflix-datos

## Paso 1 - Instalar Dependencias

```
npm install
```

## Paso 2 - Ejecutar Microservicio

```
npm run dev
```

## Paso 3 - Verficar API

http://localhost:3000/api/search

```
{
  "categories": [
    {
      "id": 1,
      "name": "Acción"
    },
    {
      "id": 2,
      "name": "Drama"
    },
    {
      "id": 3,
      "name": "Suspenso"
    },
    {
      "id": 4,
      "name": "Terror"
    },
    {
      "id": 5,
      "name": "Fantasia"
    }
  ],
  "movies": [
    {
      "id": 1,
      "name": "Titanic",
      "language": "Inglés"
    },
    {
      "id": 2,
      "name": "El Padrino",
      "language": "Inglés"
    },
    {
      "id": 3,
      "name": "La La Land",
      "language": "Inglés"
    },
    {
      "id": 4,
      "name": "Coco",
      "language": "Español"
    },
    {
      "id": 5,
      "name": "Parasite",
      "language": "Coreano"
    },
    {
      "id": 6,
      "name": "Pulp Fiction",
      "language": "Inglés"
    },
    {
      "id": 7,
      "name": "El Señor de los Anillos",
      "language": "Inglés"
    },
    {
      "id": 8,
      "name": "El laberinto del fauno",
      "language": "Español"
    },
    {
      "id": 9,
      "name": "Interestelar",
      "language": "Inglés"
    },
    {
      "id": 10,
      "name": "Volver al Futuro",
      "language": "Inglés"
    }
  ]
}
```
