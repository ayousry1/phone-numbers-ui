export class Customer {
  id: number;
  name: string;
  phone: string;
  status: string;
  country: string


  constructor(id: number, name: string, phone: string, status: string, country: string) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.status = status;
    this.country = country;
  }
}
