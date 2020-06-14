
//sum of 3 numbers 
document.getElementById("btn1").addEventListener("click",sumOf3);

//Add price
var prices = new Array();
document.getElementById("addPrice").addEventListener("click",function(){
    prices.push(document.getElementById("price").value);
    document.getElementById("price").value = '';
});

//counter prices with VAT
document.getElementById("result").addEventListener("click",function (){
    let result =0.0;
    prices.forEach(element => {
        result = result + parseFloat(element);
    });
    result = result + result*20/100;
    values=null;
    document.getElementById("resultWithVAT").textContent = "The sum of prices including VAT is: " + result.toFixed(2);
});
document.getElementById("yngrCheck").addEventListener("click",fliterByAge);
document.getElementById("count").addEventListener("click",countOccurrence);
document.getElementById("countString").addEventListener("click",stringToN);
document.getElementById("area").addEventListener("click",figureArea);
document.getElementById("nextDay").addEventListener("click",nextDay);
document.getElementById("distance").addEventListener("click",findDistance);