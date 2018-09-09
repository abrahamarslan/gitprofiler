import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {UserInterface} from "../../models/user.interface";
import {USER_LIST} from "../../mock/user.mock";

/*
  Generated class for the GitHubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GitHubServiceProvider {

  constructor(/*public http: HttpClient*/) {

  }

  /*
  Filter user
  Params: username
  Return: Observable [Element]
   */
  getMockUserInformation(username: string): Observable<UserInterface> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  }

}
