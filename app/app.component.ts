/**
 * Created by phyrion on 24/07/16.
 */

import { Component } from '@angular/core';
import { SHARED_PROVIDERS } from './shared/shared';
import {HTTP_PROVIDERS} from "@angular/http";
import {ROUTER_PROVIDERS,
        RouteConfig,
        ROUTER_DIRECTIVES
        } from "@angular/router-deprecated";
import {TasksComponent, TaskEditorComponent} from "./tasks/tasks";
import TimerWidgetComponent from "./timer/timer-widget.component";
//import {TimerComponent} from  "./timer/timer";

@Component({
    selector: 'pomodoro-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [SHARED_PROVIDERS, HTTP_PROVIDERS, ROUTER_PROVIDERS],
    templateUrl: 'app/app.component.html',
    styles: [`
    .router-link-active {
        font-weight: bold;
        border-bottom: 2px #d9534f solid;
    }        
`]
})
@RouteConfig([
    {
        path: '',
        name:'TasksComponent',
        component: TasksComponent
    },
    {
        path: 'tasks/editor',
        name: 'TaskEditorComponent',
        component: TaskEditorComponent
    },
    {
        path: 'timer/:id',
        name: 'TimerComponent',
        component: TimerWidgetComponent
    }
])
export default class AppComponent {}