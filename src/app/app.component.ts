import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formularios';
  extraCreature!: string;



@ViewChild ('someInput') someInput!: ElementRef;

ngAfterViewInit (){
  this.someInput.nativeElement.value = "monito"


  console.log(this.extraCreature)
}
}

