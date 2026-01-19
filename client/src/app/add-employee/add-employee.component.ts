import { Component } from '@angular/core';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [EmployeeFormComponent, MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Add a New Employee</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <app-employee-form
          (formSubmitted)="addEmployee($event)"
        ></app-employee-form>
      </mat-card-content>
    </mat-card>
  `,
  styles: ``,
})
export class AddEmployeeComponent {
  constructor(private employeeService: EmployeeService) {}

  // Generiert von GitHub Copilot - Hinzufügen eines Mitarbeiters mit gemeinsamer Fehlerbehandlung
  addEmployee(employee: Employee) {
    this.employeeService.createEmployee(employee).subscribe({
      next: () => {
        this.employeeService.navigateToEmployeeList();
      },
      error: (error) => {
        this.employeeService.handleEmployeeOperationError('create', error);
      },
    });
    this.employeeService.getEmployees();
  }
}
