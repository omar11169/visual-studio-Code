// //condtions
// // true or false 
// let x = prompt('please enter the number : ')
// //even or odd 
// // if(x % 2 == 0 ){
// //     alert('your number is even '); 

// // }
// // else if (x % 2 != 0){
// //     alert('your number is odd ');

// // }
// // else{
// //     alert('please enter a valid input ')
// // }
// let uservalue = prompt('enter the weather ') ; 
// if( uservalue == 'cold' ){
//     alert('wear a jacket  '); 

// }
// else if (uservalue == 'hot'){
//     alert(' take off the jacket ');

// }
// else{
//     alert(' basha mat2rfnish !! ')
// }


var uservalue ;
var balanceValue = 50000 ;
var amount ; 
console.log("erre")
uservalue =Number(prompt("please enter your option ( 1-withdraw , 2-deposite , 3-Transfer )"));

switch (uservalue) {
    case 1:
       
        //withdraw validation balance
        amount = Number(prompt("please enter your with draw amount  : ")) ;
        if(balanceValue >= amount){
            balanceValue -=  amount ; 
            alert("your transaction accepeted , you withdraw  "+ amount + " your new balance is "+ balanceValue )
        }else{
            alert("insufficient amount ");
        }
        break
    case 2 :
        //deposite
    alert("welcome in 2 condtion")

        break;
    default:
        alert("wrong input please enter 1 or 2  ");
        break;
}



















