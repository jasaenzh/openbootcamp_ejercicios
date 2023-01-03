import pickle


class Vehiculo:
    marca = ""
    modelo = 0

    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo

    def getDatosVehiculo(self):
        return f'Marca: {self.marca}, Modelo: {self.modelo}'


vehiculo1 = Vehiculo("Toyota", 2022)
print(vehiculo1.getDatosVehiculo())

# Serializo en un fichero
f = open('copia.bin', 'wb')
pickle.dump(vehiculo1, f)
f.close()

# Deserializo el fichero
f = open('copia.bin', 'rb')
nuevo_vehiculo = pickle.load(f)

print(nuevo_vehiculo)
f.close()
