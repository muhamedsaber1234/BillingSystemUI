import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../Components/sidebar/sidebar.component';
import { ClientComponent } from '../Components/client/client.component';
import { EmployeeComponent } from '../Components/employee/employee.component';
import { UnitFormComponent } from '../Components/unit-form/unit-form.component';
import { HomeComponent } from '../Components/home/home.component';
import { SalesInvoiceComponent } from '../Components/sales-invoice/sales-invoice.component';
import { ItemComponent } from '../Components/item/item.component';
import { UnitsComponent } from '../Components/units/units.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    ClientComponent,
    EmployeeComponent,
    HomeComponent,
    SalesInvoiceComponent,
    UnitsComponent,
    ItemComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'task';
}
