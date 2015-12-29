import {Component} from 'angular2/core';

@Component({
    selector: 'my-app', // 套用 HTML 元素
    template: '<h1>{{title}}</h1><h2>{{hero}} details!</h2>'
})
export class AppComponent { 
    public title = 'Tour of Heroes';
    public hero = 'Windstorm';
}