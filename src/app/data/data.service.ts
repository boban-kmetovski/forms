import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  subscrList =[];


  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    return this.http.post("https://putsreq.com/9OqOxG0dsEx83o7rUrkk", userSettings);
    
    //return of(userSettings);
  }

  getSubscriptionTypes(): Observable<string[]> {
    // console.log("XXXXX", this.http.get("https://putsreq.com/K7jvbmgHROPJVnPJX6SG"));
    // return this.http.get("https://putsreq.com/K7jvbmgHROPJVnPJX6SG");

    return of(["Monthly", "Annual", "Lifetime", "fromObservable"]);
  }
 
}
