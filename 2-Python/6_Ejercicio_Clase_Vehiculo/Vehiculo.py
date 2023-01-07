class Vehiculo:
    color = "Azul"
    ruedas = 4
    puertas = 2


class Coche(Vehiculo):
    velocidad = 200
    cilindrada = 50


coche = Coche()
print("Color:", coche.cilindrada)
print("Ruedas:", coche.ruedas)
print("Puertas:", coche.puertas)
print("Velocidad:", coche.velocidad)
print("Cilindrada:", coche.cilindrada)

