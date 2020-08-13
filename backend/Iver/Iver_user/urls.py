from django.urls import path
from .views import UserView

app_name = 'Iver_user'
urlpatterns = [
    path('', UserView.as_view()),
]
