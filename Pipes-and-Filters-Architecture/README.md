
  

<p  align="center">

<img  src="https://www.python.org/static/community_logos/python-logo.png"  width="160"  alt="NodeJS Logo"  />

</p>


#  Pipes and Filters Architecture

En este ejemplo, vamos a construir un sistema que procese una cadena de texto de la siguiente manera:

Imaginemos que queremos procesar una lista de números realizando las siguientes operaciones secuencialmente:

1.  **Convertir a minúsculas**: Convierte todas las letras mayúsculas a minúsculas.
2.  **Eliminar puntuación**: Elimina los signos de puntuación.
3.  **Dividir en palabras**: Divide el texto en palabras.
4.  **Eliminar palabras vacías**: Elimina palabras comunes como "el", "la", "y", etc.
5.  **Contar palabras**: Cuenta la frecuencia de cada palabra.


```
import string
from collections import Counter

def convertir_a_minusculas(texto):
    """Convierte todas las letras mayúsculas a minúsculas."""
    return texto.lower()

def eliminar_puntuacion(texto):
    """Elimina los signos de puntuación del texto."""
    return texto.translate(str.maketrans('', '', string.punctuation))

def dividir_en_palabras(texto):
    """Divide el texto en palabras."""
    return texto.split()

def eliminar_palabras_vacias(palabras, palabras_vacias):
    """Elimina palabras vacías (comunes) de la lista de palabras."""
    return [palabra for palabra in palabras if palabra not in palabras_vacias]

def contar_palabras(palabras):
    """Cuenta la frecuencia de cada palabra."""
    return Counter(palabras)

def tuberia(datos, filtros):
    """Pasa los datos a través de una serie de filtros."""
    for filtro in filtros:
        datos = filtro(datos)
    return datos

# Texto de entrada
texto_inicial = "Hola, mundo! Este es un ejemplo de arquitectura de Tuberías y Filtros. Hola de nuevo!"

# Lista de palabras vacías
palabras_vacias = {'es', 'un', 'de', 'y'}

# Definición de los filtros
filtros = [
    convertir_a_minusculas,
    eliminar_puntuacion,
    dividir_en_palabras,
    lambda palabras: eliminar_palabras_vacias(palabras, palabras_vacias),
    contar_palabras
]

# Procesar el texto a través de la tubería de filtros
resultado = tuberia(texto_inicial, filtros)

# Imprimir el resultado final
print(resultado)
```

##  Explicación del Código

-   **Filtros:**
    
    -   `convertir_a_minusculas`: Convierte todas las letras mayúsculas del texto a minúsculas.
    -   `eliminar_puntuacion`: Elimina los signos de puntuación del texto.
    -   `dividir_en_palabras`: Divide el texto en una lista de palabras.
    -   `eliminar_palabras_vacias`: Elimina palabras comunes (palabras vacías) de la lista de palabras.
    -   `contar_palabras`: Cuenta la frecuencia de cada palabra en la lista.
-   **Tubería:**
    
    -   La función `tuberia` toma los datos y los pasa secuencialmente a través de cada filtro. En este caso, el texto pasa por cada una de las transformaciones definidas en los filtros.
-   **Datos de entrada:**
    
    -   `texto_inicial` contiene el texto que será procesado.
    -   `palabras_vacias` contiene las palabras comunes que se eliminarán del texto.
-   **Definición de la secuencia de filtros:**
    
    -   La lista `filtros` define el orden en el que los datos pasarán por los filtros. Para el filtro `eliminar_palabras_vacias`, utilizamos una función lambda para pasar el segundo argumento (la lista de palabras vacías).
-   **Procesamiento:**
    
    -   El texto inicial se procesa a través de la tubería de filtros utilizando la función `tuberia`.
-   **Salida:**
    
    -   El resultado final se imprime en la consola.

```
Counter({'hola': 2, 'mundo': 1, 'este': 1, 'ejemplo': 1, 'arquitectura': 1, 'tuberías': 1, 'filtros': 1, 'nuevo': 1})

```


