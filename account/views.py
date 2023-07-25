from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login, logout, get_user_model
from .serializers import UserSerializer

User=get_user_model()


class SignUpView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            # 사용자 정보를 저장하기 위해 create() 메서드 오버라이드
            user = serializer.save()
            return Response({'message': '회원가입 성공', 'user_id': user.id}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            token, created = Token.objects.get_or_create(user=user)  # 토큰 생성 또는 가져오기
            return Response({'token': token.key, 'message': '로그인 성공'}, status=status.HTTP_200_OK)
        return Response({'message': '로그인 실패'}, status=status.HTTP_401_UNAUTHORIZED)
    

class LogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response({'message': '로그아웃 성공'}, status=status.HTTP_200_OK)