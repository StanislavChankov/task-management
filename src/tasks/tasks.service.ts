import { Injectable } from '@nestjs/common';
import TaskResponse from './task';

@Injectable()
export class TasksService {
  public async getAllTasksAsync(): Promise<TaskResponse[]> {
    return [
      { id: '1', name: 'first' } as TaskResponse,
      { id: '2', name: 'second' } as TaskResponse,
    ];
  }
}
