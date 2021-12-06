import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
 @Component({
   selector: 'app-formulario',
   templateUrl: './formulario.component.html',
   styleUrls: ['./formulario.component.css']
 })
export class FormularioComponent implements OnInit {
 
  personaModel: FormGroup ;
  constructor()  {
  
  this.personaModel= new FormGroup ({
    nombre: new FormControl(),
    apellido: new FormControl(),
    mail: new FormControl()
  })  }
  
  guardar(){

    console.log("se guardaron los datos "+ this.personaModel.value.mail);
  };
 
  ngOnInit(): void {
    console.log("Se inicio correctamente")
  }
    

}





