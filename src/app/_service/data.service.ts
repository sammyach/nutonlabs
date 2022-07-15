import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //private baseUrl = environment.apiUrl;

  private myData$ = new Subject<string>();
  constructor(private http: HttpClient) {
    // console.log('in dz conztructor');
    // console.log('doez myData$ haz obzerverz?: ', this.myData$.observed);

  }

  // getPost(slug: string){
  //   return this.http.get<any>(`${this.baseUrl}/api/posts/find/${slug}`);
  // }

  raiseMyDataEvent(val: string){
    // console.log('in raize my data event');
    // console.log('doez myData$ haz obzerverz?: ', this.myData$.observed);
    this.myData$.next(val);
    // this.myData$.error(new Error("Failed to pazz more values"))
    // this.myData$.complete();



  }

  getMyData(): Observable<string>{
    // console.log('in getMydata method');
    // console.log('doez myData$ haz obzerverz?: ', this.myData$.observed);
    return this.myData$;
  }
}
