import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    public carrinhoService: CarrinhoService,
    private notificacaoService: NotificacaoService
  ) { }

  notificarLink(){
    this.notificacaoService.notificar2("Coloquei somente o GitHub e o Linkedin, os ícones do facebook e Instagram são só exemplos.");
  }
}
