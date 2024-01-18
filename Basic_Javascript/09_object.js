// const JSuser = {
//     Name:"rahul",
//     Surname:"joshi",
//     Address: "Junagadh"
// }
// console.log(JSuser["Name"]);
// console.log(JSuser[Surname]);
// console.log(JSuser.Name);
// console.log(JSuser.Surname);
// console.log(JSuser.Address);
// change the values
// console.log(JSuser.Name = "Hi I am rahul");
// console.log(JSuser.Surname = "Priyakhant");
// console.log(JSuser.Address = "Valsaad");



// const one = {
//     one: "one",
//     two: "two",
//     three: "three"
// }
// console.log(one["one"]);
// console.log(one["two"]);
// console.log(one["three"]);
// console.log(one.one);
// console.log(one.two);
// console.log(one.three);
// change the values
// console.log(one.one = "Ohh this is one");
// console.log(one.two = "this is an two");
// console.log(one.three = "this is an three");

// const three = {
//     A:"Aone",
//     B:"Bone",
//     C:"Cone"
// }
// console.log(three["A"]);
// console.log(three["B"]);
// console.log(three["C"]);
// console.log(three.A);
// console.log(three.B);
// console.log(three.C);
// with change the values
// console.log(three.A = "oh one");
// console.log(three.B = "oh two");
// console.log(three.C = "oh three");

// example:1 symbol with object
// const symbol = Symbol("key1");
// const obj1 = {
//     Name : "rahul",
//     Surname : "mishra",
//     Location : "Ahemdabad",
//     [symbol]: "key1"
// }
// console.log(obj1["symbol"]);
// console.log(obj1.Name = "this is an rahul");
// console.log(obj1.Surname = "this is an joshi");
// console.log(obj1.Location = "Junagadh Location");
// console.log(obj1[symbol] = "this is an key symbol");


// example: 2 with symbol and object.
// const symbol = Symbol("Oh Shit Done");
// //console.log(typeof symbol);
// const obj2 = {
//     Name : "pooname",
//     surname : "shivashtav",
//     [symbol] : "this is an symbol"
// }
// console.log(obj2[symbol]);


// example : 3 object with symbol
// const symbol = Symbol("Ohe Ohe");
// const obj3 = {
//     This : "this",
//     That : "that",
//     Me : "me",
//     [symbol] : "this an symbol"
//}
// console.log(obj3[symbol] = "This is an symbol");
// console.log(obj3.This = "Hello Friends");
// console.log(obj3.That = "I am rahul joshi");
// console.log(obj3.Me = "What about you");

// console.log(obj3.This);
// console.log(obj3.That);
// console.log(obj3.Me);
// console.log(Object.freeze(obj3));

// adding the function 
// obj3.greeting = function(){
//     console.log("With Adding the function");
// }
// console.log(obj3.greeting());

// obj3.greeting1 = function(){
//     console.log("This an another function");
// }
// console.log(obj3.greeting1());

// const obj4 = {
//     one : "One",
//     two : "Two",
//     three : "Three",
//     name : "Rahul Joshi"
// }

//Adding the functions-1
// obj4.fun1 = function(x,y){
//     console.log("Number one function");
//     const A = x + y;
//     return A;
// // }
// console.log(obj4.fun1(5,5));

//Adding the functions-2
// obj4.fun2 = function(){
//     console.log("This is an another function");    
// }
// console.log(obj4.fun2());

// obj4.fun3 = function(){
//     console.log(`This is an function ${this.name}`);
// }
// console.log(obj4.fun3());

// obj4.fun4 = function(){
//     console.log(`ONE =  ${this.one}`);
// }
// console.log(obj4.fun4());

// obj4.fun5 = function(){
//     console.log(`TWO = ${this.two}`);
// }
// console.log(obj4.fun5());

// obj4.fun6 = function(){
//     console.log(`THREE ${this.three}`);
// }
// console.log(obj4.fun6());