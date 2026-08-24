#clase

class Auto:
    def __init__(self, word):
        self.color = word

toyota = Auto("rojo")
print(toyota.color)

class Persona:
    def __init__(self, word1, word2):
        self.nombre = word1
        self.edad = word2
    def frase(self):
        return f"Hola, soy {self.nombre} y tengo {self.edad} años"


yo= Persona("Juan", 30)
print(yo.frase())