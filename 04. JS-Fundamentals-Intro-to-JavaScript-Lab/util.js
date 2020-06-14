//find the sum of 3 numbers 
function sumOf3 (){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const num3 = document.getElementById("num3").value;

    console.log(typeof(num1));
    
    const sum3 = document.getElementById("sum3");
    const values = [num1,num2,num3];
    let result = parseInt(values[0]) + parseInt(values[1]) + parseInt(values[2]);
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('num3').value = '';

    sum3.textContent = "the sum of " + num1 + ", "+ num2 + " and " +num3 + " is: " + result;
}

//count the occurrence of given letter in a given string
function countOccurrence(){
    const userInput = document.getElementById("userString").value;
    const toCount = document.getElementById("letter").value;
    const searchResult = document.getElementById("countResult");

    const userArray = userInput.split('');

    const result = userArray.filter(word => word===toCount);
    console.log(result.length);
    searchResult.textContent = "The letter " + toCount  + " has occurred " + result.length + " times";
}

//return the youngest person's age
function fliterByAge(){

    const younger = document.getElementById("younger");
    const person1 = {
        name:document.getElementById("p1Name").value, 
        age: document.getElementById("p1Age").value
};
const person2 = {
    name:document.getElementById("p2Name").value, 
    age: document.getElementById("p2Age").value
};

    if(person1.age > person2.age){
        younger.textContent = person2.name + " Age of " + person2.age + " is younger";
    } else if (person1.age < person2.age) {
        younger.textContent = person1.name + " Age of " + person1.age + " is younger";
    } else {
        younger.textContent = person2.name + " Age of " + person2.age + " is the same age with " + person1.name;
    }
}

//show string of number from 0 to N
function stringToN(){
    const numN = document.getElementById("N").value;

    const nValue = parseInt(numN);
    const stringArray = new Array();
    for(let n =0 ; n <= nValue; n++)
    {
        stringArray.push(n);
    }
    let result = stringArray.toString().replace(/,/g, '');
    document.getElementById("numberToN").textContent= result;
}

//calculate figure's area
function figureArea(){
    const measures = document.getElementById("measures").value;
    const measuresArray = measures.split("");
    // console.log(measuresArray);
    const commonArea = measuresArray[0]*measuresArray[3];
    // console.log(commonArea);
    const bigRegArea = measuresArray[0]*measuresArray[1];
    // console.log(bigRegArea);
    const smallRegArea = measuresArray[2]*measuresArray[3];
    // console.log(smallRegArea);
    const totalArea = bigRegArea + smallRegArea - commonArea;
    // console.log(totalArea);

    document.getElementById("AreaDisplay").textContent = "The total area is: " + totalArea;
}

//retrun the next day
function nextDay(){
    const givenDate = document.getElementById("givenDate").value;
    // console.log(givenDate);
    const year = parseInt(givenDate.slice(0,4));
    const month = parseInt(givenDate.slice(5,7)) -1;
    const day = parseInt(givenDate.slice(8,10));
    // console.log(day);

    const dateValue = new Date(year,month,day);
    // console.log(dateValue);
    dateValue.setDate(dateValue.getDate() + 1);
    // console.log(dateValue);
    document.getElementById("nextDayDisplay").textContent = "The next day is: " + dateValue;
}

function findDistance(){
    const point1 = {
        x : document.getElementById("p1X").value , 
        y : document.getElementById("p1Y").value
    }
    const point2 = {
        x : document.getElementById("p2X").value , 
        y : document.getElementById("p2Y").value
    }

    const dist = Math.sqrt( Math.pow((point1.x-point2.x), 2) + Math.pow((point1.y-point2.y), 2) );

    document.getElementById("distanceDisplay").textContent = "the distance between the 2 points is: " + dist;

}