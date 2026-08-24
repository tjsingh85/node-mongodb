import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { EmployeeFormComponent } from './employee-form.component';
import { Employee } from '../employee';

describe('EmployeeFormComponent', () => {
  // Von GitHub Copilot generiert
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeFormComponent, NoopAnimationsModule],
    }).compileComponents();
  });

  // Von GitHub Copilot generiert
  it('applies the initial state to the form', () => {
    const fixture = TestBed.createComponent(EmployeeFormComponent);
    const employee: Employee = {
      _id: '1',
      name: 'Jane Doe',
      position: 'Designer',
      level: 'mid',
    };

    fixture.componentRef.setInput('initialState', employee);
    fixture.detectChanges();

    expect(fixture.componentInstance.employeeForm.getRawValue()).toEqual({
      name: 'Jane Doe',
      position: 'Designer',
      level: 'mid',
    });
  });

  // Von GitHub Copilot generiert
  it('exposes the form controls through getters', () => {
    const fixture = TestBed.createComponent(EmployeeFormComponent);
    fixture.detectChanges();

    expect(fixture.componentInstance.name).toBe(
      fixture.componentInstance.employeeForm.get('name')!
    );
    expect(fixture.componentInstance.position).toBe(
      fixture.componentInstance.employeeForm.get('position')!
    );
    expect(fixture.componentInstance.level).toBe(
      fixture.componentInstance.employeeForm.get('level')!
    );
  });

  // Von GitHub Copilot generiert
  it('emits submitted form values', () => {
    const fixture = TestBed.createComponent(EmployeeFormComponent);
    fixture.detectChanges();
    spyOn(fixture.componentInstance.formSubmitted, 'emit');

    fixture.componentInstance.employeeForm.setValue({
      name: 'John Doe',
      position: 'Engineer',
      level: 'junior',
    });

    fixture.componentInstance.submitForm();

    expect(fixture.componentInstance.formSubmitted.emit).toHaveBeenCalledWith({
      name: 'John Doe',
      position: 'Engineer',
      level: 'junior',
    });
  });
});
