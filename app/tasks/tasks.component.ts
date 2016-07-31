/**
 * Created by phyrion on 24/07/16.
 */
import {Component, OnInit} from '@angular/core';
import TaskIconsComponent from './task-icon.component';
import TaskTooltipDirective from './task-tooltip.directive';
import {
    TaskService,
    SettingsService,
    Task,
    SHARED_PIPES
} from '../shared/shared';
import {Router} from "@angular/router-deprecated";

@Component({
    selector: 'pomodoro-tasks',
    directives: [TaskIconsComponent, TaskTooltipDirective],
    pipes: [SHARED_PIPES],
    styleUrls: ['app/tasks/tasks.component.css'],
    templateUrl: 'app/tasks/tasks.component.html'
})
export default class TasksComponent implements OnInit {
    today: Date;
    tasks: Task[];
    queuedPomodoros: number;
    queueHeaderMapping: any;
    timerMinutes: number;

    constructor(
        private taskService: TaskService,
        private settingsService: SettingsService,
        private router: Router) {

        this.tasks = this.taskService.taskStore;
        this.today = new Date;
        this.queueHeaderMapping = settingsService.pluralsMap.tasks;
        this.timerMinutes = settingsService.timerMinutes;
    }

    ngOnInit(): void {
        this.updateQueuedPomodoros();
        this.taskService.taskFeed.subscribe(newTask => {
            this.tasks.push(newTask);
            this.updateQueuedPomodoros();
        })
    }

    toggleTask(task: Task): void {
        task.queued = !task.queued;
        this.updateQueuedPomodoros();
    }

    workOn(index: number): void {
        this.router.navigate(['TimerComponent', 'TaskTimer',{ id: index}])
    }

    private updateQueuedPomodoros(): void {
        this.queuedPomodoros = this.tasks
            .filter((Task: Task) => Task.queued)
            .reduce((pomodoros: number, queuedTask: Task) => {
                return pomodoros + queuedTask.pomodorosRequired;
            }, 0);
    }
}