import { Component } from '@angular/core';
import { OrganizacaoModel } from '../model/organizacao.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  organizacoes: Array<OrganizacaoModel> = [];
  organizacao: OrganizacaoModel = new OrganizacaoModel;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor() {
    
  }

}
