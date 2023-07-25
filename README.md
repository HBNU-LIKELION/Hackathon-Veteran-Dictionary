# Hackathon-Veteran-Dictionary
💥 멋사 해커톤 프로젝트 노련한 사전

2023.07.25 
by 김정희
postman으로 json 제대로 반환하는지 확인했고,
api 기능 어떤거 넣었는지 알려드릴게요

1)http://127.0.0.1:8000/ =>버전이랑 엔드포인트들 반환하는 schema_view
2)http://127.0.0.1:8000/api/wiki/
  여기 뒤에
    2-1)/crud/  =>글에 대한 ViewSet이라 crud용으로 쓰면 될거같네요
      제가 뷰셋관련 코드를 
      class WikiDocumentViewSet(viewsets.ModelViewSet):
    queryset = WikiDocument.objects.all()
    serializer_class = WikiDocumentSerializer

    # Create, Update, Delete 기능에만 로그인이 필요하도록 설정
    permission_classes_by_action = {
        'create': [IsAuthenticated],
        'update': [IsAuthenticated],
        'destroy': [IsAuthenticated],
    } 이런식으로 해서 실제 crud는 로그인해야 가능하게 구현이 된거같아요
    
    2-2)/random-word/ =>작성한 글들 중하나랜덤으로 골라서 정보를 json으로 반환. "오늘의 단어" 기능으로 보면 될거같기도..?
    2-3)/search/ =>http://127.0.0.1:8000/api/search/?q=검색어 이런식으로 쿼리
3)http://127.0.0.1:8000/api/account/
  여기 뒤에
  signup/,login/,logout/ 로그인 관련되어서 토큰도 반환 가능하게해봤어요
