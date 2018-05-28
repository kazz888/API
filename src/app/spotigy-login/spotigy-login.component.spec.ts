import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotigyLoginComponent } from './spotigy-login.component';

describe('SpotigyLoginComponent', () => {
  let component: SpotigyLoginComponent;
  let fixture: ComponentFixture<SpotigyLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotigyLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotigyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
