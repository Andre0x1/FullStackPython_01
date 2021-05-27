from django.urls import path
from .views import RoomView, RoomList, CreateRoomView

urlpatterns = [
    path('home', RoomView.as_view()),
    path('list', RoomList.as_view()),
    path('create-room', CreateRoomView.as_view())
]
