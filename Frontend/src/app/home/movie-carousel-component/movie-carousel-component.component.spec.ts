import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCarouselComponentComponent } from './movie-carousel-component.component';

describe('MovieCarouselComponentComponent', () => {
  let component: MovieCarouselComponentComponent;
  let fixture: ComponentFixture<MovieCarouselComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCarouselComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCarouselComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
