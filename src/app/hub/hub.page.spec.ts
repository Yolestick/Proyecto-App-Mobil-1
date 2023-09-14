import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HubPage } from './hub.page';

describe('HubPage', () => {
  let component: HubPage;
  let fixture: ComponentFixture<HubPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
