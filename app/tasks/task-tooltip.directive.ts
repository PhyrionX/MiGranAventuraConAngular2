import {Task} from '../shared/shared';
import {Input, Directive, HostListener} from '@angular/core';

@Directive({
    selector: '[task]'
})
export default class TaskTooltipDirective {
    private defaultTooltopText: string;
    @Input() task: Task;
    @Input() taskTooltip: any;

    @HostListener('mouseover')
    onMouseOver() {
        if (!this.defaultTooltopText && this.taskTooltip) {
            this.defaultTooltopText = this.taskTooltip.innerText;
        }
        this.taskTooltip.innerText = this.task.name;
    }
    @HostListener('mouseout')
    onMouseOut() {
        if (this.taskTooltip) {
            this.taskTooltip.innerText = this.defaultTooltopText;
        }
    }

}