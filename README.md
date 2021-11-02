# controller

- 데코레이터는 꾸며주는 함수나 클래스랑 붙어있어야 하므로 띄어쓰기 주의
- url을 가져와서 함수와 매핑(함수를 return)
- 잘못된 route로 가면 자동으로 error 관련 코드(status 등등)을 출력함 ㄷㄷ
- 굳이 컨트롤러 함수와 서비스 함수의 이름이 같을 필요는 없음

# service

- nestjs는 controller와 비즈니스 로직(service)을 구분짓고 싶어함.
- 실제 실행할 함수들은 여기서!
