import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from '../+store/models/person';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@Injectable()
export class PersonService {

    constructor(private http: HttpClient) {
    }

    getPerson(): Observable<Person> {
        return this.http.get('https://uinames.com/api/?ext')
            .pipe(
                map((result: Person) => ({
                    ...{
                        id: new Date().getTime()
                    },
                    ...result
                }))
            );
    }

}
