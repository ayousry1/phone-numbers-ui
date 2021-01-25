import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomersListComponent} from './customers-list/customers-list.component';

const routes: Routes = [
  {path: 'customers', component: CustomersListComponent},
  {path: '', component: CustomersListComponent , pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
