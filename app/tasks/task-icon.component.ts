/**
 * Created by phyrion on 24/07/16.
 */
import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../shared/shared';

@Component({
    selector: 'pomodoro-task-icons',
    template: `<img *ngFor="let icon of icons" 
                    src="/app/shared/assets/img/pomodoro.png" 
                    width="{{size}}">`
})
export default class TaskIconsComponet implements OnInit {
    @Input() task: Task;
    @Input() size: number;
    icons: Object[] = [];

    ngOnInit() {
        this.icons.length = this.task.pomodorosRequired;
        this.icons.fill({name: this.task.name})
    }
}