import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private REST_API_SERVER = 'http://localhost:8080/customer/';

  constructor(private http: HttpClient) {
  }

  public getAllCustomers() {
    return this.http.get(this.REST_API_SERVER);
  }
}
