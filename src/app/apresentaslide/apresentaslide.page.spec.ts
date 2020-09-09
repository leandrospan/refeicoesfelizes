import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApresentaslidePage } from './apresentaslide.page';

describe('ApresentaslidePage', () => {
  let component: ApresentaslidePage;
  let fixture: ComponentFixture<ApresentaslidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApresentaslidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApresentaslidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
