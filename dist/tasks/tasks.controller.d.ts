import { TasksService } from './tasks.service';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    GetGreet(): Promise<string>;
    GetAllTasksAsync(): Promise<import("./task").default[]>;
}