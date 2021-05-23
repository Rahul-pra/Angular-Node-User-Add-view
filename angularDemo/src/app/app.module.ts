import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { HeaderComponent } from './header/header.component';
import { AgGridModule } from 'ag-grid-angular';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { BusinessDetailComponent } from './business-detail/business-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from './app.service';
import { ButtonRenderComponent } from './button-render/button-render.component'

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ListUserComponent,
    HeaderComponent,
    PersonalDetailComponent,
    BusinessDetailComponent,
    ButtonRenderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    AgGridModule.withComponents([ButtonRenderComponent])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
