# WebrtcApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## WorkFlow 

To start the app run the app form it's working directory with ng `ng serve` command then on open browser enter 
 `http://localhost:4200/#init` url which will be sender through which app will be initated. 

 After entering `http://localhost:4200/#init` url browser will ask permission for microphone and webcamera allow it then after couple of seconds sender's id as an offer will be shown as an object in browser's console copy this id, open new tab and enter
 `http://localhost:4200`and past the copied sender's id in userId field and click connect button. 
 
 This will generate receiver's id as an object in browser's console copy object and navigate to `http://localhost:4200/#init` tab, clear the userId input field and and past the copied receiver's id and past it to userID input field then click on connect button.
 
After clicking on connect button peer-connection will start and live video will start to stream on browser.
 For Message after connection write message on message text area and click on message button message will  appear on next tab's console.