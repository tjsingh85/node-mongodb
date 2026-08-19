import { Component, OnInit, WritableSignal } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [RouterModule, MatTableModule, MatButtonModule, MatCardModule],
  styles: [
    `
      table {
        width: 100%;

        button:first-of-type {
          margin-right: 1rem;
        }
      }
      
      .hello-world-container {
        display: flex;
        justify-content: center;
        margin: 2rem 0;
      }
      
      .hello-world-button {
        padding: 1rem 2rem;
        font-size: 1.2rem;
      }
    `,
  ],
  template: `
    <div class="hello-world-container">
      <button 
        mat-raised-button 
        color="accent" 
        class="hello-world-button"
        (click)="showHelloWorld()"
      >
        Hello World
      </button>
    </div>
    
    <mat-card>
      <mat-card-header>
        <mat-card-title>Employees List</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <table mat-table [dataSource]="employees$()">
          <ng-container matColumnDef="col-name">
            <th mat-header-cell *matHeaderCellDef>Name</th>
            <td mat-cell *matCellDef="let element">{{ element.name }}</td>
          </ng-container>
          <ng-container matColumnDef="col-position">
            <th mat-header-cell *matHeaderCellDef>Position</th>
            <td mat-cell *matCellDef="let element">{{ element.position }}</td>
          </ng-container>
          <ng-container matColumnDef="col-level">
            <th mat-header-cell *matHeaderCellDef>Level</th>
            <td mat-cell *matCellDef="let element">{{ element.level }}</td>
          </ng-container>
          <ng-container matColumnDef="col-action">
            <th mat-header-cell *matHeaderCellDef>Action</th>
            <td mat-cell *matCellDef="let element">
              <button mat-raised-button [routerLink]="['edit/', element._id]">
                Edit
              </button>
              <button
                mat-raised-button
                color="warn"
                (click)="deleteEmployee(element._id || '')"
              >
                Delete
              </button>
            </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
        </table>
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary" [routerLink]="['new']">
          Add a New Employee
        </button>
      </mat-card-actions>
    </mat-card>
  `,
})
export class EmployeesListComponent implements OnInit {
  employees$ = {} as WritableSignal<Employee[]>;
  displayedColumns: string[] = [
    'col-name',
    'col-position',
    'col-level',
    'col-action',
  ];

  constructor(private employeesService: EmployeeService) {}

  ngOnInit() {
    this.fetchEmployees();
  }

  // Generiert von GitHub Copilot
  showHelloWorld = (): void => {
    alert('Hello World!');
  }

  deleteEmployee(id: string): void {
    this.employeesService.deleteEmployee(id).subscribe({
      next: () => this.fetchEmployees(),
    });
  }

  private fetchEmployees(): void {
    this.employees$ = this.employeesService.employees$;
    this.employeesService.getEmployees();
  }
}
