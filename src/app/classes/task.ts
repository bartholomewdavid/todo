import { TaskStatus } from "../enums/task-status.enum";

export class Task {
    constructor(
        public title: string,
        public description: string,
        public status: TaskStatus,
        public dueDate: string
    ) {}
}
