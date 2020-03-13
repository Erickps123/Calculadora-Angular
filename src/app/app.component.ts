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

  public Resolver(){
    if(this.op==1){
      this.result = this.number1 + this.number2
    }else if(this.op==2){
      this.result = this.number1 - this.number2
    }else if(this.op==3){
      this.result = this.number1 * this.number2
    }else if(this.op==4){
      this.result = this.number1 / this.number2
    }else if(this.op==5){
      this.result = Math.pow(this.number1, this.number2)
    }else if(this.op==6){
      this.result = Math.sqrt(this.number1)
    }else if(this.op==7){
      this.result = Math.log(this.number1)
    }else if(this.op==8){
      this.result = Math.log10(this.number1)
    }
  }
}
