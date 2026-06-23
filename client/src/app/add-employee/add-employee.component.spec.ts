import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';

import { AddEmployeeComponent } from './add-employee.component';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

describe('AddEmployeeComponent', () => {
  const employee: Employee = {
    name: 'John Doe',
    position: 'Engineer',
    level: 'mid',
  };

  // Von GitHub Copilot generiert
  it('creates an employee, refreshes the list, and navigates home', () => {
    const router = jasmine.createSpyObj<Router>('Router', ['navigate']);
    const employeeService = jasmine.createSpyObj<EmployeeService>(
      'EmployeeService',
      ['createEmployee', 'getEmployees']
    );
    router.navigate.and.returnValue(Promise.resolve(true));
    employeeService.createEmployee.and.returnValue(of('created'));

    const component = new AddEmployeeComponent(router, employeeService);

    component.addEmployee(employee);

    expect(employeeService.createEmployee).toHaveBeenCalledWith(employee);
    expect(employeeService.getEmployees).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });

  // Von GitHub Copilot generiert
  it('alerts when employee creation fails', () => {
    const router = jasmine.createSpyObj<Router>('Router', ['navigate']);
    const employeeService = jasmine.createSpyObj<EmployeeService>(
      'EmployeeService',
      ['createEmployee', 'getEmployees']
    );
    const error = new Error('create failed');
    const alertSpy = spyOn(window, 'alert');
    const consoleErrorSpy = spyOn(console, 'error');
    // Von GitHub Copilot generiert
    employeeService.createEmployee.and.returnValue(throwError(() => error));

    const component = new AddEmployeeComponent(router, employeeService);

    component.addEmployee(employee);

    expect(alertSpy).toHaveBeenCalledWith('Failed to create employee');
    expect(consoleErrorSpy).toHaveBeenCalledWith(error);
    expect(employeeService.getEmployees).toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalled();
  });
});
