const outputBox = document.querySelector(".output-box");
const numberContainer = document.querySelector(".number-container");
const nineToSix = document.querySelector(".nine-six");
const fourTosix = document.querySelector(".four-six");
const oneToThree = document.querySelector(".one-three");
const signs = document.querySelector(".signs"); 

// numbers
const one = document.querySelector("#one"); 
const two = document.querySelector("#two");
const three = document.querySelector("#three"); 
const four = document.querySelector("#four"); 
const five = document.querySelector("#five"); 
const six = document.querySelector("#six"); 
const seven = document.querySelector("#seven"); 
const eight = document.querySelector("#eight"); 
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero")

// operators 
const del = document.querySelector("#delete"); 
const ac = document.querySelector("#AC"); 
const multiply = document.querySelector("#multiply"); 
const divided = document.querySelector("#divided"); 
const addition = document.querySelector("#addition"); 
const subtract = document.querySelector("#subtract"); 
const equation = document.querySelector("#equal");
const expo = document.querySelector("#exponenet"); 
const fullStop = document.querySelector("#fullstop"); 
const Answer = document.querySelector("#answer"); 

function el1() {
    one.addEventListener("click",(event)=>{

    });

}








function add(firstValue,secondValue){
    return Number(firstValue) + Number(secondValue);
}

function multiplication(firstValue,secondValue){
    return Number(firstValue) * Number(secondValue);
}

function  division(firstValue,secondValue){
    return Number(firstValue) / Number(secondValue);
}

function subtraction(firstValue,secondValue){
    return Number(firstValue) - Number(secondValue);
}

function exponent(firstValue,secondValue){
    return Number(firstValue) ** Number(secondValue);
}

function el1() {
    one.addEventListener("click",()=>{
        if(pressOperator==false){

            firstValue +="1";
            outputBox.innerHTML=firstValue;

        }else {
            outputBox.innerHTML="";
            secondValue +="1";
            outputBox.innerHTML=secondValue;
            
        }
    });
}

function el2() {
    two.addEventListener("click",(event)=>{
        if(pressOperator==false){

            firstValue +="2";
            outputBox.innerHTML=firstValue;

        }else {
            outputBox.innerHTML="";
            secondValue +="2";
            outputBox.innerHTML=secondValue;
        }
    });
}

function el3() {
    three.addEventListener("click",(event)=>{
        if(pressOperator==false){

            firstValue +="3";
            outputBox.innerHTML=firstValue;

        }else {
            outputBox.innerHTML="";
            secondValue +="3";
            outputBox.innerHTML=secondValue;
        }
    });
    
}

function el4() {
    four.addEventListener("click",(event)=>{
        if(pressOperator==false){

            firstValue +="4";
            outputBox.innerHTML=firstValue;

        }else {
            outputBox.innerHTML="";
            secondValue +="4";
            outputBox.innerHTML=secondValue;
            
        }
    });
}

function el5(){
    five.addEventListener("click",(event)=>{
        if(pressOperator==false){

            firstValue +="5";
            outputBox.innerHTML=firstValue;

        }else {
            outputBox.innerHTML="";
            secondValue +="5";
            outputBox.innerHTML=secondValue;
            
        }
    });
}

function el6 (){
    six.addEventListener("click",(event)=>{
        if(pressOperator==false){

            firstValue +="6";
            outputBox.innerHTML=firstValue;

        }else {
            outputBox.innerHTML="";
            secondValue +="6";
            outputBox.innerHTML=secondValue;
            pressOperator  = false; 
        }
    });

}

function el7 () {
    seven.addEventListener("click",(event)=>{
       if(pressOperator==false){

            firstValue +="7";
            outputBox.innerHTML=firstValue;

        }else {
            outputBox.innerHTML="";
            secondValue +="7";
            outputBox.innerHTML=secondValue;
        }
    });
}

function el8() {
    eight.addEventListener("click",(event)=>{
        if(pressOperator==false){

            firstValue +="8";
            outputBox.innerHTML=firstValue;

        }else {
            outputBox.innerHTML="";
            secondValue +="8";
            outputBox.innerHTML=secondValue;
        }

        
    });
}

function el9 () {
    nine.addEventListener("click",(event) =>{
        if(pressOperator==false){

            firstValue +="9";
            outputBox.innerHTML=firstValue;

        }else {
            outputBox.innerHTML="";
            secondValue +="9";
            outputBox.innerHTML=secondValue;
            
        }
    });
}

function el0 () {
    zero.addEventListener("click",()=>{
        if(pressOperator==false){

            firstValue +="0";
            outputBox.innerHTML=firstValue;

        }else {
            outputBox.innerHTML="";
            secondValue +="0";
            outputBox.innerHTML=secondValue;
        }

    });    
}

function elstop(){
    fullStop.addEventListener("click",(event)=>{

            if(pressOperator==false){
                if(firstValue!="" && fullstopCount<1){
                    fullstopCount++;
                    firstValue +=".";
                    outputBox.innerHTML =firstValue;
                }
                fullstopCount=0;
            }else {
                if(secondValue!="" && fullstopCount<1){
                    fullstopCount++;
                    secondValue += ".";
                    outputBox.innerHTML = secondValue;
                }
            }

    });
}


// sign 
function elplus() {
    addition.addEventListener("click",()=>{
        if(firstValue==""){
            outputBox.innerHTML ="";
        }
        else{
            sign = " +";
            outputBox.innerHTML += sign;
            pressOperator = true;
            
        }
    });
}

let firstValue = ""; 
let secondValue = ""; 
let sign = "";
let pressOperator = false;
let fullstopCount =0;


el1();
el2();
el3();
el4();
el5();
el6();
el7();
el8();
el9();
el0();
elstop();

elplus();