import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  styles: [
    `
      .color-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        padding: 2rem;
      }

      .color-card {
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
        cursor: pointer;
      }

      .color-card:hover {
        transform: scale(1.05);
      }

      .color-name {
        background-color: rgba(255, 255, 255, 0.9);
        padding: 0.5rem 1rem;
        border-radius: 4px;
        font-weight: bold;
        color: #333;
      }

      mat-card {
        margin: 2rem auto;
        max-width: 1200px;
      }
    `,
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Color Demo Page</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <div class="color-grid">
          <div
            *ngFor="let color of colors"
            class="color-card"
            [style.background-color]="color.value"
          >
            <span class="color-name">{{ color.name }}</span>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
})
// Generiert von GitHub Copilot
export class DemoComponent {
  colors = [
    { name: 'Red', value: '#FF5252' },
    { name: 'Pink', value: '#FF4081' },
    { name: 'Purple', value: '#9C27B0' },
    { name: 'Deep Purple', value: '#673AB7' },
    { name: 'Indigo', value: '#3F51B5' },
    { name: 'Blue', value: '#2196F3' },
    { name: 'Light Blue', value: '#03A9F4' },
    { name: 'Cyan', value: '#00BCD4' },
    { name: 'Teal', value: '#009688' },
    { name: 'Green', value: '#4CAF50' },
    { name: 'Light Green', value: '#8BC34A' },
    { name: 'Lime', value: '#CDDC39' },
    { name: 'Yellow', value: '#FFEB3B' },
    { name: 'Amber', value: '#FFC107' },
    { name: 'Orange', value: '#FF9800' },
    { name: 'Deep Orange', value: '#FF5722' },
  ];
}
