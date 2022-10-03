const display = document.querySelector(".display");
const buttons = Array.from(document.getElementsByClassName("button"));


buttons.map(button => {
    button.addEventListener('click',(e) => {

        switch(e.target.innerText){
            case 'C':
                display.innerText = ' ';
                break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1);
                }
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);    
                } catch (error) {
                    display.innerText = "Error";
                }
               
                break;    
            default:
                display.innerText += e.target.innerText;
        }

    })
})




// Keyboard handling



window.addEventListener('keypress', (e) => {

    switch(e.key){
        case '1':
            display.innerText += "1";
            break;

        case '2':
            display.innerText += "2";
            break;

        case '3':
            display.innerText += "3";
            break;

        case '4':
            display.innerText += "4";
            break;

        case '5':
            display.innerText += "5";
            break;

        case '6':
            display.innerText += "6";
            break;

        case '7':
            display.innerText += "7";
            break;

        case '8':
            display.innerText += "8";
            break;

        case '9':
            display.innerText += "9";
            break;   
           
        case '0':
            display.innerText += "0";
            break;

        case '/':
            display.innerText += "/";
            break;

        case '*':
            display.innerText += "*";
            break;

        case '-':
            display.innerText += "-";
            break; 

        case '+':
            display.innerText += "+";
            break;
        case '.':
            display.innerText += '.';
            break;
        case 'c':
            display.innerText = "";
            break;    

        case 'x':
            if(display.innerText){
                display.innerText= display.innerText.slice(0,-1);
             }
            break;

        case 'C':
            display.innerText = "";
            break;    

        case 'X':
            if(display.innerText){
                display.innerText= display.innerText.slice(0,-1);
             }
            break;

        case 'Enter':
            try {
                display.innerText = eval(display.innerText);    
            } catch (error) {
                display.innerText = "Error";
            }
            break; 


        default:
            display.innerText = "";
    }


});




