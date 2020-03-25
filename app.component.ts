import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string=null;
  password:string=null;
  email:string=null;
city:string=null;
country:string=null;

userInputData="Lilesh";
childdata;

my={'color':'blue','background-color':'orange'};

Textinput=true;
Textinput1=true;
Textinput2=true;

displayText(event){
  this.Textinput=false;
}

displaydata(){
  this.Textinput1=false;
}
  displayInputBox(){
    this.Textinput2=false;
  }


}
