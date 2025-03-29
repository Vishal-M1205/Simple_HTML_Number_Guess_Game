let ans,max,min;
max = 50;
min = 0;
ans = Math.round(Math.random()*max + min - 1);
console.log(ans);

let guess;
let button;
let guessText;
let cont;
let game;
cont = document.getElementById('head1');
guessText = document.getElementById('guess');
    
    button = document.getElementById('submit').onclick = function()
    {
        guess = document.getElementById('input').value;
        guess = Number(guess);
        console.log(guess);
        game = true;
        while(game){
            if(guess > ans)
                {
                    guessText.textContent = 'TOO HIGH!'; 
                    game=false;
                }
                else if(guess < ans){
                    guessText.textContent = 'TOO LOW!'; 
                    game=false;
                }
                else if(guess == ans){

                    guessText.textContent = 'YOU WON!'; 
                    
                    cont.textContent = 'Reload the page to play again!';
                    game=false;
                }
                else{
                    console.log('WAITING..')
                    game=false;
            
                }
        }
        
    }
    
    


