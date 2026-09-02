from django.urls import path
from .views import Home
from .views.Contacts import ContactView

urlpatterns = [
    path('welcome/', Home.welcome, name='welcome'),
    path("contact/", ContactView.as_view(), name="contact")

]
