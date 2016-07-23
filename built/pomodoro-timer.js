System.register(["@angular/core", "@angular/platform-browser-dynamic"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_dynamic_1;
    var CountdownComponent, PomodoroTimerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            }],
        execute: function() {
            CountdownComponent = (function () {
                function CountdownComponent() {
                    var _this = this;
                    this.complete = new core_1.EventEmitter();
                    this.progress = new core_1.EventEmitter();
                    this.intervalId = setInterval(function () { return _this.tick(); }, 1000);
                }
                CountdownComponent.prototype.tick = function () {
                    if (--this.seconds < 1) {
                        clearInterval(this.intervalId);
                        // An event is emitted upon finishing the countdown
                        this.complete.emit(null);
                    }
                    this.progress.emit(this.seconds);
                };
                CountdownComponent = __decorate([
                    core_1.Component({
                        selector: 'countdown',
                        template: '<h1>Time left: {{seconds}}</h1>',
                        styles: ['h1 { color: #900}'],
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        inputs: ['seconds'],
                        outputs: ['complete', 'progress']
                    }), 
                    __metadata('design:paramtypes', [])
                ], CountdownComponent);
                return CountdownComponent;
            }());
            PomodoroTimerComponent = (function () {
                function PomodoroTimerComponent() {
                }
                //timeout: number;
                PomodoroTimerComponent.prototype.onCountdownCompleted = function () {
                    alert('Time up!');
                };
                PomodoroTimerComponent = __decorate([
                    core_1.Component({
                        selector: 'pomodoro-timer',
                        directives: [CountdownComponent],
                        templateUrl: './pomodoro-task.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], PomodoroTimerComponent);
                return PomodoroTimerComponent;
            }());
            platform_browser_dynamic_1.bootstrap(PomodoroTimerComponent);
        }
    }
});
