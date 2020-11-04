import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GetDataService {

    constructor(private http: HttpClient) { }
    getMore(x): Observable<any> {
        return this.http.get('assets/json/' + x + 'day.json');
    }

}
