import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WikiPoisPage } from './wiki-pois.page';

describe('WikiPoisPage', () => {
  let component: WikiPoisPage;
  let fixture: ComponentFixture<WikiPoisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiPoisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
