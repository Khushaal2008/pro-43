class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("black");
        text(code,300,300)
        //add code to return true if correct answer entered.
if(actualCode === enteredCode.toUpperCase())
return true
else
//text("Your answer is wrong or you might have written a word capital letter please write again",100,300)
return false
        
    }

}