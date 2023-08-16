# 🦁 노련한 사전

<div align="center"><img src="https://github.com/HBNU-LIKELION/Hackathon-Veteran-Dictionary/assets/69416617/e8262790-345a-4bec-9267-0b9e2a91eef2" width="40%"/></div>

<p align="center">급변하는 세계, 우후죽순처럼 튀어나오는 새로운 언어, 노인들은 이를 따라잡기에는 혼란스럽기만 합니다.</p>
<p align="center">'노련한 사자' 어플리케이션과 함께라면, 연령커브로 인한 언어의 장벽도 어렵지 않아요.</p>
<p align="center">세상의 흐름에 따라 변화하는 단어들도 쉽게 익힐 수 있어요.</p>
<p align="center">지금 '노련한 사자'와 함께라면, 노년의 황금기도 새로운 지식과 함께 빛나게 됩니다!</p>

<br>
<br>

### 🦁 **팀원**
<table>
  <tbody>
    <tr>
      <td align="center"><a href=""><img src="" width="100px;" alt=""/><br /><sub><b>BE 팀원 : </b></sub></a><br /></td>
      <td align="center"><a href=""><img src="" width="100px;" alt=""/><br /><sub><b>BE 팀원 : </b></sub></a><br /></td>
      <td align="center"><a href=""><img src="" width="100px;" alt=""/><br /><sub><b>BE 팀원 : </b></sub></a><br /></td>   
      <td align="center"><a href=""><img src="width="100px;" alt=""/><br /><sub><b>FE 팀원 : </b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

<br>
<br>

### 🦁 **기능 및 특징**
<li>노인들이 인지하기 쉽게 한눈에 들어오는 UI</li>
<li>단어를 알아요? 몰라요?로 뜻을 확실히 아는가? 체크</li>
<li>단어에 대한 간결한 설명과 이미지 제공 </li>

<br>
<br>

### 🦁 **프로젝트 전체 구성**
![image](https://github.com/HBNU-LIKELION/Hackathon-Veteran-Dictionary/assets/117091989/421a31cf-bb6e-4bc6-a7ea-7bc64d5876ed)

<br>
<br>

### 🦁 **사용한 기술 스택**<br>
#### FrontEnd
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=black"><img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<br>
#### BackEnd
<img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white">    <img src="https://img.shields.io/badge/django rest framework-092E20?style=for-the-badge&logo=django&logoColor=white">
<br>
#### ETC
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"><img src="https://img.shields.io/badge/jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white"><img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white">

<br>
<br>

### 🦁 **프로젝트 아키텍쳐**
![image](https://github.com/HBNU-LIKELION/Hackathon-Veteran-Dictionary/assets/69416617/1e300230-44ed-4c5b-811b-ed02bcd1b8e4)

<br>
<br>

### 🦁 **컨벤션**
2023.07.28 by 김정희

실제 크롤링 구현된 파일은 wiki>management>commands>crawling.py안에 넣어놨어요.  <br>
이거 참고하시면 될거같고.. <br>
만약에 다른사이트를 추가로 크롤링하고싶으면... 크롤링하는 파이썬 파일 하나 더 만들어서 오픈사전 크롤링하는 부분은 이전꺼 참고해서 직접 짜야할거같고, <br>
네이버 api로 이미지 긁어오는건 그냥 기존함수 그대로 쓰시면 될거같아요.  <br>

저렇게 manage.py 커맨드로 크롤링 파일 실행하게 한 이유는, crawling.py 파일을 첨엔 그냥 앱폴더 안에 만들었는데 Django 프로젝트 외부에서 실행되는거같은 현상이 일어나버린거같아서.. <br>
찾아보니까 커맨드로 실행하게 해야 모델 접근하고 이런거 할 수 있는거같더라구요.. 그래서 그렇게 했습니다

2023.07.27
api 명세서

주소/api/ << 여기 뒤에
<ul>
<li> api/crud/  =>글에 대한 ViewSet이라 crud용으로 쓰면 될거같네요.DB의 스키마 뷰가 들어있을겁니다 </li>
<li> api/random-word/ =>작성한 글들 중하나랜덤으로 골라서 정보를 json으로 반환. "오늘의 단어" 기능으로 보면 될거같기도..? </li>
<li>api/search/ =>주소/api/search/?q=검색어 이런식으로 쿼리 </li>   
</ul>  

