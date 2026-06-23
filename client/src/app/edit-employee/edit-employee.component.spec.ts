import { signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';

import { EditEmployeeComponent } from './edit-employee.component';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

describe('EditEmployeeComponent', () => {
  const employee: Employee = {
    _id: '42',
    name: 'Jane Doe',
    position: 'Tech Lead',
    level: 'senior',
  };

  // Von GitHub Copilot generiert
  const createRoute = (id: string | null): ActivatedRoute =>
    ({
      snapshot: {
        paramMap: {
          // Von GitHub Copilot generiert
          get: () => id,
        },
      },
    }) as unknown as ActivatedRoute;

  // Von GitHub Copilot generiert
  it('loads the employee on init when an id is present', () => {
    const router = jasmine.createSpyObj<Router>('Router', ['navigate']);
    const employeeService = jasmine.createSpyObj<EmployeeService>(
      'EmployeeService',
      ['getEmployee', 'updateEmployee'],
      { employee$: signal(employee) }
    );
    const component = new EditEmployeeComponent(
      router,
      createRoute('42'),
      employeeService
    );

    component.ngOnInit();

    expect(employeeService.getEmployee).toHaveBeenCalledWith('42');
    expect(component.employee()).toEqual(employee);
  });

  // Von GitHub Copilot generiert
  it('alerts when no id is provided on init', () => {
    const router = jasmine.createSpyObj<Router>('Router', ['navigate']);
    const employeeService = jasmine.createSpyObj<EmployeeService>(
      'EmployeeService',
      ['getEmployee', 'updateEmployee'],
      { employee$: signal(employee) }
    );
    const alertSpy = spyOn(window, 'alert');
    const component = new EditEmployeeComponent(
      router,
      createRoute(null),
      employeeService
    );

    component.ngOnInit();

    expect(alertSpy).toHaveBeenCalledWith('No id provided');
    expect(employeeService.getEmployee).toHaveBeenCalledWith(null as never);
  });

  // Von GitHub Copilot generiert
  it('updates the employee and navigates home', () => {
    const router = jasmine.createSpyObj<Router>('Router', ['navigate']);
    const employeeService = jasmine.createSpyObj<EmployeeService>(
      'EmployeeService',
      ['getEmployee', 'updateEmployee'],
      { employee$: signal(employee) }
    );
    router.navigate.and.returnValue(Promise.resolve(true));
    employeeService.updateEmployee.and.returnValue(of('updated'));
    const component = new EditEmployeeComponent(
      router,
      createRoute('42'),
      employeeService
    );
    component.employee = signal(employee);

    component.editEmployee({
      name: 'Jane Smith',
      position: 'Director',
      level: 'senior',
    });

    expect(employeeService.updateEmployee).toHaveBeenCalledWith('42', {
      name: 'Jane Smith',
      position: 'Director',
      level: 'senior',
    });
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });

  // Von GitHub Copilot generiert
  it('alerts when updating the employee fails', () => {
    const router = jasmine.createSpyObj<Router>('Router', ['navigate']);
    const employeeService = jasmine.createSpyObj<EmployeeService>(
      'EmployeeService',
      ['getEmployee', 'updateEmployee'],
      { employee$: signal(employee) }
    );
    const error = new Error('update failed');
    const alertSpy = spyOn(window, 'alert');
    const consoleErrorSpy = spyOn(console, 'error');
    // Von GitHub Copilot generiert
    employeeService.updateEmployee.and.returnValue(throwError(() => error));
    const component = new EditEmployeeComponent(
      router,
      createRoute('42'),
      employeeService
    );
    component.employee = signal(employee);

    component.editEmployee({
      name: 'Jane Smith',
      position: 'Director',
      level: 'senior',
    });

    expect(alertSpy).toHaveBeenCalledWith('Failed to update employee');
    expect(consoleErrorSpy).toHaveBeenCalledWith(error);
    expect(router.navigate).not.toHaveBeenCalled();
  });
});
