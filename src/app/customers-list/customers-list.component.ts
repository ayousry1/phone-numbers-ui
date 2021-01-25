import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomerService} from '../services/customer.service';
import {Customer} from '../models/Customer';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource;
  filterValue = '';
  displayedColumns: string[] = ['id', 'name', 'phone', 'status', 'country'];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.dataSource.data = this.customerService.getAllCustomers() as any;
    //this.dataSource.data = this.customerService.getAllCustomers();

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = () => {
    this.dataSource.filter = this.filterValue.trim().toLocaleLowerCase();
  }

}
