import {Component, Input, Output, EventEmitter, ViewEncapsulation} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";


@Component({
    selector: 'countdown',
    template: '<h1>Time left: {{seconds}}</h1>',
    styles: ['h1 { color: #900}'],
    encapsulation: ViewEncapsulation.Emulated,
    inputs: ['seconds'],
    outputs: ['complete', 'progress']
})

class CountdownComponent {
    seconds: number;
    intervalId: number;
    complete: EventEmitter<any> = new EventEmitter();
    progress: EventEmitter<number> = new EventEmitter();

    constructor(){
        this.intervalId = setInterval(() => this.tick(), 1000);
    }

    tick(): void {
        if (--this.seconds < 1) {
            clearInterval(this.intervalId);
            // An event is emitted upon finishing the countdown
            this.complete.emit(null);
        }
        this.progress.emit(this.seconds);
    }
}

@Component({
    selector: 'pomodoro-timer',
    directives: [CountdownComponent],
    templateUrl: './pomodoro-task.html'
})

class PomodoroTimerComponent {
    //timeout: number;
    onCountdownCompleted(): void {
        alert('Time up!');
    }
}

bootstrap(PomodoroTimerComponent);