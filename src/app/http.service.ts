import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getPicture() {
    return this.http.get(
      'https://api.unsplash.com/photos/?client_id=m86J6V6T7JN1EC9JBRfp1VCF3gpXNFWeaPtZguwwwnw'
    );
  }
}
