
var info = "Refreshing the page in 5 seconds!";

function generate(){

    var rand_num = Math.floor(100000 + Math.random() * 900000);
    document.getElementById("numDiv").innerHTML = rand_num;
    window.localStorage.setItem('RandomNumber',rand_num);
    
    document.getElementById("textDiv").innerHTML = info;
    
    window.setTimeout(myFunction,5000);
        
}

function myFunction(){

        $(document).ready(function(){
            document.getElementById("bod1").style.display = "none";
            document.getElementById("bod2").style.display = "block";
        });  
    }

function checkAns(){
    var num = document.getElementById("randno").value;
    if(num == ''){
        window.alert('Enter the number!');  
    }else{   
            var randomNumber= window.localStorage.getItem('RandomNumber');
            var match = 0;
            var freq = [0,0,0,0,0,0,0,0,0,0];
            
            while(num > 0) {
                var userDigit = num % 10;
                freq[userDigit]++;
                num = Math.floor(num/10);
            }

            while(randomNumber > 0 ) {
                var digit = randomNumber % 10;
                if(freq[digit]) {
                    match++;
                    freq[digit]--;
                }
                randomNumber = Math.floor(randomNumber/10);
            }
            
            document.getElementById('text1Div').innerHTML = match +" "+ "Correct Guess";
            document.getElementById('playButton').style.display = 'block';
        }
    
}

function playAgain(){
    $(document).ready(function(){
        document.getElementById("bod2").style.display = "none";
        document.getElementById("bod1").style.display = "block";
       
        document.getElementById("numDiv").innerHTML = "";
        document.getElementById("textDiv").innerHTML = "";
        document.getElementById('randno').value = "";
        document.getElementById("text1Div").innerHTML = "";
        
        document.getElementById("playButton").style.display = "none";
    
    }); 
}