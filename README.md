# GradientAbleV607Demo

# to clear the cache
npm install --save angular-cache

#Once Installed, run command "npm install" to install all the dependencies.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

#Ngx-spinner
https://www.npmjs.com/package/ngx-spinner/v/7.2.0

#Image uploader
https://www.talkingdotnet.com/show-image-preview-before-uploading-using-angular-7/

#Theme sample code
https://gitlab.com/-/ide/project/simpfoschool/schoolproject/tree/master/-/client/src/app/
Online theme demo:
http://html.codedthemes.com/gradient-able/default/preloader.html
http://html.codedthemes.com/gradient-able/angular/default/advance/modal

#Jw-modal
//https://jasonwatmore.com/post/2019/04/16/angular-7-custom-modal-window-dialog-box
//https://github.com/cornflourblue/angular-7-custom-modal

#Tree Component
To get the selected node in tree
https://stackoverflow.com/questions/50109258/angular-tree-component-how-to-capture-selected-nodes-through-checkbox-selection
https://github.com/500tech/angular-tree-component/blob/a44013417043c3544906d436b28bafe3a56a1d75/example/cli4/src/app/checkboxes/checkboxes.component.ts

Flat array to Tree structure
http://oskarhane.com/create-a-nested-array-recursively-in-javascript/

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

Spare Code
valuePrepareFunction: (data) => {
           //return '<p class="cell_right">' + data + '</p>'; 
           if(data === true)
           return 'Male';
           else
           return 'Female';
          },   
///////////////////////////////////////////
         
Select String_Agg(AddOnFacilityId, ',') as AddOnFacilityIds from [schooladmin].[ApplicationFormAddOnFacilityMapping]
Where [ApplicationNumber] = 31

## Date Format
https://stackoverflow.com/questions/40776255/ng-bootstrap-datepicker-format

you need to convert the date object that the datepicker uses from the NgbDateStruct format into a string format. ng-bootstrap provides a function to convert a date in the NgbDateStruct format to the ISO 8601 format (yyyy-mm-dd). You do not have to write your own if using that format:

import {NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

...

constructor(private ngbDateParserFormatter: NgbDateParserFormatter; ... ) {
    ...
}

...

onSubmit(): {
    let ngbDate = this.form.controls['due_date'].value;
    let myDate = this.ngbDateParserFormatter.format(ngbDate); // e.g. myDate = 2017-01-01
    ...
}

## Get the latest inserted Id value in SQL
select @InserteId =   (SELECT SCOPE_IDENTITY()) -- Used in Student Insert Stored Procedure
https://docs.microsoft.com/en-us/sql/t-sql/functions/scope-identity-transact-sql?redirectedfrom=MSDN&view=sql-server-ver15
