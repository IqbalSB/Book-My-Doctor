import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from '../service/auth.service';
import { DrugDetails } from '../drug-details';

@Component({
  selector: 'app-searchdrugid',
  templateUrl: './searchdrugid.component.html',
  styleUrls: ['./searchdrugid.component.css'],
})
export class SearchdrugidComponent implements OnInit {
  drugs: DrugDetails[] = [];
  dowehaveatoken: boolean = false;
  drugid: number = 0;
  apiurl = 'https://mfpedrugsapi20220708105352.azurewebsites.net/api/DrugsApi/searchDrugsByID/';
  // http: any;
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
    this.drugid = val;
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
      this.drugs = [];

      let finalurl = this.apiurl + this.drugid;
      console.log(finalurl);
      let header = this.setHeaders();
      return this.http
        .get(finalurl, { headers: header })
        .subscribe((res) => {
          console.log(true);
          this.drugs = res as DrugDetails[];
          console.log(res);
          // console.log();
        });
    }
    return null;
    //just have to show data
  }

  ngOnInit(): void {}
}
