import { Module } from '@nestjs/common';
import { TodoService } from './service/todo.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [TodoService, PrismaService],
})
export class TodoModule {}
