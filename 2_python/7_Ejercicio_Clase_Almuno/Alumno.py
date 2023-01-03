class Alumno:
    nombre = None
    nota1 = 0
    nota2 = 0
    nota3 = 0

    def __init__(self, nombre, nota1, nota2, nota3):
        print("Inicializo Constructor de Alumno()")
        self.nombre = nombre
        self.nota1 = nota1
        self.nota2 = nota2
        self.nota3 = nota3

    def calcularNota(self):
        resultado = (alumno.nota1 + alumno.nota2 + alumno.nota3) / 3
        if resultado >= 3:
            return "Aprobado"
        elif resultado < 3:
            return "Reprobado"

    def imprimir(self):
        return self.nombre, self.nota1, self.nota2, self.nota3


alumno = Alumno("Johny", 2, 2, 2)

print("Alumno:", alumno.nombre, "con notas: ", "[", alumno.nota1, "] ", "[", alumno.nota2, "] ", "[", alumno.nota3,
      "] ", "Ha", alumno.calcularNota())
