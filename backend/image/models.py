from django.db import models
import PIL
from io import BytesIO
import numpy as np
from cvzone.SelfiSegmentationModule import SelfiSegmentation
class Image(models.Model):
    img=models.ImageField(upload_to="images")
    rmbg_img=models.ImageField(upload_to="images_rmbg")

    def __str__(self):
        return str(self.id)
    
    def save(self, *args, **kwargs):
        pil_img=PIL.Image.open(self.img)
        img=np.array(pil_img)
        segmentor=SelfiSegmentation()
        rmbg=segmentor.removeBG(img, (0,255,0), threshold=0.4)
        buffer=BytesIO()
        output_img=PIL.Image.fromarray(rmbg)
        output_img.save(buffer, format="png")

