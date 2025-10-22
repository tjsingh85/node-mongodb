import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [MatCardModule],
  styles: [
    `
      .demo-container {
        max-width: 800px;
        margin: 0 auto;
      }
      
      .demo-content {
        padding: 2rem;
      }
    `,
  ],
  template: `
    <div class="demo-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Demo Page</mat-card-title>
        </mat-card-header>
        <mat-card-content class="demo-content">
          <h2>Welcome to the Demo Page</h2>
          <p>This is a demo page for the MEAN stack application.</p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
})
// Generiert von GitHub Copilot
export class DemoComponent {}
