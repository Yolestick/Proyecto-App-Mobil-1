import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperatePage } from './recuperate.page';

describe('RecuperatePage', () => {
  let component: RecuperatePage;
  let fixture: ComponentFixture<RecuperatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecuperatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
