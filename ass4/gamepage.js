let tries=3
var randomnumber=Math.round(Math.random()*15)
alert(randomnumber)
function guess(){
    var guessedNumber=document.getElementById("inp").value
    if(guessedNumber<1 || guessedNumber>15){
        document.getElementById("div").innerHTML="<p>enter the number b/w 1-15</p>"
    }
    else{

        if(guessedNumber==randomnumber){
            document.getElementById("div").innerHTML="<p style='font-size:30px;color:green'>Guessed Number is correct</p>"
            
            document.getElementById("c1").innerHTML="<img src='ywtg.gif' width='1000px' height='500px'> "

            //document.getElementById(tries).innerHTML="<del>"+tries+"</del>"
        }
        else{
            if(guessedNumber>randomnumber && tries>0){
                document.getElementById("div").innerHTML="<p style='font-size:30px;color:red;'>Guessed number is greater than Random Number </p>"
                document.getElementById(tries).innerHTML="<del>"+tries+"</del>"
                if(tries==1){
                    document.getElementById("div").innerHTML="<p>game completed, numeber is "+randomnumber+" </p>"
                }
                tries--
            }
            else if(guessedNumber<randomnumber && tries>0){
                    document.getElementById("div").innerHTML="<p style='font-size:30px;color:red'>Guessed number is lesser than the Random Number</p>"
                    document.getElementById(tries).innerHTML="<del>"+tries+"</del>"
                    if(tries==1){
                        document.getElementById("div").innerHTML="<p>GameOver, number is "+randomnumber+" </p>"
                    }
                    tries--
            }
            else{
                    document.getElementById("div").innerHTML="<h1>Yours choices are completed,Game Over</h1>"
                    document.getElementById("c1").innerHTML="<img width='1000px' height='500px' src='blnt.gif'>"
            }

        }
}

}