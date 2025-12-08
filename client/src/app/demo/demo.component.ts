import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Demo Page</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>Welcome to the demo page!</p>
        <p>This is a sample demonstration page for the application.</p>
      </mat-card-content>
    </mat-card>
  `,
  styles: `
    mat-card {
      max-width: 600px;
    }
  `,
})
// Generiert von GitHub Copilot
export class DemoComponent {}
