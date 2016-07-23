import {Component, Input, Output, EventEmitter} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";


@Component({
    selector: 'countdown',
    template: '<h1>Time left: {{seconds}}</h1>'
})

class CountdownComponent {
    @Input() seconds: number;
    intervalId: number;
    @Output() complete: EventEmitter<any> = new EventEmitter();
    @Output() progress: EventEmitter<number> = new EventEmitter();

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
    template: `
        <div class="container text-center">
            <img src="assets/img/pomodoro.png" />
            <countdown [seconds]="25" 
                (progress)="timeout = $event"
                (complete)="onCountdownCompleted()">
            </countdown>
            <p *ngIf="timeout < 10">
                Beware! Only
                <strong>{{timeout}} seconds</strong>
                left.
            </p>
        </div>`
})

class PomodoroTimerComponent {
    timeout: number;
    onCountdownCompleted(): void {
        alert('Time up!');
    }
}

bootstrap(PomodoroTimerComponent);