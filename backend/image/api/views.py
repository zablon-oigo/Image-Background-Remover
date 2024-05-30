from rest_framework import viewsets
from .serializers import ImageSerializer
from ..models import Image
from django.http import HttpResponse
from wsgiref.util import FileWrapper
from rest_framework.decorators import action
class ImageViewSet(viewsets.ModelViewSet):
    queryset=Image.objects.all()
    serializer_class=ImageSerializer

    @action(methods=['GET'], detail=True)
    def download(self, *args,**kwargs):
        instance=self.get_object()
        img_path=instance.rmbg_img.path
        img=open(img_path,'rb')
        response=HttpResponse(FileWrapper(img), content_type="image/png")
        return response