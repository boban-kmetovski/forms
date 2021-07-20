import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

   originalUserSettings: any = {}//{
  //   name: null,
  //   emailOffers: null,
  //   interfaceStyle: null,
  //   subscriptionType: null,
  //   notes: null
  // };

  userSettings: UserSettings = {...this.originalUserSettings};
  postError: boolean = false;
  postErrorMessage: string = "";
  //showError: boolean = false;
  //subscriptionTypes = ["one", "two", "three", "four"];
  //showError: boolean = false;
  //subscriptionTypes = ["one", "two", "three", "four"];
  subscriptionTypes!: Observable<string[]>;

  singleModel = "On";
  radioModel = "";
  startDate!: Date;
  newParam = 0;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
    this.startDate = new Date();
  }

  onError(err: any){
    console.log("error object: ", err);
    this.postError = true;
    this.postErrorMessage = err.error.errorMessage1;
    this.postErrorMessage += "  " + err.error.errorMessage2;
    console.log(this.postError);
    console.log(this.postErrorMessage);
  }

  onSubmit(form: NgForm){
    //this.showError = form.valid;
    if(form.valid){
      console.log("onSubmit method is started; form.valid = ", form.valid);
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        result => console.log("success", result),
        error => this.onError(error)
      );          
    } else {
      this.postError = true;
      this.postErrorMessage = "please fix errors above";
    }
  }

  onBlur(field: NgModel){
    console.log("onBlur method; untouched: ", field.untouched)
  }

}
