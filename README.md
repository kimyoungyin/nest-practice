# controller

- 데코레이터는 꾸며주는 함수나 클래스랑 붙어있어야 하므로 띄어쓰기 주의
- url을 가져와서 함수와 매핑(함수를 return)
- 잘못된 route로 가면 자동으로 error 관련 코드(status 등등)을 출력함 ㄷㄷ
- 굳이 컨트롤러 함수와 서비스 함수의 이름이 같을 필요는 없음

# service

- nestjs는 controller와 비즈니스 로직(service)을 구분짓고 싶어함.
- 실제 실행할 함수들은 여기서!

# nest cli로 controller 생성하기

- controller : nest g co

# 동적 라우팅 : 실행할 함수의 매개변수에 사용할 변수 즉, 데코레이터로 받아온 url로부터 데이터 받아오기(param or query)

- 항상 무언가를 사용하려면 요청해야 함(데코레이터)
- 함수 매개변수에서 아래와 같이 실행
- url 내부 param과 @Param 데코레이터 내부 param의 이름은 같아야 하지만, 매개변수의 이름은 달라도 됨
  '''ts
  // http://localhost:3000/movies/search?year=2000
  @Get('search')
  search(@Query('year') searchingYear: string) {
  return `search!!! after ${searchingYear}`; // query
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
  return `we will get a one movie with the id: ${movieId}`; // param
  }
  '''

# Body 받아오기 : @Body

- 위와 동일함. @Body 데코레이터를 이용
- post 요청을 보낼 때 자주 사용되겠지
- @Body() 내부 인자는 없다.
