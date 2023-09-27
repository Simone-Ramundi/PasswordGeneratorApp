import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length: number = 0;
  includeLetters=false;
  includeNumbers=false;
  includeSymbols=false;
  password = '';
  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghilmnopqrstuvz';
    const symbols = '!£$%&';

    let validChars = '';
    if(this.includeLetters){
      validChars += letters
    }
    if(this.includeNumbers){
      validChars += numbers
    }
    if(this.includeSymbols){
      validChars += symbols
    }

    let generatedPassword = '';
    for (let i=0;i < this.length; i++){
    const index = Math.floor(Math.random()*validChars.length)
      generatedPassword += validChars[index]
    }
    this.password = generatedPassword;
  }
    onChangeLength(value:string){
     const parsedValue= parseInt(value);
     if(!isNaN(parsedValue)){
       this.length = parsedValue;
     }
    }
    onChangeUseLetters(){
    this.includeLetters = !this.includeLetters
  }

    onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers
  }

    onChangeUseSymbols(){
    this.includeSymbols=!this.includeSymbols
  }
}
