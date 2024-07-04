import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importa Validators desde @angular/forms

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'AppFormulario';

  public formularioUsuario: FormGroup;
  public enviado = false;
  constructor(private fb: FormBuilder) {

    this.formularioUsuario = this.fb.group({
      nombre: ["", Validators.required],      // Agrega Validators.required
      correo: ["", [Validators.required, Validators.email]],      // Agrega Validators.required
      numero: ["", Validators.required],      // Agrega Validators.required
      direccion: ["", Validators.required]    // Agrega Validators.required
    });
   }

  ngOnInit(): void {

  }

  submitForm(){
    if(this.formularioUsuario.valid){
      this.enviado = true;
    }else{
      this.enviado = false;
    }

  }
}
