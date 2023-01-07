from operaciones import sumar, restar, multiplicar, dividir

numero1 = 5
numero2 = 3


def main():
    print("Calculadora")
    print("La suma es:", sumar.suma(numero1, numero2))
    print("La resta es:", restar.resta(numero1, numero2))
    print("La multiplicación es:", multiplicar.multiplica(numero1, numero2))
    print("La división es:", dividir.divide(numero1, numero2))


if __name__ == '__main__':
    main()
