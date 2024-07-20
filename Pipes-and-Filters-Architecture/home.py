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