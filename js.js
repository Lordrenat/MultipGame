function Timer() {
        var j = 59;     
        var idInt = setInterval(function() {
            if (j < 10) {
                document.getElementById("timer").style.color = "red";
				j  = "0" + j;
            }
            document.getElementById("timer").innerHTML = "Таймер <br/>00:"+j;
            if (j == 0) {
                clearInterval(idInt);
                alert("Время вышло!!! Ваш результат - " + ". Перезагрузите страничку");
            }
            j = j - 1;  
        }, 1000);
    }
	

var a;
var b;
var mltp;
var level = 1;
var point = 0;

function Top(){
	document.getElementById("level").innerHTML = "Уровень <br/>"+level;
	document.getElementById("point").innerHTML = "Очки <br/>"+point;
	}
	window.addEventListener('load', Top, false);

	
function Multi() {
	a = Math.floor(Math.random() * 11);
	b = Math.floor(Math.random() * 11);
	mltp =  a*b;
	var answ1 = mltp;
	var answ2 = mltp + Math.floor(Math.random() * 8);
	var answ3 = mltp + Math.floor(Math.random() * 7);
	var answ4 = mltp * Math.floor(Math.random() * 3);
	var answ5 = mltp + Math.floor(Math.random() * 9);
	var mas = [answ1, answ2, answ3, answ4, answ5];
	document.getElementById("mult").innerHTML = a+" × "+b;
	mas.sort(function RndSrt(a, b) {
  		return Math.random() - 0.5;
	});
	for (var i = 0; i<5; i++) {
		document.getElementById("btn"+i).value = mas[i];
	}
}
	window.addEventListener('load', Multi, false);

function Check(val) {
	if (document.getElementById(val).value == mltp){
		alert('Правильно');
		level++;
		point = point + 100;
		Top();
		Multi();
		} else {
			if (point == 0){
				
				} else { 
					point = point - 100;
				}
			alert('Не правильно!');
			Top();
			}
	}
	