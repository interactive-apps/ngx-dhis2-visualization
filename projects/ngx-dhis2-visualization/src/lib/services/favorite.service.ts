import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { getFavoriteUrl } from '../helpers';
import { NgxDhis2HttpClientService } from '@hisptz/ngx-dhis2-http-client';

@Injectable({ providedIn: 'root' })
export class FavoriteService {
  constructor(private http: NgxDhis2HttpClientService) {}

  getFavorite(favorite: { id: string; type: string }): Observable<any> {
    const favoriteUrl = getFavoriteUrl(favorite);
    return favoriteUrl !== '' ? this.http.get(favoriteUrl) : of(null);
  }
}
