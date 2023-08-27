// .textContent  - it shows the all content which is present (hidden text)
// .innerText -  it show just the text of any element (not hidden text)
// .innerHtml - while the inner html gives the all value if any html is written in element

// document.getElementById('id')  // to select the element by its id
//document.getElementByClassName('classname')  // to select the element by its clas
// document.querySelector('. classname, #id')  // single element selection 
// document.querySelectorAll('h2') // multiple selection

// const parent = document.getElementById('parent')

// const children= (parent.children)

// const arr = Array.from(children);
// arr.forEach((val)=>{
//         //  console.log(val.innerText)  // this will print all the inner text of the parent 
// })
//  console.log(parent.firstElementChild)

// +++++++++++++++++++++++++++++++++++++++++ append child 

// const element= document.createElement('div')  //creating a element

// element.className="js-div" // adding a class name
// element.innerText="This is div created by js" // adding inside text 
// element.setAttribute("id","one")  // setting an id to the div
// element.style.backgroundColor="red" // changing the bg-color
// element.style.padding="15px" // adding padding to the div

// document.body.appendChild(element)  // appending all the property change by the js

// edit the html code by replacwith method

// const child1=document.querySelector(".child-1")
// child1.innerHTML="child-js"

// const child2=document.createElement("div")
// child2.className="child-2"
// child2.innerHTML="This is child 1"
// child1.replaceWith(child2)  // child1 will be replaces with child2

// console.log(child1);
