from functools import reduce

lista = []
continua = True

while continua:
    valor = int(input("Ingresa un numero:"))
    lista.append(valor)
    aux = int(input("Deseas ingresar otro numero? 1 = Si 0 = No:"))
    if aux == 0:
        continua = False
print(f'Numeros Ingresados = {lista}')


def impares(numero):
    if numero % 2 == 1:
        return True

    return False


lista = filter(impares, lista)


def suma(num1, num2):
    return num1 + num2


resultado = reduce(suma, lista)
print(f'Suma de Impares = {resultado}')
