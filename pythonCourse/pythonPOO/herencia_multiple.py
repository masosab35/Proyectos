class Telefono:
    def __init__(self):
        pass
    def llamar(self):
        print("Llamando...")
    def ocupado(self):
        print("Ocupado...")
class Camara:
    def __init__(self):
        pass
    def tomar_foto(self):
        print("Foto tomada...")
class Reproduccion:
    def __init__(self):
        pass
    def reproducir(self):
        print("Reproduciendo...")
class Smartphone(Telefono, Camara, Reproduccion):
    def __init__(self):
        Telefono.__init__(self)
        Camara.__init__(self)
        Telefono.__init__(self)
objeto = Smartphone()
