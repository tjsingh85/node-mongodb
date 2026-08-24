import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { appConfig } from './app.config';
import { config } from './app.config.server';
import { routes } from './app.routes';

describe('app setup', () => {
  // Von GitHub Copilot generiert
  it('defines the expected application routes', () => {
    expect(routes).toEqual([
      { path: '', component: EmployeesListComponent, title: 'Employees List' },
      { path: 'new', component: AddEmployeeComponent },
      { path: 'edit/:id', component: EditEmployeeComponent },
    ]);
  });

  // Von GitHub Copilot generiert
  it('exposes client and server application config providers', () => {
    expect(appConfig.providers).toBeDefined();
    expect(config.providers).toBeDefined();
  });
});
