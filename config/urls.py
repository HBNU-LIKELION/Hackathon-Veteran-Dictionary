from django.contrib import admin
from django.urls import path, include
from rest_framework.schemas import get_schema_view

schema_view = get_schema_view(title='API 목록', version='1.0.0')

urlpatterns = [
    path('', schema_view),
    path('admin/', admin.site.urls),
    path('api/wiki/', include('wiki.urls')),# 앱 폴더 내의 urls.py로 URL 패턴을 넘겨줌
    path('api/account/',include('account.urls'))
]
