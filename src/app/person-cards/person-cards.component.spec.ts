import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCardsComponent } from './person-cards.component';

describe('PersonCardsComponent', () => {
  let component: PersonCardsComponent;
  let fixture: ComponentFixture<PersonCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
