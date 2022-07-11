import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  messageclass = ''
  message = ''
  Customerid: any;
  editdata: any;
  responsedata: any;

  constructor(private service: AuthService,private route:Router) {
    localStorage.clear();
  }
  Login = new FormGroup({
    // Id: new FormControl("", Validators.required),
    // Name: new FormControl("", Validators.required),
    Email: new FormControl("", Validators.required),
    Password: new FormControl("", Validators.required),
    // Location: new FormControl("", Validators.required)
  });

  ngOnInit(): void {
  }


  ProceedLogin() {
    if (this.Login.valid) {
      this.service.ProceedLogin(this.Login.value).subscribe(result => {
        if(result){
          this.responsedata=result;
          localStorage.setItem('token1',this.responsedata.token)
          this.route.navigate(['home']);
        }

      });
    }
  }

}
