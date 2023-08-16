from rest_framework import viewsets
from .models import WikiDocument
from .serializers import WikiDocumentSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
import random



class WikiDocumentViewSet(viewsets.ModelViewSet):
    queryset = WikiDocument.objects.all()
    serializer_class = WikiDocumentSerializer
    permission_classes = []  # 모든 CRUD 작업에 대해 로그인 없이 접근 가능하도록 설정



class RandomWordView(APIView):
    def get(self, request):
        words = WikiDocument.objects.all()
        if words.exists():
            random_word = random.choice(words)
            serializer = WikiDocumentSerializer(random_word)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'message': '등록된 단어가 없습니다.'}, status=status.HTTP_404_NOT_FOUND)
        
        
class SearchWikiDocumentView(APIView):
    def get(self, request):
        search_query = request.query_params.get('q', '')
        if not search_query:
            return Response({"error": "검색어를 입력해주세요."}, status=status.HTTP_400_BAD_REQUEST)

        # 데이터베이스에서 검색어를 포함하는 글들을 찾음
        search_results = WikiDocument.objects.filter(title__icontains=search_query)

        # 검색 결과를 직렬화하여 반환
        serializer = WikiDocumentSerializer(search_results, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)    
    # http://127.0.0.1:8000/api/search/?q=검색어 이런식으로 쿼리