import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { CHARACTERS } from './empdetail';
@Injectable()
export class EmpDetailService {
constructor() { }
getCharacters(): Observable<any[]>{
  return Observable.of(CHARACTERS).delay(100);
}
getColumns(): string[]{
  return ["Technology", "Description","Years"]};
}