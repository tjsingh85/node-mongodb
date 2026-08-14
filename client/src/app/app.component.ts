import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    EmployeesListComponent,
    MatToolbarModule,
    MatButtonModule,
  ],
  styles: [
    `
      mat-toolbar {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
      }

      nav {
        display: flex;
        gap: 0.75rem;
      }

      main {
        display: flex;
        justify-content: center;
        padding: 2rem 4rem;
      }
    `,
  ],
  template: `
    <mat-toolbar>
      <span>Employees Management System</span>
      <nav>
        <a mat-button routerLink="/">Home</a>
        <a mat-button routerLink="/demo">Demo</a>
      </nav>
    </mat-toolbar>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppComponent {
  title = 'client';
}
