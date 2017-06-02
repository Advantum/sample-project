import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JournalService {

  journal: any;


  constructor(private http:Http) { }

  saveJournal(journal){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:4200/api/journal/', journal, {headers: headers})
    .map(res => res.json());
  }

  getAllJournals(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:4200/api/journals', {headers: headers})
    .map(res => res.json());
  }
}
