# Lo creo
f = open('mi_archivo.txt', 'w')
f.close()

# lo abro
f = open('mi_archivo.txt', 'r+')
f.readline()
f.write("linea 2\n")
f.write("linea 4\n")
f.seek(0)
print(f.read())

# Tercero lo cierro
f.close()
