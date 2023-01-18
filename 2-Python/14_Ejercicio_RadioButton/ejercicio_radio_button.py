import tkinter as tk


def on_select(sel):
    label.config(text="Seleccionaste: " + var.get())


def on_reset():
    var.set(None)
    label.config(text="Reseteo de botones ok")


window = tk.Tk()

# Variable para selección del botón
var = tk.StringVar()
label = tk.Label(window, text="Ninguna opción seleccionada")
label.pack()

# Creo una lista con las opciones del radio botón
opciones = ['Opción 1', 'Opción 2', 'Opción 3']

# recorro la lista y pinto los botones
for opcion in opciones:
    tk.Radiobutton(window, text=opcion, variable=var, value=opcion, command=lambda: on_select(var)).pack()

# Boton para reiniciar
tk.Button(window, text="Reiniciar", command=on_reset).pack()

# Creo el loop (bucle) para que no se cierre la ventana
window.mainloop()
