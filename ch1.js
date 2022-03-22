// بسم الله 
// : JS variable, Data types

variable == var ;

وبتنقسم ل

console.log(a); // undefind    انت بتطبع حاجه لسا متعرفتش ولا وصلت ليها 

 number     =>  var a = 32;

String      =>    a = "mikro";

boolean     =>      a = false;

null        =>     a = null ;
 
console.log(a);  // null 
// JS operators
1 unary operators          x   //++ --
2 binary operators         t  + - %  u //    += *= %=  عددين اتنين بس
3 ternary operators        n   m   v  
// Logical operators

and && //binary
v1 =0 && v2=0 && v3=4 && =>>>> false // ده لو لقي حاجه غلط هيقولك والله ممكمل

v1 =1 && v2=0 && v3=4 && =>>>> false // ههه انا رخم وهقف عند الصفر

v1 =1 && v2=8 && v3=4 && =>>>> true // يا طعميه true لا تسوي نفسك

|| or //binary
v1 =0 && v2=0 && v3=4 && =>>>> true // رجوله والله
v1 =0 && v2=7 && v3=4 && =>>>> true
v1 =0 && v2=0 && v3=0 && =>>>> false

not !  //unary  بتعكس
 
false//true 
true  //false


// String, special and ternary operator

type of . , 
// Data types Coercion in JS
var c =5 // bollean
var y ="5" >>>>> //string بتتعامل معاه علي انه 
console.log(x==y); 
// Conditional statements
if (condition){
    // var a = 55;

}
لو غلط وملقتش المطلوب خش بقا علي 

else{
    alert("error404");
}

لو الموضوع هيطول وهتبق هيصه في الكلام نستخدم

var favcolor=prompt("select your color" ,"1 ) red   2(green  3)(yellow  4)(blue 5)(brown");
switch(favcolor){
    case "1"
   color:("red")
    break;

    case "2"
    color:("green")
    break;


    case"3"
  color:("yellow")
    break;
    default:
        alert("error899")
}
// Loop statements
for(condition,initialexpression,incrementexpression){
}

for (var i=5; i<10;i++){
    document.write("the of i is "+i+" <br>);
}
//  Dialogue boxes in JS
 باخد داتا وبوصله داتا
var x =10;
 alert 
  alert("this is an alert")
 alert("value of  x is " +x)
 prompt
 var response= prompt("enter your name","ahemd")
 confirm
 var action =confirm("are you ready!")