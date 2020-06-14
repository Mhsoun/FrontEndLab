
//Rectangle
function Rectangle (width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.calcArea = function (){
        return width*height;
    }
}

let rect = new Rectangle(4, 5, 'red');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());


//Person
class Person
{
    constructor(firstname,lastname,age,email)
    {
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.email=email;
    }
    toString()
    {
    return  `${this.firstname} ${this.lastname} {age: ${this.age}, email: ${this.email}}`;  
    }
}

let person = new Person('Maria', 'Petterson', 22, 'mp@gmail.com');
console.log(person.toString());


//Get Persons
function getPersons() {
    let persons = [
        new Person('Maria', 'Petterson', 22, 'mp@gmail.com'),
        new Person(),
        new Person('stafen', 'lersson', 25),
        new Person('peter', 'Jansson', 24)
    ];
    return persons;
}


console.log(getPersons());

//Circle
class Circle{
    constructor(radius){
        this.radius = radius;
    }
    get diameter() {
        return this.radius*2;
    }
    set diameter(c){
        this.radius=c/2;
    }
    area(){
        return Math.PI*Math.pow(this.radius,2);
    }
}
let c = new Circle(2);

console.log(`Radius: ${c.radius}`);

console.log(`Diameter: ${c.diameter}`);

console.log(`Area: ${c.area()}`);

c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area()}`);


//Point Distance
class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    static distance(p1,p2){
        let a = p1.x - p2.x;
        let b = p1.y - p2.y;
        
        return Math.sqrt( a*a + b*b );
    }
}
let p1 = new Point(5, 5);

let p2 = new Point(9, 8);

console.log(Point.distance(p1, p2));
