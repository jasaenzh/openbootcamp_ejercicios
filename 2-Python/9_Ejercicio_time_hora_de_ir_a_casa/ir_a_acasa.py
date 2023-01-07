import time
from datetime import datetime, timedelta

fin_laboral = time.strftime('19:00')
hora_actual = time.strftime('%H:%M')

hora_fin = datetime.strptime(fin_laboral, '%H:%M')
format_hora_actual = datetime.strptime(hora_actual, '%H:%M')


def ir_casa():
    if fin_laboral > hora_actual:
        faltan = hora_fin - format_hora_actual
        return "Aun no has terminado la jornada laboral, te faltan " + str(faltan) + " para terminar"
    else:
        return "Has terminado tu jornada laboral"
