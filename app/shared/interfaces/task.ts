import {Queueable} from '../shared';

interface Task extends Queueable {
    name: String;
    deadline: Date;
    pomodorosRequired: number;
}

export default Task;