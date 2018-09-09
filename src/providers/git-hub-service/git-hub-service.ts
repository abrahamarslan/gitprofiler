import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {UserInterface} from "../../models/user.interface";

/*
  Generated class for the GitHubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GitHubServiceProvider {

  constructor(public http: HttpClient) {

  }

  getMockUserInformation(username: string): Observable<UserInterface> {
    return Observable.
  }

}
