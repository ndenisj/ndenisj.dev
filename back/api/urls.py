from django.urls import path, include
from blog.views import *
from contact.views import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register('post', PostViewSet)
router.register('contact', ContactViewSet)

urlpatterns = [
    path('', include(router.urls)),
]