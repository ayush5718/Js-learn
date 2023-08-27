const arr=[1,2,3,4]

for (const val of arr) {  // basic syntax of forof loop
    // console.log(val);
}


const map=new Map();   // synatax of map
map.set('Name',"Aayush")      // to set the key and value in map the syntax is - map.set('key', value)
map.set('email',"ayush@google.com")

for (const [key,value] of map) 
{
    // console.log(key,'-',value);   // it will just print the key value of the map
}


//+++++++++++++++++++++++++++++++++++++++++++++  for in loop 
const language={
    c:"Dennis Richie",
    cc:"Bjorne Sturtu"
}

for (const key in language) {  // this is forin loop syntax and this is used for object in js
    // console.log(key);  // this will print key 
}
for (const key in language) {  
   // console.log(key,"-",language[key]);  //  through this we can access both key and value of an object 
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++ foreach property 

const names=["Aayush","Nawlesh","devashish","gurmeet"]

names.forEach( (val)=> {   // accessing each item of an array by foreach    by arrow callbackfunction
  // console.log(val);  //printing the value of an array
})
