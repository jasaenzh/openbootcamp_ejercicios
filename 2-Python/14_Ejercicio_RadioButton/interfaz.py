import tkinter as tk


# Funciones
def on_select(variable):
    label.config(text="Seleccionada: " + variable.get())


# Instancio Tk
window = tk.Tk()

# Variables
var = tk.StringVar()

# Lista de elementos
elementos = ["Opción 1", "Opción 2", "Opción 3", "Opción 4"]

listbox = tk.Listbox(window, selectmode='single', exportselection=0)

for elemento in elementos:
    listbox.insert(tk.END, elemento)
listbox.bind('<<ListboxSelect>>', lambda event: on_select(var))
listbox.pack()

label = tk.Label(window, text="Ninguna seleccionada")
label.pack()

window.mainloop()
