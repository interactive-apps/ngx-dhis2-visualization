import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class SystemService {
  constructor(private httpClient: HttpClient) {}

  getSystemInfo(): Observable<any> {
    return this.httpClient.get('../../../api/system/info.json');
  }

  getGoogleEarthToken(): Observable<any> {
    return this.httpClient.get('../../../api/tokens/google');
  }

  getMapID(): Observable<any> {
    return this.httpClient.get('../../../api/tokens/google');
  }
}
