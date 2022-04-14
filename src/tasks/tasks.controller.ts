import { Controller, Get, Param } from '@nestjs/common';
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

  @Get('/:id')
  public async GetByIdAsync(@Param('id') id: string) {
    console.log(id);
    const allTasks = await this.tasksService.getAllTasksAsync();

    const foundTask = allTasks.find((x) => x.id == id);

    return foundTask;
  }
}
