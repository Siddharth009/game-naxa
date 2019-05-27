
var scores, roundscore, activeplayer;

scores = [0,0];
roundscore = 0;
activeplayer = 0;









document.getElementById('dice-1').style = "display:none";

window.onload=function(){
    document.getElementById('btn-roll').addEventListener('click', function() {

        var dice = Math.floor(Math.random()*6)+1;
        document.getElementById("current-0").innerHTML = dice;
    
    })

  }





