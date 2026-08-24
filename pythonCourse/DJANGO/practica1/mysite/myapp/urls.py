from django.urls import path
from . import views


urlpatterns = [
    path('hello/<str:name>/', views.hello, name="hello"),
    path('', views.root, name="root"),
    path('agregar/', views.agregar, name="agregar")
]