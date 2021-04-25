from django.urls import path
from .views import RoomView,RoomList

urlpatterns = [
    path('home', RoomView.as_view()),
    path('list',RoomList.as_view())
]
