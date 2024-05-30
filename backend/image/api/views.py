from rest_framework import viewsets
from .serializers import ImageSerializer
from ..models import Image
from rest_framework.decorators import action
class ImageViewSet(viewsets.ModelViewSet):
    queryset=Image.objects.all()
    serializer_class=ImageSerializer

    @action(methods=['GET'], detail=True)
    def download(self, request, pk):
        pass