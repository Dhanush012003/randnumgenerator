guess = Math.floor(Math.random()*100);
        console.log(guess)
        c = 10

        function start() {
            if(c > 1){
                i = document.getElementsByTagName("input")[0].value;
                if(i > guess){
                    c--
                    document.getElementById("p").textContent="Guess low"
                    document.getElementById("l").textContent="Lives Remaining: "+c
                }else if(i < guess){
                    c--;
                    document.getElementById("p").textContent="Guess High"
                    document.getElementById("l").textContent="Lives Remaining: "+c

                }
                else if(i==guess){
                    document.getElementById("p").textContent="You Guessed The Number Correctly"
                    alert("Congratulations you won!")
                    document.getElementsByTagName('button').value='playagain'
                    location.reload()
                }
            }else{
                alert("You lose the game...Correct ans: "+guess)
                location.reload()
            }
               
        }