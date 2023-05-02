// class School {
//     constructor(options) {
//        this._name = options.name;
//        this.owner = options.owner;
//        this.number = options.number;
//        this.location = options.location;
//        this.established = options.established;
//        this.age = new Date().getFullYear() - this.established;
//     }
 
//     get name() {
//        return this._name;
//     }
 
//     set name(value) {
//        if (value.length < 3) {
//           console.log('Имя слишком короткое');
//           return;
//        }
//        this._name = value;
//     }
//  }
 
//  var school = new School({
//     name: 'Есенин',
//     owner: 'Aaa',
//     number: 25,
//     location: 'Nukus',
//     established: 2010,
//  });
 
//  console.log(school);

















// class Time {
//     constructor(options) {
//        this.time = options.time;
//     }
 
//     clock() {
//        var date = new Date();
//        var hours = date.getHours();
//        var minut = date.getMinutes();
//        var sec = date.getSeconds();
//        console.log(`${hours}:${minut}:${sec}`);
//     }
 
//     startClock() {
//        var self = this;
//        this.id = setTimeout(function start() {
//           self.clock();
//           this.id = setTimeout(start, 1000);
//        }, 1000);
//     }
 
//     stopClock() {
//        clearTimeout(this.id);
//     }
 
//     startTimer() {
//        var timer = new Date();
//        timer.setHours(this.time[0], this.time[1], this.time[2]);
 
//        this.idTimer = setTimeout(function start() {
//           timer = new Date(timer.getTime() - 1000);
//           console.log(`${timer.getHours()}:${timer.getMinutes()}:${timer.getSeconds()}`);
//           this.idTimer = setTimeout(start, 1000);
//        }, 1000);
//     }
 
//     stopTimer(){
//        clearTimeout(this.idTimer);
//     }
//  }
 
//  var clock = new Time({
//     time: [2, 30, 10]
//  });
 
//  clock.startTimer();














// class Animal{
//     constructor(options){
//        this.name = options.name;
//        this.speed = options.speed;
//        this.color = options.color;
//     }
 
//     run(value){
//        this.speed = value;
//     }
 
//     stop(){
//        this.speed = 0;
//     }
//  }
 
//  class Dog extends Animal{
//     constructor(options){
//        super(options);
//        this.breed = options.breed;
//     }
 
//     run(value){
//        super.run(value);
//        console.log(`${this.name} бежит`);
//     }
 
//     stop(){
//        super.stop();
//        console.log(`${this.name} стоит на месте`);
//     }

//  }
 
//  var dog = new Dog({
//     name: 'Max',
//     speed: 50,
//     color: 'black',
//     breed: 'Buldog'
//  });
 
//  console.log(dog);



















// class Group {
//     constructor(options) {
//        this.name = options.name;
//        this.owner = options.owner;
//        this.admins = options.admins;
//        this.active = options.active;
//        this.members = options.members;
//        this.established = options.established;
//     }
 
//     assignAdmins(member) {
//        if (this.members.indexOf(member) != -1) {
//           this.admins.push(member);
//        }
//     }
 
//     deleteAdmins(member) {
//        this.admins = this.admins.filter(function (el) {
//           return member != el;
//        });
//     }
 
//  }
 
//  class WebGroup extends Group {
//     constructor(options){
//        super(options);
//        this.status = options.status;
//     }
 
//     assignAdmins(member) {
//        super.assignAdmins(member);
//        console.log(this.admins);
//     }
 
//     deleteAdmins(member) {
//        super.deleteAdmins(member);
//        console.log(this.admins);
//     }
//  }
 
//  var webGroup = new WebGroup({
//     name: 'Web developers',
//     owner: 'Admin',
//     admins: [],
//     active: true,
//     status: 'public',
//     members: ['Aaa', 'Bbb', 'Ccc'],
//     established: new Date(2020, 01, 01)
//  });




















// class Person {
//     constructor(options) {
//        this.name = options.name;
//        this.surname = options.surname;
//        this.year = options.year;
//        this.address = options.address;
//     }
 
//     fullname() {
//        return this.name + ' ' + this.surname;
//     }
 
//     age() {
//        return new Date().getFullYear() - this.year;
//     }
//  }
 
//  class Worker extends Person {
//     constructor(options) {
//        super(options);
//        this.profession = options.profession;
//        this.salary = options.salary;
//     }
 
//     salaryPerYear() {
//        return this.salary * 12;
//     }
//  }
 
//  var Kate = new Worker({
//     name: 'Kate',
//     surname: 'Karter',
//     year: 1990,
//     address: 'Nukus street',
//     profession: 'web programmer',
//     salary: 2000
//  });
 












// class Transport {
//     constructor(data) {
//        this._color = data.color;
//        this._model = data.model;
//        this._madeBy = data.madeBy;
//        this._madeDate = data.madeDate;
//     }
 
//     get model() {
//        return this._model;
//     }
 
//     get madeBy() {
//        return this._madeBy;
//     }
 
//     get madeDate() {
//        return this._madeDate;
//     }
 
//     get color() {
//        return this._color;
//     }
 
//     set color(value) {
//        if (typeof value == 'string') {
//           this._color = value;
//        }
//        else throw new Error('Something went wrong');
//     }
 
//     info() {
//        console.log(JSON.stringify(this, null, 2));
//     }
//  }
 
//  class Car extends Transport {
//     constructor(data) {
//        super(data);
//        this.owner = data.owner;
//        this.price = data.price;
//     }
 
//     sell(owner, price) {
//        if (typeof owner == 'string') {
//           this.price = price;
//           this.owner = owner;
//        }
//        else throw new Error('Name is spelled incorrectly');
//     }
//  }
 
//  var car = new Car({
//     color: 'red',
//     model: 'Aaa',
//     madeBy: 'Lacetti',
//     madeDate: new Date(2019),
//     owner: 'Bbb',
//     price: 3000
//  });
 
//  car.info();


















// class Book {
//     constructor(data) {
//        this._author = data.author;
//        this.edition = data.edition;
//        this._publisher = data.publisher;
//        this.paperColor = data.paperColor;
//        this.yearOfIssue = data.yearOfIssue;
//     }
 
//     get author() {
//        return this._author;
//     }
 
//     get publisher() {
//        return this._publisher;
//     }
 
//     renewal(renewalObj) {
//        this.edition++;
//        this.yearOfIssue = renewalObj.date;
//        this.paperColor = renewalObj.paperColor;
//     }
//  }
 
//  class MathBook extends Book {
//     constructor(data) {
//        super(data);
//        this.page = data.page;
//        this._direction = data.direction;
//     }
 
//     get direction() {
//        return this._direction;
//     }
//  }
 
//  var math = new MathBook({
//     page: 200,
//     edition: 2,
//     author: 'Aaa',
//     yearOfIssue: 2010,
//     paperColor: 'white',
//     publisher: 'OReilly',
//     direction: 'Mathematic'
//  });















// class Polygon {
//     constructor(data) {
//        this.width = data.width;
//        this.height = data.height;
//        this.corners = data.corners;
//     }
//  }
 
//  class Square extends Polygon {
//     constructor(data) {
//        super(data);
//        this.name = data.name;
//        this._area = data.width * data.height;
//     }
 
//     get area() {
//        return this._area;
//     }
 
//     set area(value) {
//        this._area = value;
//     }
//  }
 
//  var square = new Square({
//     width: 20,
//     height: 10,
//     corners: 4,
//     name: 'Square',
//  });




















// class Employee {
//     constructor(data) {
//        this.age = data.age;
//        this._surname = data.surname;
//        this.birthDate = data.birthDate;
//        this._firstname = data.firstname;
//     }
 
//     set age(value) {
//        if (typeof value == 'Number') {
//           this._age = +val;
//        } else throw new Error('Value must be Number');
//     }
 
//     set firstname(value) {
//        if (typeof val === 'string') {
//           this._name = value;
//        }
//        else throw new Error('Value must be String!');
//     }
 
//     get fullName() {
//        return this._firstName + ' ' + this.surname;
//     }
//  }
 
//  class Manager extends Employee {
//     constructor(data) {
//        super(data);
//        this.subordinates = [];
//        this.salary = data.salary;
//     }
 
//     addEmployee(employee) {
//        this.subordinates.push(employee);
//     }
//  }
 
//  var manager = new Manager({
//     age: 20,
//     salary: 2000,
//     surname: 'Aaa',
//     birthDate: 1990,
//     firstname: 'Bbb',
//  });















// class User{
//     constructor(data){
//        this.name = data.name;
//        this.age = data.age;
//        this.email = data.email;
//     }
 
//     get name(){
//        return this.name;
//     }
 
//     sendMessage(value){
//        this.email = value;
//     }
//  }
 
//  class Administrator extends User{
//     constructor(data){
//        super(data);
//        this._role = data.role;
//     }
 
//     get role(){
//        return this._role;
//     }
 
//     set role(role){
//        this._role = role;
//     }
//  }
 
//  var admin = new Administrator({
//     name: 'John',
//     age: 20,
//     email: 'admin@gmail.com',
//     role: 'admin'
//  });