/**
 * Created by phyrion on 31/07/16.
 */

import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, RouteConfig} from "@angular/router-deprecated";
import TimerWidgetComponent from "./timer-widget.component";

@Component({
    selector: 'pomodoro-timer',
    directives: [ROUTER_DIRECTIVES],
    template: '<router-outlet></router-outlet>'
})
@RouteConfig([
    {
        path: '/task/:id',
        name: 'TaskTimer',
        component: TimerWidgetComponent
    },
    {
        path: '/',
        name: 'GenericTimer',
        component: TimerWidgetComponent,
        useAsDefault: true
    }
])
export default class TimerComponent{}