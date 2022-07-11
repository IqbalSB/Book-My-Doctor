import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { ListingComponent } from './listing/listing.component';
import { FormsModule } from "@angular/forms";
import { AddnewComponent } from './addnew/addnew.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import { LoginComponent } from './login/login.component'
import { TokenInterceptorService } from './service/token-interceptor.service';
import { SearchdrugComponent } from './searchdrug/searchdrug.component';
import { RouterModule } from '@angular/router';
import { SearchdrugidComponent } from './searchdrugid/searchdrugid.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { RefillstatusComponent } from './refillstatus/refillstatus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    ListingComponent,
    AddnewComponent,
    LoginComponent,
    SearchdrugComponent,
    SearchdrugidComponent,
    SubscribeComponent,
    RefillstatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
    ])
  ],
   providers: [CookieService,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
