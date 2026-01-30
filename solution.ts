//Problem 1
// const formatValue = (value : number | string | boolean) =>{
//     if(typeof value=== 'string'){
//         return value.toString().toLocaleUpperCase();
//     }
//     else if(typeof value ==='number'){
//         return value*10;
//     }
//     else{
//         return !value;
//     }
// }


//Problem 2
// const getLength = (value : string | number[]) =>{
//     if(Array.isArray(value)){
//         return value.length;
//     }
//     else{
//         return value.length
//     }
// }

//Problem 3

// class Person {
//     name : string;
//     age : number;

//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }

//     getDetails(){
//       return `Name: ${this.name}, Age: ${this.age}`
//     }
// }


//Problem 4
// type Item = {
//     title:string;
//     rating : number;
// }
// const filterByRating = (arrItem : Item[]) : Item[] =>{
//     return arrItem.filter(item => item.rating >=4)
// }



//Problem 5: 
// type User = {
//     id : number;
//     name: string;
//     email : string;
//     isActive : boolean;
// }

// const filterActiveUsers = (user : User[]): User[] =>{
//     return  user.filter(newUser => newUser.isActive === true);
// }

//Problem 6:

interface Book {
    title : string;
    author : string;
    publisherYear : number;
    isAvailable : boolean;
}

function printBookDetails(book : Book){
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publisherYear}, Available: ${book.isAvailable ? "Yes" : 'No'} `)
}



