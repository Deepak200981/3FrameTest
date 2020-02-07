import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AccrodionData {

    constructor(private http: Http) {}

    getData() {
        return this.http.get('https://reqres.in/api/users?page=2');
    }
}