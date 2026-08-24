from django import forms
from .models import Empleado

class EmpleadoForm(forms.ModelForm):
    nombre = forms.CharField(
        required=True, widget=forms.TextInput(attrs={"placeholder": "Escriba el nombre"})
        )
    apellido = forms.CharField(
        required=True, widget=forms.TextInput(attrs={"placeholder": "Escriba el apellido"})
        )
    
    class Meta:
        model = Empleado
        fields = ["nombre", "apellido"]
        