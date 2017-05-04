import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const NASA_IMAGERY_API: string = 'https://images-api.nasa.gov';

import {
  INasaImageImageAPIService,
  INasaImage
} from '../models';

@Injectable()
export class NasaImageryService {

  constructor(private http: Http) { }

  public getMissionImages(mission: string): Observable<INasaImage[]> {
    const query: string = `${NASA_IMAGERY_API}/search?q=${mission}&media_type=image`;

    return this.http
      .get(query)
      .map((response: Response) => {
        return (<INasaImageImageAPIService>(response.json())).collection.items;
      });
  }

}
