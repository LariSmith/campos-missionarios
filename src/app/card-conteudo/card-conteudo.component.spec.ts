import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardConteudoComponent } from './card-conteudo.component';

describe('CardConteudoComponent', () => {
  let component: CardConteudoComponent;
  let fixture: ComponentFixture<CardConteudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardConteudoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
