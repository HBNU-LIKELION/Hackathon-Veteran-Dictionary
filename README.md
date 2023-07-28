# Hackathon-Veteran-Dictionary
💥 멋사 해커톤 프로젝트 노련한 사전

-----
2023.07.28 by 김정희

크롤링 구현 성공해서 지금 DB에 올려놨어요. <br>
test_crawling.py는 그냥 테스트용으로 함수 따로 만들어논거라 신경 안쓰셔도 될거같고 <br>
실제 크롤링 구현된 파일은 wiki>management>commands>crawling.py안에 넣어놨어요.  <br>
이거 참고하시면 될거같고.. <br>
만약에 다른사이트를 추가로 크롤링하고싶으면... 크롤링하는 파이썬 파일 하나 더 만들어서 오픈사전 크롤링하는 부분은 이전꺼 참고해서 직접 짜야할거같고, <br>
네이버 api로 이미지 긁어오는건 그냥 기존함수 그대로 쓰시면 될거같아요.  <br>

저렇게 manage.py 커맨드로 크롤링 파일 실행하게 한 이유는, crawling.py 파일을 첨엔 그냥 앱폴더 안에 만들었는데 Django 프로젝트 외부에서 실행되는거같은 현상이 일어나버린거같아서.. <br>
찾아보니까 커맨드로 실행하게 해야 모델 접근하고 이런거 할 수 있는거같더라구요.. 그래서 그렇게 했습니다

----------------------

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
