import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task } from './entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from '../projects/entities/project.entity';
import { User } from '../users/entities/user.entity';
import { ProjectModule } from '../projects/projects.module';
import { UsersModule } from '../users/users.module';
@Module({
  imports: [ProjectModule, UsersModule, TypeOrmModule.forFeature([Task, Project, User])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TaskModule {}