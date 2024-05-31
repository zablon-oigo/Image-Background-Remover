from .views import ImageViewSet
from rest_framework import routers
router=routers.DefaultRouter()
router.register(r'images', ImageViewSet)