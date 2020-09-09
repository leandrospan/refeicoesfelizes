import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadUsu001Page } from './cad-usu001.page';

describe('CadUsu001Page', () => {
  let component: CadUsu001Page;
  let fixture: ComponentFixture<CadUsu001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadUsu001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadUsu001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
