import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  //showError: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    //this.showError = form.valid;
    console.log("onSubmit method is started; form.valid = ", form.valid);
  }

}
