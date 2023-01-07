def anoBisiesto (ano):
    if ano % 400 == 0:
        print("Año bisiesto")
    elif ano % 100 == 0:
        print("Año no bisiesto")
    elif ano % 4 == 0:
        print("Año bisiesto")


print(anoBisiesto(1900))
