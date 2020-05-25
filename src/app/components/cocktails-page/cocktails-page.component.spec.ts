import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsPageComponent } from './cocktails-page.component';

describe('CocktailsPageComponent', () => {
  let component: CocktailsPageComponent;
  let fixture: ComponentFixture<CocktailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
