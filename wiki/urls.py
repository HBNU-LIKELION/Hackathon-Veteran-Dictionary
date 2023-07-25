from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WikiDocumentViewSet, RandomWordView, SearchWikiDocumentView

router = DefaultRouter()
router.register(r'crud', WikiDocumentViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('random-word/', RandomWordView.as_view(), name='random-word'),
    path('search/', SearchWikiDocumentView.as_view(), name='search'),
]
