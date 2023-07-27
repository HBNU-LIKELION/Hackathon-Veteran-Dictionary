# Hackathon-Veteran-Dictionary
💥 멋사 해커톤 프로젝트 노련한 사전

2023.07.27
by 김정희
api url이 좀 복잡하고 더러워서 수정
api 서버 주소는 톡방에 있어요

1)주소/ =>버전이랑 엔드포인트들 반환하는 schema_view입니다.

2)주소/api/
  여기 뒤에
  
    2-1)/crud/  =>글에 대한 ViewSet이라 crud용으로 쓰면 될거같네요
      제가 뷰셋관련 코드를
      '''
      class WikiDocumentViewSet(viewsets.ModelViewSet):
        queryset = WikiDocument.objects.all()
      serializer_class = WikiDocumentSerializer

      # Create, Update, Delete 기능에만 로그인이 필요하도록 설정
        permission_classes_by_action = {
          'create': [IsAuthenticated],
          'update': [IsAuthenticated],
          'destroy': [IsAuthenticated],
    } 
  이런식으로 해서 실제 crud는 로그인해야 가능하게 구현이 된거같아요
    
    2-2)/random-word/ =>작성한 글들 중하나랜덤으로 골라서 정보를 json으로 반환. "오늘의 단어" 기능으로 보면 될거같기도..?
    2-3)/search/ =>주소/api/search/?q=검색어 이런식으로 쿼리
    
3)주소/account/
  여기 뒤에
  signup/,login/,logout/ 로그인 관련되어서 토큰도 반환 가능하게해봤어요
