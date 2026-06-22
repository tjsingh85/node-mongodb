import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoComponent } from './demo.component';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders the colour demo heading', () => {
    const heading = fixture.nativeElement.querySelector('h1');

    expect(heading?.textContent).toContain('Colour Demo Page');
  });

  it('renders a swatch for each configured colour', () => {
    const swatches = fixture.nativeElement.querySelectorAll('.swatch');

    expect(swatches.length).toBe(component.colours.length);
  });
});
