# your_app_name/views.py
from django.shortcuts import render, redirect, get_object_or_404
from rest_framework import viewsets
from .models import WikiDocument
from .serializers import WikiDocumentSerializer
from .forms import WikiDocumentForm
from django.contrib.auth.decorators import login_required

from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout
from django.contrib.auth.models import User

# index view
def index(request):
    return render(request, 'index.html')

# DRF ViewSet
class WikiDocumentViewSet(viewsets.ModelViewSet):
    queryset = WikiDocument.objects.all()
    serializer_class = WikiDocumentSerializer
    
@login_required
def create_wiki_document(request):
    if request.method == 'POST':
        title = request.POST['title']
        content = request.POST['content']
        author = request.user  # 현재 로그인한 사용자를 가져옴

        document = WikiDocument.objects.create(title=title, content=content, author=author)
        return redirect('wiki_document_detail', document_id=document.id)

    form = WikiDocumentForm()
    return render(request, 'create_wiki_document.html', {'form': form})


def logout_view(request):
    logout(request)
    return redirect('index')  # 로그아웃 후 메인 페이지로 이동



def wiki_document_list(request):
    documents = WikiDocument.objects.all()
    return render(request, 'wiki_document_list.html', {'documents': documents})

def wiki_document_detail(request, document_id):
    document = get_object_or_404(WikiDocument, id=document_id)
    return render(request, 'wiki_document_detail.html', {'document': document})

@login_required
def update_wiki_document(request, document_id):
    document = get_object_or_404(WikiDocument, id=document_id)

    if request.method == 'POST':
        form = WikiDocumentForm(request.POST, instance=document)
        if form.is_valid():
            form.save()
            return redirect('wiki_document_list')  # 수정 후 문서 목록 페이지로 이동
    else:
        form = WikiDocumentForm(instance=document)

    return render(request, 'update_wiki_document.html', {'form': form})

@login_required
def user_wiki_documents(request, user_id):
    user_documents = WikiDocument.objects.filter(author=request.user)
    return render(request, 'user_wiki_documents.html', {'user_documents': user_documents})

def wiki_document_detail(request, document_id):
    document = get_object_or_404(WikiDocument, id=document_id)
    return render(request, 'wiki_document_detail.html', {'document': document})


@login_required
def delete_wiki_document(request, document_id):
    document = get_object_or_404(WikiDocument, id=document_id)

    if request.method == 'POST':
        document.delete()
        return redirect('wiki_document_list')  # 삭제 후 문서 목록 페이지로 이동

    return render(request, 'delete_wiki_document.html', {'document': document})



# 회원가입 뷰
def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)  # 회원가입 후 자동 로그인
            return redirect('index')
    else:
        form = UserCreationForm()
    return render(request, 'signup.html', {'form': form})

# 로그인 뷰
def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('index')  # 로그인 성공 시 index로 리다이렉트
    else:
        form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})

