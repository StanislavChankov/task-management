import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  public async GetGreet() {
    return 'Hello World';
  }

  @Get('all')
  public async GetAllTasksAsync() {
    return await this.tasksService.getAllTasksAsync();
  }
}
