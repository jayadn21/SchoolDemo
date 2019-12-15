import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedModule} from './shared/shared.module';
import { MenuItems} from './shared/menu-items/menu-items';
import { BreadcrumbsComponent} from './layout/admin/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    BreadcrumbsComponent,

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule, FormsModule,
    ToastrModule.forRoot(),
    RouterModule,
    AngularMultiSelectModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [MenuItems],
  bootstrap: [AppComponent]
})
export class AppModule { }
