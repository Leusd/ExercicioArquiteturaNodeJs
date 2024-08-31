import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './modules/projects/projects.module';
import { UsersModule } from './modules/users/users.module';
import { TaskModule } from './modules/tasks/tasks.module';
import { TypeOrmConfig } from './modules/config/typeorm/typeorm.module';

@Module({
  imports: [ProjectModule, UsersModule, TaskModule, TypeOrmConfig],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
