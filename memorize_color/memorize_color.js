clicked = false;
punteggio = 0;

function inizia() {

   if (!clicked) {
      clicked = true;

      a = setInterval(Colora, 800);
      document.getElementById("game").style.backgroundColor = "black";
      document.getElementById("game").style.borderColor = "black";
      document.getElementById("game").style.borderStyle = "solid";
      document.getElementById("game").style.borderWidth = "10px";
      document.getElementById("game").style.borderRadius = "20%";

      document.getElementById("guess").innerHTML="Punteggio: "+punteggio;
   }

}  

sequenza = 0;
length_sequenza = 5;
guess = false;
sequence = ""
user_guess = "";

i = 0;

function Colora() {
   if (sequenza == length_sequenza) {
      clearInterval(a);
      sequenza = 0;
      document.getElementById("game").style.borderColor = "black";
      //document.getElementById("game").innerHTML= "";
      guess = true;

      i = 0;

   } else {

      if (i % 2 == 0) {

         sequenza ++;
         colore = Math.floor(Math.random() * 4) + 1;

         if (colore == 1) {
            document.getElementById("game").style.borderColor = "red";
            sequence += "r";   
         } else if (colore == 2) {
            document.getElementById("game").style.borderColor = "yellow";
            sequence += "y";   
         } else if (colore == 3) {
            document.getElementById("game").style.borderColor = "green";  
            sequence += "g";    
         } else if (colore == 4) {
            document.getElementById("game").style.borderColor = "blue";
            sequence += "b";  
         }

         //document.getElementById("test").innerHTML=sequence;
         
         //document.getElementById("game").innerHTML= sequenza;
      } else {
         document.getElementById("game").style.borderColor = "black";
      }

      i++;
   }
}

function check() {
   if (user_guess.length == sequence.length) {
      if (user_guess == sequence) {
         document.getElementById("guess").innerHTML="Hai vinto!";
         clicked = false;
         length_sequenza++;
         punteggio++;
      } else {
         document.getElementById("guess").innerHTML="Hai perso :(";
         clicked = false;
         length_sequenza = 5;
         punteggio = 0;
      }

      guess = false;
      sequence = ""
      user_guess = "";
   }
}
   

function color_red(){
   if (guess) {
      user_guess += "r";
      document.getElementById("game").style.borderColor = "red";
      //document.getElementById("guess").innerHTML= user_guess;
      check();
   }
}

function color_yellow(){
   if (guess) {
      user_guess += "y";
      document.getElementById("game").style.borderColor = "yellow";
      //document.getElementById("guess").innerHTML= user_guess;
      check();
   }
}

function color_green(){
   if (guess) {
      user_guess += "g";
      document.getElementById("game").style.borderColor = "green";
      //document.getElementById("guess").innerHTML= user_guess;
      check();
   }
}

function color_blu(){
   if (guess) {
      user_guess += "b";
      document.getElementById("game").style.borderColor = "blue";
      //document.getElementById("guess").innerHTML= user_guess;
      check();
   }
}
