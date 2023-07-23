from django.contrib import admin
from django.urls import path,include
from wiki.views import index, create_wiki_document

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',index,name='index'),
    path('api/', include('wiki.urls')),
    path('create/', create_wiki_document, name='create_wiki_document'),
    path('accounts/', include('django.contrib.auth.urls')),  # 사용자 로그인 페이지 설정
]
