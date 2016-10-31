/**
 * Created by phyrion on 24/07/16.
 */
import 'rxjs/add/operator/map'
import { bootstrap } from '@angular/platform-browser-dynamic';
import AppComponent from './app.component';
import {provide} from '@angular/core';
import {
    LocationStrategy,
    HashLocationStrategy
} from '@angular/common'

bootstrap(AppComponent, [provide(LocationStrategy, {
    useClass: HashLocationStrategy
})]);