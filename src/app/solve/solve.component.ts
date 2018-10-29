import { Component, OnInit } from '@angular/core';

class Message {
  from: string;
  completed: boolean;
  message: string; 
  encMessage: string; 
  key: number;
  attempts: number;
 //  timeSent: Date; 
   constructor(from: string, message: string, encMessage: string,
     key: number){
       this.from = from;
       this.completed = false;
       this.message = message;
       this.encMessage = encMessage;
       this.key = key;  
       this.attempts = 10;
   }
}
@Component({
  selector: 'app-solve',
  templateUrl: './solve.component.html',
  styleUrls: ['./solve.component.css']
})
export class SolveComponent implements OnInit {
  messages: Message[] = [];
  constructor() { }

  ngOnInit() {
    let message1 = new Message("Paul", "abc", "bcd", 1 );
      this.messages.push(message1);
    }

    doCrypt(isDecrypt){
      // console.log(lngDetector.detect('This is a test.'));
      const chooseCypher = (<HTMLInputElement>document.getElementById("cypher")).value;
      if(chooseCypher === "cCrypt"){
        this.cCrypt(isDecrypt);
      }
      if(chooseCypher === "cCrypt2"){
        this.cCrypt2(isDecrypt);
      }
      this.messages[0].attempts--
    }
  
     cCrypt(isDecrypt) {
      var shiftText = (<HTMLInputElement>document.getElementById("encryptionKey")).value;
      if (!/^-?\d+$/.test(shiftText)) {
        alert("Shift is not an integer");
        return;
      }
      var shift = parseInt(shiftText, 10);
      if (shift < 0 || shift >= 26) {
        alert("Shift is out of range");
        return;
      }
      if (isDecrypt)
        shift = (26 + shift) % 26;
        var textElem = (<HTMLElement>document.getElementById("message"));
        var encMessage = (<HTMLElement>document.getElementById("encMessage"));
        textElem.textContent = this.caesarShift(encMessage.textContent, shift);
        console.log("text element: " + textElem.textContent + "--> Encrypted Element: " + encMessage.textContent)
    }
     cCrypt2(isDecrypt) {
      var shiftText = (<HTMLInputElement>document.getElementById("encryptionKey")).value;
      if (!/^-?\d+$/.test(shiftText)) {
        alert("Shift is not an integer");
        return;
      }
      var shift = parseInt(shiftText, 10);
      if (shift < 0 || shift >= 26) {
        alert("Shift is out of range");
        return;
      }
      if (isDecrypt)
        shift = (26 - shift) % 26;
      var textElem = (<HTMLElement>document.getElementById("message"));
      var encMessage = (<HTMLElement>document.getElementById("encMessage"));
      textElem.textContent = this.caesarShift(encMessage.textContent, shift);
      console.log("text element: " + textElem.textContent + "--> Encrypted Element: " + encMessage.textContent)
    }
  
    caesarShift(text, shift) {
      var result = "";
      for (var i = 0; i < text.length; i++) {
        var c = text.charCodeAt(i);
        if      (65 <= c && c <=  90) result += String.fromCharCode((c - 65 + shift) % 26 + 65);  // Uppercase
        else if (97 <= c && c <= 122) result += String.fromCharCode((c - 97 + shift) % 26 + 97);  // Lowercase
        else                          result += text.charAt(i);  // Copy
      }
      return result;
    }

}