import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MaterialsModule } from './material/materials.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MaterialsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NavigationBarComponent,
    CustomersListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
