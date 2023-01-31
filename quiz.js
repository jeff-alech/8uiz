/*===============================Linhas de Dicas ================================== */
let dicas ={
 d1:document.querySelector('p#d1'),
 d2:document.querySelector('p#d2'),
 d3:document.querySelector('p#d3'),
 d4:document.querySelector('p#d4'),
 d5:document.querySelector('p#d5'),
 d6:document.querySelector('p#d6'),
 d7:document.querySelector('p#d7'),
 d8:document.querySelector('p#d8')
}
/*================================Final de linha de dicas ================================== */
/*================================Botões de dicas ================================== */
let btnDicas = {
btn1: document.querySelector('input#btd1'),
btn2: document.querySelector('input#btd2'),
btn3: document.querySelector('input#btd3'),
btn4: document.querySelector('input#btd4'),
btn5: document.querySelector('input#btd5'),
btn6: document.querySelector('input#btd6'),
btn7: document.querySelector('input#btd7'),
btn8: document.querySelector('input#btd8')
}
let varDicas = {
   dica1: "Sou um herói",
   dica2: "Não uso capa",
   dica3: "Minhas cores são as mesmas de uma bandeira",
   dica4: "Não sou descolado",
   dica5: "Tenho grandes poderes",
   dica6: "Não sou rico",
   dica7: "Não vivo com meus pais",
   dica8: "Amo ciência"
}
/*================================Botões de Next ================================== */

/*================================Final dos botões de Dicas ================================== */
let pontos = document.querySelector('p#ndica');
let p = 100
let bloqRespo = 0
let resposta = document.querySelector("input#resposta2");
let question = document.querySelector("p#resposta");
let vida = document.querySelector('p#nvida');
let tip = 10;
let vid = 1;
let vidas = 5;
let cont = 0;
/*================================Timer ================================== */
function twoDigits(digit){
   if(digit < 10){
       return("0"+digit);
   }else{
       return(digit)
   }
}
let interval = setInterval(timer, 1000);
let time = document.querySelector('p#timer')
let sec = 30 + 1
function timer(){
   if(sec <= 10){
      time.style.color = "red"}
   if(sec == 1){
      question.style.color = 'black'
      question.innerHTML = "Tempo Esgotado"
      time.innerHTML = "0:00"
      clearInterval(interval);
   }
   sec--
   time.innerHTML = `0:${twoDigits(sec)}` 
}
/*================================Final Timer ================================== */
let respo = { 
   rC:"Homem Aranha",
   rA:"homem aranha",
}
let acertou = `Você Acertou eu sou ${respo.rC}`
/*================================Start Functions ================================== */
function tip1(){
   question.innerHTML = ""
   d1.style.color = "rgb(116, 96, 96)"
   d1.innerHTML = varDicas.dica1
   btnDicas.btn1.style.backgroundColor = "#317ac7"
   pontos.innerHTML -= tip
   p -= 10
   btnDicas.btn1.onclick = function(){
      cont++
      if(cont > 0){
      question.style.color = 'red'
      question.innerHTML = 'Você já usou essa dica'
   }
   }
   if(p == 0 || p < 0){
      question.style.color = 'red'
      question.innerHTML = "Você não tem mais pontos"
      pontos.innerHTML = "0"
      d1.innerHTML = "-"
      btnDicas.btn1.style.backgroundColor = "white"
      }
      if(sec < 1){
         dicas.d1.style.color = 'transparent'
         dicas.d1.innerHTML = "-"
         question.innerHTML = 'Você não tem mais tempo'
      }
      if(bloqRespo == 1){
         dicas.d1.style.color = 'transparent'
         dicas.d1.innerHTML = "-"
         question.innerHTML = 'Você já acertou, vá para a proxima'
         btnDicas.btn1.style.backgroundColor = "green"
      }
      
}
function tip2(){
   question.innerHTML = ""
   d2.style.color = "rgb(116, 96, 96)"
   d2.innerHTML = varDicas.dica2
   btnDicas.btn2.style.backgroundColor = "#317ac7"
   pontos.innerHTML -= tip
   p -= 10
   btnDicas.btn2.onclick = function(){
      cont++
      if(cont > 0){
      question.style.color = 'red'
      question.innerHTML = 'Você já usou essa dica'
   }
   }
   if(p == 0 || p < 0){
      question.style.color = 'red'
      question.innerHTML = "Você não tem mais pontos"
      pontos.innerHTML = "0"
      d2.innerHTML = ""
      btnDicas.btn2.style.backgroundColor = "white"
      }
      if(sec < 1){
         dicas.d2.style.color = 'transparent'
         dicas.d2.innerHTML = "-"
         question.innerHTML = 'Você não tem mais tempo'
      }
      if(bloqRespo == 1){
         dicas.d2.style.color = 'transparent'
         dicas.d2.innerHTML = "-"
         question.innerHTML = 'Você já acertou, vá para a proxima'
         btnDicas.btn2.style.backgroundColor = "green"
      }
}
function tip3(){
   question.innerHTML = ""
   d3.style.color = "rgb(116, 96, 96)"
   d3.innerHTML = varDicas.dica3
   btnDicas.btn3.style.backgroundColor = "#317ac7"
   pontos.innerHTML -= tip
   p -= 10
   btnDicas.btn3.onclick = function(){
      cont++
      if(cont > 0){
      question.style.color = 'red'
      question.innerHTML = 'Você já usou essa dica'
   }
   }
   if(p == 0 || p < 0){
      question.style.color = 'red'
      question.innerHTML = "Você não tem mais pontos"
      pontos.innerHTML = "0"
      d3.innerHTML = ""
      btnDicas.btn3.style.backgroundColor = "white"
      }
      if(sec < 1){
         dicas.d3.style.color = 'transparent'
         dicas.d3.innerHTML = "-"
         question.innerHTML = 'Você não tem mais tempo'
      }
      if(bloqRespo == 1){
         dicas.d3.style.color = 'transparent'
         dicas.d3.innerHTML = "-"
         question.innerHTML = 'Você já acertou, vá para a proxima'
         btnDicas.btn3.style.backgroundColor = "green"
      }
}
function tip4(){
   question.innerHTML = ""
   d4.style.color = "rgb(116, 96, 96)"
   d4.innerHTML = varDicas.dica4
   btnDicas.btn4.style.backgroundColor = "#317ac7"
   pontos.innerHTML -= tip
   p -= 10
   btnDicas.btn4.onclick = function(){
      cont++
      if(cont > 0){
      question.style.color = 'red'
      question.innerHTML = 'Você já usou essa dica'
   }
   }
   if(p == 0 || p < 0){
      question.style.color = 'red'
      question.innerHTML = "Você não tem mais pontos"
      pontos.innerHTML = "0"
      d4.innerHTML = ""
      btnDicas.btn4.style.backgroundColor = "white"
      }
      if(sec < 1){
         dicas.d4.style.color = 'transparent'
         dicas.d4.innerHTML = "-"
         question.innerHTML = 'Você não tem mais tempo'
      }
      if(bloqRespo == 1){
         dicas.d4.style.color = 'transparent'
         dicas.d4.innerHTML = "-"
         question.innerHTML = 'Você já acertou, vá para a proxima'
         btnDicas.btn4.style.backgroundColor = "green"
      }
}
function tip5(){
   question.innerHTML = ""
   d5.style.color = "rgb(116, 96, 96)"
   d5.innerHTML = varDicas.dica5
   btnDicas.btn5.style.backgroundColor = "#317ac7"
   pontos.innerHTML -= tip
   p -= 10
   btnDicas.btn5.onclick = function(){
      cont++
      if(cont > 0){
      question.style.color = 'red'
      question.innerHTML = 'Você já usou essa dica'
   }
   }
   if(p == 0 || p < 0){
      question.style.color = 'red'
      question.innerHTML = "Você não tem mais pontos"
      pontos.innerHTML = "0"
      d5.innerHTML = ""
      btnDicas.btn5.style.backgroundColor = "white"
      }
      if(sec < 1){
         dicas.d5.style.color = 'transparent'
         dicas.d5.innerHTML = "-"
         question.innerHTML = 'Você não tem mais tempo'
      }
      if(bloqRespo == 1){
         dicas.d5.style.color = 'transparent'
         dicas.d5.innerHTML = "-"
         question.innerHTML = 'Você já acertou, vá para a proxima'
         btnDicas.btn5.style.backgroundColor = "green"
      }
}
function tip6(){
   question.innerHTML = ""
   d6.style.color = "rgb(116, 96, 96)"
   d6.innerHTML = varDicas.dica6
   btnDicas.btn6.style.backgroundColor = "#317ac7"
   pontos.innerHTML -= tip
   p -= 10
   btnDicas.btn6.onclick = function(){
      cont++
      if(cont > 0){
      question.style.color = 'red'
      question.innerHTML = 'Você já usou essa dica'
   }
   }
   if(p == 0 || p < 0){
      question.style.color = 'red'
      question.innerHTML = "Você não tem mais pontos"
      pontos.innerHTML = "0"
      d6.innerHTML = ""
      btnDicas.btn6.style.backgroundColor = "white"
      }
      if(sec < 1){
         dicas.d6.style.color = 'transparent'
         dicas.d6.innerHTML = "-"
         question.innerHTML = 'Você não tem mais tempo'
      }
      if(bloqRespo == 1){
         dicas.d6.style.color = 'transparent'
         dicas.d6.innerHTML = "-"
         question.innerHTML = 'Você já acertou, vá para a proxima'
         btnDicas.btn6.style.backgroundColor = "green"
      }
}
function tip7(){
   question.innerHTML = ""
   d7.style.color = "rgb(116, 96, 96)"
   d7.innerHTML = varDicas.dica7
   btnDicas.btn7.style.backgroundColor = "#317ac7"
   pontos.innerHTML -= tip 
   p -= 10
   btnDicas.btn7.onclick = function(){
      cont++
      if(cont > 0){
      question.style.color = 'red'
      question.innerHTML = 'Você já usou essa dica'
   }
   }
   if(p == 0 || p < 0){
      question.style.color = 'red'
      question.innerHTML = "Você não tem mais pontos"
      pontos.innerHTML = "0"
      d7.innerHTML = ""
      btnDicas.btn7.style.backgroundColor = "white"
      }
      if(sec < 1){
         dicas.d7.style.color = 'transparent'
         dicas.d7.innerHTML = "-"
         question.innerHTML = 'Você não tem mais tempo'
      }
      if(bloqRespo == 1){
         dicas.d7.style.color = 'transparent'
         dicas.d7.innerHTML = "-"
         question.innerHTML = 'Você já acertou, vá para a proxima'
         btnDicas.btn7.style.backgroundColor = "green"
      }
}
function tip8(){  
   question.innerHTML = ""
   d8.style.color = "rgb(116, 96, 96)"
   d8.innerHTML = varDicas.dica8
   btnDicas.btn8.style.backgroundColor = "#317ac7"
   pontos.innerHTML -= tip  
   p -= 10
   btnDicas.btn8.onclick = function(){
      cont++
      if(cont > 0){
      question.style.color = 'red'
      question.innerHTML = 'Você já usou essa dica'
   }
   }
   if(p == 0 || p < 0){
      question.style.color = 'red'
      question.innerHTML = "Você não tem mais pontos"
      pontos.innerHTML = "0"
      d8.innerHTML = ""
      btnDicas.btn8.style.backgroundColor = "white"
      }
      if(sec < 1){
         dicas.d8.style.color = 'transparent'
         dicas.d8.innerHTML = "-"
         question.innerHTML = 'Você não tem mais tempo'
      }
      if(bloqRespo == 1){
         dicas.d8.style.color = 'transparent'
         dicas.d8.innerHTML = "-"
         question.innerHTML = 'Você já acertou, vá para a proxima'
         btnDicas.btn8.style.backgroundColor = "green"
      }
   }
/*================================End Functions ================================== */

/*================================Start Resposta ================================== */

function sei(){
   resposta.focus()
   question.innerHTML = ""
   if(resposta.value == ""){
      question.style.color = 'red'
      question.innerHTML = "Você não deu uma resposta válida"
   }else if(resposta.value == respo.rC || resposta.value == respo.rA){
      question.style.color = "black"
      question.innerHTML = acertou
      pontos.innerHTML = p + 50
      bloqRespo++
      clearInterval(interval)
   }else if(resposta.value != respo.rC || resposta.value != respo.rA){
      question.style.color = "black"
      let errou = `Eu não sou, ${resposta.value} tente novamente!`
      question.innerHTML = errou
      vidas--
      pontos.innerHTML -= tip
      p -= tip
      vida.innerHTML = vidas
      if(vidas == 0 || vidas < 0 || p == 0 || p < 0 ){
         pontos.innerHTML = p;
         question.style.color = 'red'
         question.innerHTML = "Suas chances acabaram"
         vida.innerHTML = "0"
         pontos.innerHTML = "0"
         clearInterval(interval)
      } 
   } 
   resposta.value = ""
}
/*================================End Resposta ================================== */
/*================================Typing Animation ================================== */
var typed = new Typed("#pontinhos", {
   strings:[" "," ",".", "..", "..."],
   typeSpeed:1,
   BackSpeed:50,
   loop:true
})
/*================================End Typing Animation ================================== */



 