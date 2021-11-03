import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [MoviesController], // controller : url을 가져오고 함수를 실행시킴. express에 router 같은 존재
  providers: [],
})
export class AppModule {}
