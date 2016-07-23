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
    var PomodoroTimerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            }],
        execute: function() {
            PomodoroTimerComponent = (function () {
                function PomodoroTimerComponent() {
                    var _this = this;
                    this.resetPomodoro();
                    setInterval(function () { return _this.tick(); }, 1000);
                }
                PomodoroTimerComponent.prototype.tick = function () {
                    if (!this.isPaused) {
                        this.buttonLabel = 'Pause';
                        if (--this.seconds < 0) {
                            this.seconds = 59;
                            if (--this.minutes < 0) {
                                this.minutes = 24;
                                this.seconds = 59;
                            }
                        }
                    }
                };
                PomodoroTimerComponent.prototype.resetPomodoro = function () {
                    this.minutes = 24;
                    this.seconds = 59;
                    this.buttonLabel = 'Start';
                    this.togglePause();
                };
                PomodoroTimerComponent.prototype.togglePause = function () {
                    this.isPaused = !this.isPaused;
                    if (this.minutes < 24 || this.seconds < 59) {
                        this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
                    }
                };
                PomodoroTimerComponent = __decorate([
                    core_1.Component({
                        selector: 'pomodoro-timer',
                        template: "\n        <div class=\"text-center\">\n            <img src=\"assets/img/pomodoro.png\" alt=\"Pomodoro\">\n            <h1> {{ minutes }}:{{ seconds | number: '2.0'}} </h1>\n            <p>\n                <button (click)=\"togglePause()\">\n                    {{ buttonLabel }}  \n                </button>\n            </p>\n        </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], PomodoroTimerComponent);
                return PomodoroTimerComponent;
            }());
            platform_browser_dynamic_1.bootstrap(PomodoroTimerComponent);
        }
    }
});
