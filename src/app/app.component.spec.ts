import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import {
  BalButtonModule,
  BalCoreModule,
  BalFieldModule,
  BalInputModule,
} from '@baloise/design-system-components-angular';
import { deepReady } from '@baloise/design-system-components';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        BrowserModule,
        BalCoreModule.forRoot(),
        BalButtonModule,
        BalFieldModule,
        BalInputModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Pippen`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.name).toEqual('Pippen');
  });

  it(`should render input value`, async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    await deepReady(compiled, true);
    const input = fixture.debugElement.query(By.css('[data-testid="input"]'))
    console.log(input)
    expect(input.nativeElement.value).toContain('Pippen');
  });

  it(`should render input value`, async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    await deepReady(compiled, true);
    const button = fixture.debugElement.query(By.css('[data-testid="button"]'))
    const input = fixture.debugElement.query(By.css('[data-testid="input"]'))
    button.nativeElement.click()
    fixture.detectChanges();
    expect(input.nativeElement.value).toContain('Jordan');
  });
});
