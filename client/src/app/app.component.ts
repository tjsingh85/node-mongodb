import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeesListComponent, MatToolbarModule, MatButtonModule, MatIconModule, RouterLink],
  styles: [
    `
      main {
        display: flex;
        justify-content: center;
        padding: 2rem 4rem;
      }
      .toolbar-spacer {
        flex: 1 1 auto;
      }
      .nav-button {
        margin-left: 1rem;
      }
    `,
  ],
  template: `
    <mat-toolbar color="primary">
      <span>Employees Management System</span>
      <span class="toolbar-spacer"></span>
      <button mat-button routerLink="/" class="nav-button">
        <mat-icon>people</mat-icon>
        Employees
      </button>
      <button mat-button routerLink="/m365" class="nav-button">
        <mat-icon>cloud</mat-icon>
        M365 Demo
      </button>
    </mat-toolbar>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppComponent {
  title = 'client';
}
