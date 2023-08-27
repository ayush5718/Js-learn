//+++++++++++++++++++++++++++++++++++++++++++++++++++++=  filter in js
const arr=[1,2,3,4,5,6,7,8,9,10]

const values= arr.filter((num)=> num>4 ) //khud se return  // filter is a property in js which return the value which forEach cant this is very useful function 


const newValues=arr.filter((val)=>{
    return val>6
})
//console.log(newValues);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++ playing with database

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 const userBooks= books.filter((book)=>{
    if (book.genre==="Fiction")
    {
        return book;
    }
  })

  // console.log(userBooks);

  //+++++++++++++++++++++++++++++++ chaining concept in js 

  const array=[1,2,3,4,5,6,7,8,9,10]

  const newNums= array.map((num)=> num*10).map((val)=>val+2).filter((value)=> value>50)  // this is the syntax of chaning 

  console.log(newNums) 




  

