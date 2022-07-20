import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CustomersListComponent } from '../customers-list/customers-list.component';
import { OrdersListComponent } from '../orders-list/orders-list.component';
import { ProductsListComponent } from '../products-list/products-list.component';

const routes: Routes = [
  { path: 'customers', component: CustomersListComponent },
  { path: 'products', component: ProductsListComponent },
  { path: 'orders', component: OrdersListComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
