#Practica final
class Usuario:
    def __init__(self, correo, contrasena):
        self.__correo = correo
        self.__contrasena = contrasena
    def __getCorreo(self):
        return self.__correo
    def __getContrasena(self):
        return self.__contrasena

    def __setCorreo(self, correo):
        self.__correo = correo
    def __setContrasena(self, contrasena):
        self.__contrasena = contrasena

    def __delCorreo(self):
        del self.__correo
    def __delContrasena(self):
        del self.__contrasena
    Correo= property(fget=__getCorreo, fset=__setCorreo, fdel=__delCorreo)
    Contrasena= property(fget=__getContrasena, fset=__setContrasena, fdel=__delContrasena)

class Administrador(Usuario):
    def __init__(self, correo, contrasena):
        super().__init__(correo, contrasena)
    def acceder_a_sitio_restringido(self):
        print("Accediendo a sitio restringido...")

Pepito = Usuario("pepito@gmail.com", "123456")
Pepito.Correo = "BigK"
Cabrael = Administrador("cabrael@gmail.com", "654321")
print(Pepito.Correo)
Cabrael.acceder_a_sitio_restringido()
respuesta = ""
respuesta2 = "" 
usuarios= [Pepito, Cabrael,]
while respuesta.upper() != "SALIR":
    
    respuesta = input("Escriba su correo para iniciar sesión o escriba 'salir' para salir: ")
    
    if respuesta in [u.Correo for u in usuarios]:
        for i in usuarios:
                if i.Correo == respuesta:
                    usuario_encontrado = i
                    break
        contrasena = input("Ingrese su contrasena: ")
        if contrasena == usuario_encontrado.Contrasena:
            print("Bienvenido al sistema")
            break
        print("Contraseña incorrecta")
    elif respuesta.upper() == "SALIR":
        print("Saliendo del sistema...")
        
    else:
        respuesta2 = input("Usuario no registrado, desea registrarse? (si/no): ")
        if respuesta2.upper() == "SI":
            contrasena_usuario = input("Ingrese su contrasena: ")
            print("Usuario no registrado, registrando..")
            usuarios.append(Usuario(respuesta, contrasena_usuario))
