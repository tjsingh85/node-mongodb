import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  styles: [
    `
      .demo-page {
        width: min(100%, 960px);
        padding: 2rem;
        border-radius: 1.5rem;
        color: #102542;
        background:
          linear-gradient(135deg, rgba(255, 255, 255, 0.94), rgba(244, 247, 251, 0.94)),
          linear-gradient(135deg, #ff6b6b, #4d96ff);
        box-shadow: 0 18px 40px rgba(16, 37, 66, 0.18);
      }

      .hero {
        margin-bottom: 2rem;
      }

      .hero h1 {
        margin: 0 0 0.75rem;
        font-size: clamp(2rem, 4vw, 3rem);
      }

      .hero p {
        margin: 0;
        font-size: 1.05rem;
        line-height: 1.6;
      }

      .palette {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: 1rem;
      }

      .swatch {
        min-height: 150px;
        padding: 1.25rem;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        color: #fff;
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2);
      }

      .swatch strong {
        font-size: 1.1rem;
      }

      .swatch span {
        opacity: 0.85;
      }
    `,
  ],
  template: `
    <section class="demo-page">
      <header class="hero">
        <h1>Colour Demo Page</h1>
        <p>
          Explore a bright palette of colours on the new <code>/demo</code> route.
        </p>
      </header>

      <div class="palette">
        <article
          *ngFor="let colour of colours"
          class="swatch"
          [style.background]="colour.background"
        >
          <strong>{{ colour.name }}</strong>
          <span>{{ colour.hex }}</span>
        </article>
      </div>
    </section>
  `,
})
export class DemoComponent {
  readonly colours = [
    { name: 'Sunset Coral', hex: '#ff6b6b', background: 'linear-gradient(135deg, #ff6b6b, #ff8e53)' },
    { name: 'Ocean Blue', hex: '#4d96ff', background: 'linear-gradient(135deg, #4d96ff, #6bcBff)' },
    { name: 'Golden Glow', hex: '#ffd93d', background: 'linear-gradient(135deg, #ffd93d, #ff9f1c)' },
    { name: 'Mint Burst', hex: '#6bcb77', background: 'linear-gradient(135deg, #6bcb77, #2ec4b6)' },
    { name: 'Lavender Pop', hex: '#845ec2', background: 'linear-gradient(135deg, #845ec2, #d65db1)' },
    { name: 'Night Sky', hex: '#102542', background: 'linear-gradient(135deg, #102542, #1f4068)' },
  ];
}
