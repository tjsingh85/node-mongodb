import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

import { EmployeeService } from './employee.service';
import { Employee } from './employee';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpTestingController: HttpTestingController;

  // Von GitHub Copilot generiert
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(EmployeeService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  // Von GitHub Copilot generiert
  afterEach(() => {
    httpTestingController.verify();
  });

  // Von GitHub Copilot generiert
  it('loads employees into the signal', () => {
    const employees: Employee[] = [
      { _id: '1', name: 'Jane Doe', position: 'Manager', level: 'senior' },
    ];

    expect(service.getEmployees()).toEqual([]);

    const request = httpTestingController.expectOne(
      'http://localhost:5200/employees'
    );
    expect(request.request.method).toBe('GET');
    request.flush(employees);

    expect(service.employees$()).toEqual(employees);
  });

  // Von GitHub Copilot generiert
  it('loads a single employee into the signal', () => {
    const employee: Employee = {
      _id: '1',
      name: 'John Doe',
      position: 'Developer',
      level: 'mid',
    };

    service.getEmployee('1');

    const request = httpTestingController.expectOne(
      'http://localhost:5200/employees/1'
    );
    expect(request.request.method).toBe('GET');
    request.flush(employee);

    expect(service.employee$()).toEqual(employee);
  });

  // Von GitHub Copilot generiert
  it('creates an employee', () => {
    const employee: Employee = {
      name: 'Alice Doe',
      position: 'Architect',
      level: 'senior',
    };

    service.createEmployee(employee).subscribe();

    const request = httpTestingController.expectOne(
      'http://localhost:5200/employees'
    );
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(employee);
    expect(request.request.responseType).toBe('text');
    request.flush('created');
  });

  // Von GitHub Copilot generiert
  it('updates an employee', () => {
    const employee: Employee = {
      name: 'Bob Doe',
      position: 'Lead Dev',
      level: 'senior',
    };

    service.updateEmployee('7', employee).subscribe();

    const request = httpTestingController.expectOne(
      'http://localhost:5200/employees/7'
    );
    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(employee);
    expect(request.request.responseType).toBe('text');
    request.flush('updated');
  });

  // Von GitHub Copilot generiert
  it('deletes an employee', () => {
    service.deleteEmployee('3').subscribe();

    const request = httpTestingController.expectOne(
      'http://localhost:5200/employees/3'
    );
    expect(request.request.method).toBe('DELETE');
    expect(request.request.responseType).toBe('text');
    request.flush('deleted');
  });
});
