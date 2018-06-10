import { Task } from "./task";

export class User {
    tasks: Task[];

    // TODO: Persistance
    constructor() {
        this.tasks = [];
    }
}
