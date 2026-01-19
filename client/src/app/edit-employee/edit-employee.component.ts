import { Component, OnInit, WritableSignal } from '@angular/core';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [EmployeeFormComponent, MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Edit an Employee</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <app-employee-form
          [initialState]="employee()"
          (formSubmitted)="editEmployee($event)"
        ></app-employee-form>
      </mat-card-content>
    </mat-card>
  `,
  styles: ``,
})
export class EditEmployeeComponent implements OnInit {
  employee = {} as WritableSignal<Employee>;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      alert('No id provided');
    }

    this.employeeService.getEmployee(id!);
    this.employee = this.employeeService.employee$;
  }

  // Generiert von GitHub Copilot - Bearbeiten eines Mitarbeiters mit gemeinsamer Fehlerbehandlung
  editEmployee(employee: Employee) {
    this.employeeService
      .updateEmployee(this.employee()._id || '', employee)
      .subscribe({
        next: () => {
          this.employeeService.navigateToEmployeeList();
        },
        error: (error) => {
          this.employeeService.handleEmployeeOperationError('update', error);
        },
      });
  }
}
