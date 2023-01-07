paises = input("Intruduce los paises (separados por coma):")

lista_paises = paises.split(',')

array_pais = []

for pais in lista_paises:

    array_pais.append(pais.strip())

lista_paises_final = sorted(set(array_pais))

print(lista_paises_final)

