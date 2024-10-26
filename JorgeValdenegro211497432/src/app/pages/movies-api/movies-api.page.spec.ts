import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesApiPage } from './movies-api.page';

describe('MoviesApiPage', () => {
  let component: MoviesApiPage;
  let fixture: ComponentFixture<MoviesApiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesApiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
