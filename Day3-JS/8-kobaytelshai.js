//functions 
// basic syntax each bt re implemnt 

// function ():--> make a certain job 
//syntax : function funcname(){
//          action 
//}

// funcname()
// minimize  function to do a certain job 
// function showmessage(){
//     alert('hello every one ');
// }

// showmessage()

// function greetings(){
//     alert('hello there '); 
// }

// greetings();
// function greetings(name){
//     alert(`hello there ${name}` );

// }
function funcname(name) {
    console.log("hola form script" +name);
}
// greetings('yousif') ;
funcname("yousif");
funcname(12);
function greeting(name = "unknown"){
    alert(`hello there ${name}`)

}
greeting("yousif");// hello there yousif 
// function kobaytshai(sugar = '1spoon' , type = 'm'){
//     alert(`your cup of tea is ready with ${sugar} amount and type ${type}`)
// }

// kobaytshai();

// kobaytshai('1 and half' , 'heavy');

// function iseven(x){
//     if(x % 2 == 0 ){
//         alert('your number is even '); 
        
//     }
//     else{
//         alert('your number is odd') ;
        
//     }
// }

// function iseven(x){
//     if(x % 2 == 0 ){
//         // alert('your number is even '); 
//         return true ;
//     }
//     // else{
//     //     // alert('your number is odd') ;
//     //     return false ; 
//     // }
//     return false ;
// }
alert(iseven(3));















function iseven(x){
    if(x % 2 == 0)
        return true; // return is the exist way outside the function
    return false ;
}

if(iseven(5))
{
    alert("even number")

}else{
    alert("odd number")
    
}
