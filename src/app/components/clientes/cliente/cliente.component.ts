import { Component } from '@angular/core';
import { ClienteCadastroComponent } from "../cliente-cadastro/cliente-cadastro.component";

@Component({
  selector: 'app-cliente',
  imports: [ClienteCadastroComponent],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {

}
