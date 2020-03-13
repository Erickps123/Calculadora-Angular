import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  public number1 : number;
  public number2 : number;
  public result : number;
  public op: number;
  public operaciones= [];
  public registro;
  public operacion;
  public getLocal="";

  public Resolver(){
    if(this.op==1){
      this.result = this.number1 + this.number2
      this.operacion= " Suma: ";
      this.registro= this.operacion + "" + this.number1 +"+"+ this.number2+"="+this.result;
    }else if(this.op==2){
      this.result = this.number1 - this.number2
      this.operacion= " Resta: ";
      this.registro= this.operacion + "" + this.number1 +"-"+ this.number2+"="+this.result;
    }else if(this.op==3){
      this.result = this.number1 * this.number2
      this.operacion= " Multiplicacion: ";
      this.registro= this.operacion + "" + this.number1 +"*"+ this.number2+"="+this.result;
    }else if(this.op==4){
      this.result = this.number1 / this.number2
      this.operacion= " Division: ";
      this.registro= this.operacion + "" + this.number1 +"/"+ this.number2+"="+this.result;
    }else if(this.op==5){
      this.result = Math.pow(this.number1, this.number2)
      this.operacion= " Potencia: ";
      this.registro= this.operacion + "" + this.number1 +"^"+ this.number2+"="+this.result;
    }else if(this.op==6){
      this.result = Math.sqrt(this.number1)
      this.operacion= " Raiz cuadrada: ";
      this.registro= this.operacion + "de " + this.number1 +"="+this.result;
    }else if(this.op==7){
      this.result = Math.log(this.number1)
      this.operacion= " Ln: ";
      this.registro= this.operacion + "de " + this.number1 +"="+this.result;
    }else if(this.op==8){
      this.result = Math.log10(this.number1)
      this.operacion= " Logaritmo: ";
      this.registro= this.operacion + "de " + this.number1 +"="+this.result;
    }
   this.GuardarLocalStorage();
  }
   public GuardarLocalStorage(){
    var registro=this.registro;
    this.operaciones.push(registro);
    localStorage.setItem('registro', JSON.stringify(this.operaciones));
   
    if(localStorage.getItem('registro')){
               
      this.operaciones = JSON.parse(localStorage.getItem('registro'));
      
   }
  }
  
  public ObtenerLocalStorage(){
    let e= JSON.parse(localStorage.getItem('registro'));

   var Show=  e;    
   var cant = Show.length-1;
   
    for(var i=0;i<=cant;i++){
     
        this.getLocal+= Show[i]+ "\n";
    }          
  }
}
