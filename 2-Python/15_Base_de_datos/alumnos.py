import sqlite3

# Conecto la base de datos
conn = sqlite3.connect('alumno.db')

# Creo el cursor
cursor = conn.cursor()

# Creo la tabla
cursor.execute("CREATE TABLE alumnos(id INTEGER,nombre TEXT,apellido TEXT)")

# Insertar datos en la tabla
cursor.execute(
    "INSERT INTO alumnos (id, nombre, apellido) VALUES (1, 'Juan', 'Pérez')")
cursor.execute(
    "INSERT INTO alumnos (id, nombre, apellido) VALUES (2, 'Ana', 'Gómez')")
cursor.execute(
    "INSERT INTO alumnos (id, nombre, apellido) VALUES (3, 'Carlos', 'Sánchez')")
cursor.execute(
    "INSERT INTO alumnos (id, nombre, apellido) VALUES (4, 'Sofía', 'Martínez')")
cursor.execute(
    "INSERT INTO alumnos (id, nombre, apellido) VALUES (5, 'José', 'García')")
cursor.execute(
    "INSERT INTO alumnos (id, nombre, apellido) VALUES (6, 'Lucía', 'Rodríguez')")
cursor.execute(
    "INSERT INTO alumnos (id, nombre, apellido) VALUES (7, 'Mario', 'López')")
cursor.execute(
    "INSERT INTO alumnos (id, nombre, apellido) VALUES (8, 'Eduardo', 'Pérez')")

conn.commit()

# Consulta para traer un alumno
cursor.execute("SELECT * FROM alumnos WHERE nombre = 'Juan'")

# Imprimir
print(cursor.fetchall())

cursor.close()
conn.close()
