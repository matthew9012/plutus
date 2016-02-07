from django.conf.urls import url, include
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^getUsers/', views.getUsers),
    url(r'^getMyPoints/', views.getMyPoints),
    url(r'^userinfo$', views.userInfo)

]