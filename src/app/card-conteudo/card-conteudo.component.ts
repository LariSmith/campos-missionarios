import { Component, Input, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


@Component({
  selector: 'app-card-conteudo',
  templateUrl: './card-conteudo.component.html',
  styleUrls: ['./card-conteudo.component.scss'],
})
export class CardConteudoComponent implements OnInit {

  @Input() linkImagem: string;
  @Input() nome: string;
  @Input() resumo: string;
  @Input() linkSite: string;

  constructor() { }

  ngOnInit() {}

}
