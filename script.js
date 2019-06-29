var total = 0;
var candleAQuantity = 0;
var candleBQuantity = 0;
var candleCQuantity = 0;
var wallet = 0;

function total(){
    total = candleAQuantity * 10 + candleBQuantity * 7 + candleCQuantity * 5;
    document.getElementById('total-value').innerHTML = total;
}
function cash() {
    wallet = document.querySelector('#cash-value').value;
}

function addCandle1() {
    if (total > wallet ){
      alert('your balance is 0');
        return false;
    }
  candleAQuantity++;
    document.getElementById('number').value = candleAQuantity;
   total = candleAQuantity * 10 + candleBQuantity * 7 + candleCQuantity * 5;
    document.getElementById('total-value').innerHTML = total;
    cash();
}

function addCandle2() {
    if (total > wallet ){
        alert('your balance is 0');
          return false;
      }
      
    candleBQuantity++;
    document.getElementById('number2').value = candleBQuantity;
   total = candleAQuantity * 10 + candleBQuantity * 7 + candleCQuantity * 5;
    document.getElementById('total-value').innerHTML = total;
    cash();
}

function addCandle3() {
    if (total > wallet ){
        alert('your balance is 0');
          return false;
      }
      
    candleCQuantity++;
    document.getElementById('number3').value = candleCQuantity;
   total = candleAQuantity * 10 + candleBQuantity * 7 + candleCQuantity * 5;
    document.getElementById('total-value').innerHTML = total;
    cash();
}

function minusCandle1() {
  if(candleAQuantity>0){
    candleAQuantity --
  }
   
    document.getElementById('number').value = candleAQuantity;
   total = candleAQuantity * 10 + candleBQuantity * 7 + candleCQuantity * 5;
    document.getElementById('total-value').innerHTML = total;

}

function minusCandle2() {
    if(candleBQuantity>0){
        candleBQuantity --
      }
   
    document.getElementById('number2').value = candleBQuantity;
   total = candleAQuantity * 10 + candleBQuantity * 7 + candleCQuantity * 5;
    document.getElementById('total-value').innerHTML = total;

}

function minusCandle3() {
    if(candleCQuantity>0){
        candleCQuantity --
      }
  
    document.getElementById('number3').value = candleCQuantity;
   total = candleAQuantity * 10 + candleBQuantity * 7 + candleCQuantity * 5;
    document.getElementById('total-value').innerHTML = total;
}