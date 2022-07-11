// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DrugService{
//   dowehaveatoken:boolean = false;
//   namee:String = '';
//   apiurl='https://localhost:44393/api/DrugsApi/searchDrugsByName/';
//   constructor(private http: HttpClient) {
//         this.dowehaveatoken =  localStorage.getItem('token')!=null;
//         console.log(this.dowehaveatoken);
//         if(this.dowehaveatoken){
//           console.log("Token valid");
//         }
//         else{
//           console.log("Token Invalid");
//         }
//    }

//    getvalue(val:string){
//       this.namee = val;
//    }

//    ProceedWithSearch(){
//     //validation done
//      if(this.dowehaveatoken){
//         let finalurl = this.apiurl + this.namee;
//         console.log(finalurl);
//         let v =  this.http.get<any>(finalurl);

//         console.log(v);
//      }

//      //just have to show data

//    }

// }
