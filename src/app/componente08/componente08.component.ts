import { Component } from '@angular/core';

@Component({
  selector: 'app-componente08',
  imports: [],
  templateUrl: './componente08.component.html',
  styleUrl: './componente08.component.css'
})
export class Componente08Component {

  // 1 Variável de média -> Controlflow - Condicional, Loop e Switch
  media:number = 3;

  //2 Vetor
  nomes:string[] = ['Ralf', 'Ana', 'Danilo', 'Camila'];

  //3 Linguagem
  linguagem:string = 'PHP';

}
