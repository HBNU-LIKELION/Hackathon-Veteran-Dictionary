# account/urls.py
from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import SignUpView, LoginView, LogoutView

urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
]
