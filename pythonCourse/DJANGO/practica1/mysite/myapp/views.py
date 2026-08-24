from django.shortcuts import render, redirect
from django.http import HttpResponse
from myapp.models import Empleado
from myapp.forms import EmpleadoForm 

def hello(request, name):
    return HttpResponse(f"Hello, {name}!, eres {Empleado.objects.get(id=1)} ?")
# Create your views here.
def root(request):
    empleados= Empleado.objects.all()
    return render(request,"root.html", {
        'empleado': empleados
    })
def agregar(request):
    if request.method == "POST":
        respuesta = request.POST
        form = EmpleadoForm(request.POST)
        form.save()
        return redirect("root")
    else:
        form = EmpleadoForm()
    return render(request, "agregar.html",
        {"form": form
         }
    )

