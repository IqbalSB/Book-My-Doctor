import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from '../service/auth.service';
import { RefillDue } from '../refill-details';

@Component({
  selector: 'app-refillstatus',
  templateUrl: './refillstatus.component.html',
  styleUrls: ['./refillstatus.component.css'],
})
export class RefillstatusComponent implements OnInit {
  Ref: any = [];
  dowehaveatoken: boolean = false;
  Id: number = 0;
  apiurl = 'https://refillapi20220708115116.azurewebsites.net/api/RefillOrders/RefillStatus/';
  constructor(private http: HttpClient) {
    this.dowehaveatoken = localStorage.getItem('token1') != null;
    console.log(this.dowehaveatoken);
    if (this.dowehaveatoken) {
      console.log('Token valid');
    } else {
      console.log('Token Invalid');
    }
  }
  getvalue(val: any) {
    this.Id = val;
  }
  private setHeaders(): HttpHeaders {
    console.log(localStorage.getItem('token1'));
    let token = localStorage.getItem('token1');
    const headersConfig: any = {
      'Access-Control-Allow-Origin': 'http://localhost:4200/',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    if (token) {
      headersConfig.authorization = `Bearer ${token}`;
    }
    return new HttpHeaders(headersConfig);
  }
  ProceedWithSearch() {
    //validation done
    if (this.dowehaveatoken) {
      this.Ref = [];

      let finalurl = this.apiurl + this.Id;
      console.log(finalurl);
      let header = this.setHeaders();
      return this.http
      .get(finalurl, { headers: header })
      .subscribe((res) => {
        console.log(true);
        this.Ref.push(res);
        // console.log(this.Ref);
        // console.log();
      });
    }
    return null;
    //just have to show data
  }
  ngOnInit(): void {}
}
