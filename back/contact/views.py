from rest_framework import viewsets
from api.serializers import ContactSerializer
from .models import Contact


class ContactViewSet(viewsets.ModelViewSet):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()
