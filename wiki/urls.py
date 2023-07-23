# your_app_name/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import index, WikiDocumentViewSet,wiki_document_list,user_wiki_documents,\
    create_wiki_document, update_wiki_document, delete_wiki_document, signup, login_view, wiki_document_detail,logout_view


router = DefaultRouter()
router.register(r'wiki', WikiDocumentViewSet)

urlpatterns = [
    path('', index, name='index'),  # 기존의 index 뷰를 유지
    path('api/', include(router.urls)),  # DRF의 API 뷰를 '/api/'로 접근 가능하도록 추가
    path('create/', create_wiki_document, name='create_wiki_document'),  # 위키 작성 페이지
    path('wiki/', wiki_document_list, name='wiki_document_list'),
    path('wiki/<int:document_id>/update/', update_wiki_document, name='update_wiki_document'),  # Update URL
    path('wiki/<int:document_id>/delete/', delete_wiki_document, name='delete_wiki_document'),  # Delete URL
    path('user/<int:user_id>/documents/', user_wiki_documents, name='user_wiki_documents'),  # 사용자 글 목록 페이지
    path('accounts/signup/', signup, name='signup'),
    path('accounts/login/', login_view, name='login'),  # 로그인 URL
    path('logout/', logout_view, name='logout'),
    path('wiki/<int:document_id>/', wiki_document_detail, name='wiki_document_detail'),
]

