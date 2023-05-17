'use strict';
let N=prompt("please enter your name");

let gender=prompt("what is your gender? note: please enter male or female ");
let g1='n'
if(gender=="male"){
    g1="Mr ";
} else if(gender=="female"){
    g1="Ms ";
}else {
    g1="";
}

let age=parseInt(prompt("how old are you"));
if (age<=0){
    alert("your wrote a wrong age ,there is no "+age+" years old");
}
let w_Message=confirm("do you want to skip welcome? your loss..");

if(w_Message && gender=="male"){
    alert("welcome "+ g1 + N +" 3 more questions and we're done..");
}else if(w_Message && gender=="female"){
    alert("welcome "+ g1 + N +" 3 more questions and we're done..");
}else if(w_Message){
    alert("welcome "+ N +", 3 more questions and we're done..");
}

let arr1=[]
function validAns(ans)
{

    if(ans == "" || ans == null)
    {
        arr1.push("invalid");
    }
    else
    {
        arr1.push(ans);
    }
}

function printAns(a)
{
    for(let i=0 ; i<3 ;i++)
    {
        console.log(a[i]);
    }
}


let ans1=validAns(prompt("are you having a good day? note: please answer with yes/no"));


let ans2=validAns(prompt("do you think it's a lot of pop-up boxes? note:please answer with yes/no"));

let ans3=validAns(prompt("are you bored ? note:please answer with yes/no"));
console.log(arr1)
printAns(arr1);

