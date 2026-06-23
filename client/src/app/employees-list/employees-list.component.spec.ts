import { signal } from '@angular/core';
import { of } from 'rxjs';

import { EmployeesListComponent } from './employees-list.component';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

describe('EmployeesListComponent', () => {
  const employees: Employee[] = [
    { _id: '1', name: 'Jane Doe', position: 'Manager', level: 'senior' },
  ];

  // Von GitHub Copilot generiert
  it('loads employees on init', () => {
    const employeeService = jasmine.createSpyObj<EmployeeService>(
      'EmployeeService',
      ['getEmployees', 'deleteEmployee'],
      { employees$: signal(employees) }
    );
    const component = new EmployeesListComponent(employeeService);

    component.ngOnInit();

    expect(component.employees$()).toEqual(employees);
    expect(employeeService.getEmployees).toHaveBeenCalled();
  });

  // Von GitHub Copilot generiert
  it('refreshes employees after deleting an employee', () => {
    const employeeService = jasmine.createSpyObj<EmployeeService>(
      'EmployeeService',
      ['getEmployees', 'deleteEmployee'],
      { employees$: signal(employees) }
    );
    employeeService.deleteEmployee.and.returnValue(of('deleted'));
    const component = new EmployeesListComponent(employeeService);

    component.deleteEmployee('1');

    expect(employeeService.deleteEmployee).toHaveBeenCalledWith('1');
    expect(employeeService.getEmployees).toHaveBeenCalled();
    expect(component.employees$()).toEqual(employees);
  });
});
