// const Myarray1 = [0,1,2,3,4,5];
// const Myarray2 = ["Saktiman","Shivaji","Hulk"];
// const Myarray3 = new Array("abc","def","hij","jkl");
// const Myarray4 = new Array("Mari","Chadti","Bogharani","Ma","Pata","Mareche");
// console.log(Myarray1);
// console.log(Myarray2);
// console.log(Myarray3);
// console.log(Myarray4);

// Myarray4.push(6);
// console.log(Myarray4);

// Myarray4.pop()
// console.log(Myarray4);

// Myarray4.pop();
// console.log(Myarray4);

// Myarray4.pop();
// console.log(Myarray4);

// const Myarray5 = new Array("hi","hello","by","near","by","me");
// Myarray5.unshift("Hum Tumare Hai");
// console.log(Myarray5);


// const Myarray6 = new Array("Ek","Tha","Salman");
// Myarray6.shift();
// Myarray6.shift();
// console.log(Myarray6);


// shift() remove the first elements.....
// const Myarray7 = new Array("Nayo","Lagta","Dil","Mera");
// console.log(`Main Array = ${Myarray7}`);
// const mm1 = Myarray7.shift(2);
// console.log(`mm1 = ${mm1}`);
// console.log(`Main Array = ${Myarray7}`);

//Include() method meaning when the string is available so its given true weather its given false.
// console.log(`Include = ${Myarray7.includes("forthis")}`);

// This method is return Index Index()
// console.log(`IndexOf = ${Myarray7.indexOf(5)}`);  



// join() method given join the string its like concate 
// const Myarray8 = new Array("One","Two","Three","Four");
// const Myarray9 = new Array("Kay","Lap","Chap","Nai");
// const NewOne = Myarray8.join(Myarray9);
// console.log(NewOne);

// const Myarray10 = new Array("Chinta","Mani","Sirf");
// const Myarray11 = new Array("Lokik","Sukha","Deti","hai");
// const Newtwo = Myarray10.join(Myarray11);



// slice() its given copy of array in output, Its not affect the change value in array  
// const Myarray12 = new Array("ram","shyam","Ghanshyam","shri","ram","jai");
// console.log("Main Array 1 = " + Myarray12);
// const Myarray13 = Myarray12.slice(0,3);
// console.log("Slice = " + Myarray13);


// splice() method is affect the main array, and its remove the items in array and change the main array.
// const Myarray14 = new Array("Abnormal","Paisa","Pachad","Bhagto");
// console.log("Main Array 2 = " + Myarray14);     
// const Myarray15 = Myarray14.splice(0,4);
// console.log("splice = " + Myarray15);    

// const Myarray15 = ["name","surname","goodname","bothnames"];
// const Myarray16 = Myarray15.splice(0,1);
// console.log("MainArray_1 = " + Myarray15);
// console.log("Splice = " + Myarray16+"</br></br>");

// const Myarray17 = ["Vagina","Deva","Shivam","Kashimira"];
// const Myarray18 = Myarray17.slice(0,2);
// console.log("Main_Array_2 = " + Myarray17);
// console.log("Slice = " + Myarray18);



// concate() this method is given to concatination of string.
// const m1 = ["one","two","three","four","five"];
// const m2 = ["six","seven","eight","nine","ten"];
// const m3 = m1.concat(m2);
// console.log("This is an M3 = " + m3);

// const l1 = ["kem","cho","majama","tame"];
// const l2 = ["tam","kya","gyata","mojma","revu"];
// const l3 = l1.concat(l2);
// console.log("This is an L3 = " + l3);



// [...q1,...w1] this is an sprade opertor and its given dinamic values to store in array. 
// const q1 = ["A1","A2","A3","A4","A5"];
// const w1 = ["B1","B2","B3","B4","B5"];
// const e1 = [...q1,...w1];
// console.log(e1.concat(w1));



/*
1)Array.isArray() method is used for, it is an array or not, 
when its an array so its give true other wise false

2) flat() method is used for sorting the array, Meaning many types of defind inside the 
   array its given single output of array like this ["a","b","c","d"]
*/

// const r1 = ["shivam","palekar",["nagri","dev",["maro","Dhavirika","valo"["e_jarmar",["varshe"],"Dhavirika"]]]];
// const r2 = r1.flat(Infinity);
// console.log(Array.isArray(r2)); 
// console.log(Array.from(r2));