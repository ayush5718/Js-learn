const mysym= Symbol('@')

const obj1={
    fullName:"Aayush kumar",
    email:"ayush@google.com",
    deparment:"AEIE",
    [mysym]:"%"
}
const obj2={
    firstName:"Aayush",
    lastName:"Kumar",
}

const obj3={...obj1, ...obj2}  // cloning of an object by spread operator 
// console.log(obj.name);  to access the any value by dot operator 
// console.log(obj["email"]);  to acess the properties of an object by [] operator 
// console.log(obj[mysym]); to acess the symbol data type 

// console.log(obj3);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++   accesing array of object

const obj4=[
    {
        email:"ayush@google.com"
    },
    {
        id:"43abc"
    },
    {

    }
]
// console.log(obj4[0].email);  // accesing the first object of array 
// console.log(obj1);
// console.log(Object.keys(obj1));  // this will print all the key of an object 
// console.log(Object.values(obj1)); // this will print all the values of an object 

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=  de structure object value

const {fullName:name}=obj1
console.log(name);