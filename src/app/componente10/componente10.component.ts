import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente10',
  imports: [ReactiveFormsModule],
  templateUrl: './componente10.component.html',
  styleUrl: './componente10.component.css'
})
export class Componente10Component {

  formulario = new FormGroup({
    nome : new FormControl(''),
    cidade : new FormControl('')
  });

}
