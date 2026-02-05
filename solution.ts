//Problem 1
const formatValue = (value : number | string | boolean) =>{
    if(typeof value=== 'string'){
        return value.toString().toLocaleUpperCase();
    }
    else if(typeof value ==='number'){
        return value*10;
    }
    else{
        return !value;
    }
}


//Problem 2
const getLength = (value : string | number[]) =>{
    if(Array.isArray(value)){
        return value.length;
    }
    else{
        return value.length
    }
}

//Problem 3

class Person {
    name : string;
    age : number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getDetails(){
      return `Name: ${this.name}, Age: ${this.age}`
    }
}


//Problem 4
type Item = {
    title:string;
    rating : number;
}
const filterByRating = (arrItem : Item[]) : Item[] =>{
    return arrItem.filter(item => item.rating >=4)
}



//Problem 05 
type User = {
    id : number;
    name: string;
    email : string;
    isActive : boolean;
}

const filterActiveUsers = (user : User[]): User[] =>{
    return  user.filter(newUser => newUser.isActive === true);
}

//Problem 6

interface Book {
    title : string;
    author : string;
    publisherYear : number;
    isAvailable : boolean;
}

function printBookDetails(book : Book){
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publisherYear}, Available: ${book.isAvailable ? "Yes" : 'No'} `)
}


//Problem 7 

const getUniqueValues =<T> (arr1:T[], arr2:T[]) =>{
    const result : T[] = [];

     
    for(let i=0; i<arr1.length; i++){
        let exists = false;

        for(let j=0; j<result.length; j++){
            if(arr1[i] === result[j]){
                exists = true;
                break;
            }
        }
        if(!exists){
            result.push(arr1[i])
        }
    }

    
    for(let i=0; i<arr2.length; i++){
        let exists = false;
        for(let j=0; j<result.length;j++){
            if(arr2[i] === result[j]){
                exists = true;
                break;
            }
        }
        if(!exists){
            result.push(arr2[i])
        }
    }

    return result;
}


//Problem 08

type Product ={
    name: string;
    price : number;
    quantity : number;
    discount ?: number; 
}

const calculateTotalPrice = (products : Product[]) =>{
    if(products.length === 0){
        return 0;
    }

    return products.map(product =>{
        const total = product.price * product.quantity;

        if(product.discount !== undefined){
            return total - (total * product.discount) /100;
        }
         return total
    }).reduce((sum, curr) => sum + curr, 0);
}







