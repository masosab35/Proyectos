class Calculadora:
    def __init__(self, numerodecaracteres):
        self.numerodecaracteres = numerodecaracteres
        self.datos = [] 
        #opcional: self.datos = [0 for i in range(numerodecaracteres)]
    def agregar_dato(self): 
        self.datos = [int(input("Ingrese un número: ")) for i in range(self.numerodecaracteres)]
class Suma(Calculadora):
    def __init__(self, numerodecaracteres):
        numerodecaracteres = int(input("Ingrese la cantidad de números a sumar: "))
        Calculadora.__init__(self, numerodecaracteres)
    def sumar(self):
        self.agregar_dato()
        a = sum(self.datos)
        return a
class Raiz(Calculadora):
    def __init__(self):
        Calculadora.__init__(self,1)
    def raiz(self):
        import math
        self.agregar_dato()
        return math.sqrt(self.datos[0])

objeto= Raiz()  
print(objeto.raiz())

print(isinstance(objeto, Calculadora))