// .textContent  - it shows the all content which is present (hidden text)
// .innerText -  it show just the text of any element (not hidden text)
// .innerHtml - while the inner html gives the all value if any html is written in element

// document.getElementById('id')  // to select the element by its id
//document.getElementByClassName('classname')  // to select the element by its clas
// document.querySelector('. classname, #id')  // single element selection 
// document.querySelectorAll('h2') // multiple selection

const parent = document.getElementById('parent')

const children= (parent.children)

const arr = Array.from(children);
arr.forEach((val)=>{
          console.log(val.innerText)  // this will print all the inner text of the parent 
})
 