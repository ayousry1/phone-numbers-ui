import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  ELEMENT_DATA: Customer[];

  constructor(private http: HttpClient) {
    this.ELEMENT_DATA = [
      new Customer(1, 'Ahmed', '01000801913', true, 'Egypt'),
      new Customer(2, 'Helium', '01000801913', false, 'Egypt'),
      new Customer(3, 'Lithium', '01000801913', true, 'Egypt'),
      new Customer(4, 'Beryllium', '01000801913', true, 'Egypt'),
      new Customer(5, 'Boron', '01000801913', false, 'Egypt'),
      new Customer(6, 'Carbon', '01000801913', false, 'Egypt'),
      new Customer(7, 'Nitrogen', '01000801913', true, 'Egypt'),
      new Customer(8, 'Oxygen', '01000801913', true, 'Egypt'),
      new Customer(9, 'Fluorine', '01000801913', false, 'Egypt'),
      new Customer(10, 'Neon', '01000801913', true, 'Egypt'),
      new Customer(11, 'Boron', '01000801913', false, 'Egypt'),
      new Customer(12, 'Carbon', '01000801913', false, 'Egypt'),
      new Customer(13, 'Nitrogen', '01000801913', true, 'Egypt'),
      new Customer(14, 'Oxygen', '01000801913', true, 'Egypt'),
      new Customer(15, 'Fluorine', '01000801913', false, 'Egypt'),
      new Customer(16, 'Neon', '01000801913', true, 'Egypt'),
    ];
  }

  public getAllCustomers = () => {
    return this.ELEMENT_DATA;
    //return this.http.get(this.createCompleteRoute(route, environment.urlAddress));
  };

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  };
}
