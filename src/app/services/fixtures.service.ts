import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Fixture } from '../models/fixture';

@Injectable({
  providedIn: 'root'
})
export class FixturesService {

  constructor(private http: HttpClient) { }

  getFixtures(searchTerm: string){
    debugger
    return this.http.get(`https://prem-fixtures.azurewebsites.net/api/Fixtures?searchTerm=${searchTerm}&count=1000&skip=0`);
  }

}
