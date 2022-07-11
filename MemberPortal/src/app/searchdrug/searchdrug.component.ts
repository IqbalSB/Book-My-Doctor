import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from '../service/auth.service';
import { DrugDetails } from '../drug-details';

class repos{
  Id:number = 0;
  Name:String = '';
  ManufacturedDate: any;
  ExpiryDate: any;
  Manufacturer : String = '';
}

@Component({
  selector: 'app-searchdrug',
  templateUrl: './searchdrug.component.html',
  styleUrls: ['./searchdrug.component.css'],
})
export class SearchdrugComponent implements OnInit {
  drugs: DrugDetails[] = [];
  dowehaveatoken: boolean = false;
  namee: String = '';
  apiurl = 'https://mfpedrugsapi20220708105352.azurewebsites.net/api/DrugsApi/searchDrugsByName/';

  constructor(private http: HttpClient) {
    this.dowehaveatoken = localStorage.getItem('token1') != null;
    console.log(this.dowehaveatoken);
    if (this.dowehaveatoken) {
      console.log('Token valid');
    } else {
      console.log('Token Invalid');
    }
  }

  getvalue(val: string) {
    this.namee = val;
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

      let finalurl = this.apiurl + this.namee;
      console.log(finalurl);
      let header = this.setHeaders();
      return this.http.get(finalurl, { headers: header }).subscribe((res) => {
        console.log(true);
        this.drugs = res as DrugDetails[];
        // console.log(res);
        // console.log();
      });
    }
    return null;
    //just have to show data
  }

  ngOnInit(): void {}

  // getAllDrugs() {
  //   this.drugs = [];
  //   this.service.getAllDrugs().subscribe((data) => {
  //     this.drugs = data as DrugDetails[];
  //     console.log(data);
  //     console.log(this.drugs);
  //     this.drugLocation = this.drugs[0].druglocationQuantities;
  //   });
  // }
}
