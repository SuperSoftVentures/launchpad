import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class BaseService {

  constructor() { }

  getUrl(path: string) {
    return environment.servicesBaseUrl + path;
  }

}
