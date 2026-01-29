import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeesListComponent, MatToolbarModule, MatButtonModule, RouterLink],
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

      .nav-link {
        margin-left: 1rem;
      }
    `,
  ],
  template: `
    <mat-toolbar color="primary">
      <span>Employees Management System</span>
      <span class="toolbar-spacer"></span>
      <button mat-button routerLink="/" class="nav-link">Home</button>
      <button mat-button routerLink="/demo" class="nav-link">Demo</button>
    </mat-toolbar>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
})
// Generiert von GitHub Copilot
export class AppComponent {
  title = 'client';
}
