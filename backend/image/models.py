from django.db import models


class Image(models.Model):
    img=models.ImageField(upload_to="images")
    rmbg_img=models.ImageField(upload_to="images_rmbg")

    def __str__(self):
        return str(self.id)
    
    def save(self, *args, **kwargs):
        pil_img=PIL.Image.open(self.img)    
