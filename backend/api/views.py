from rest_framework import generics

from . import models
from . import serializers


class Main(generics.ListCreateAPIView):
    queryset = models.Todo.objects.all()
    serializer_class = serializers.TodoSerializer