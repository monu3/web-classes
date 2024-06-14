

//June 14 (Popup boxes)

//Alert,Confirm , Prompt

function displayMessage(msg){
    alert(msg);
}
function redirectToGoogle(){
    let confirmation = confirm("Are youy want to travel google ?");
    if(confirmation){
        window.location.href=`https://google.com`
    }
}


function addTwoNumber(){
    let firstNum = prompt("Enter the first number");
    let secondNum = prompt("Enter the second number");

    alert (Number(firstNum) + Number(secondNum)) ;
}