//REDUCE
//making a new object with all previous objects as its value
const usersObject = users.reduce((usersObject, user) => {
  usersObject[user.name] = user.age;
  return usersObject;
}, {});
console.log(usersObject);

//FILTER and REDUCE
//add the total price of all the groceries from the groceries dept using filter and reduce methods
const purchaseItems = [
    {
        name: 'apples',
        dept: 'groceries',
        price: 2.49
    },
    {
        name: 'bread',
        dept: 'groceries',
        price: 2.99
    },
    {
        name: 'batteries',
        dept: 'electronics',
        price: 5.80
    },
    {
        name: 'eggs',
        dept: 'groceries',
        price: 3.99
    },
    {
        name: 't-shirts',
        dept: 'apparel',
        price: 9.99
    }
];
let groceryTotal= purchaseItems
  .filter(dept => dept.dept === 'groceries')
  .reduce((sum, price) => sum + price.price, 0);

console.log(groceryTotal);
// groceryTotal should be: 9.47

//REDUCE
//concatenating (flattening) array elements into one array using reduce
const movies = [
  ['Big Fish', 'Matrix', 'Back to the Future'],
  ['Coco', 'Congo', 'Fargo'],
  ['Star Wars', 'Star Treck', 'The Lion King']
];
  //using the SPREAD operation (...) to place elements of an array into another array
const flatMovies = movies
  .reduce((arr, innerMovies) => [...arr, ...innerMovies], []);
console.log(flatMovies);
//new array of flatMovies ['Big Fish'...'The Lion King']

//REDUCE and MAP
//create array with favorite titles of every user
const readers = [
  {
    name: 'Samir',
    age: 27,
    favoriteBooks:[
      {title: 'The Iliad'},
      {title: 'The Brothers Karamazov'}
    ]
  },
  {
    name: 'Angela',
    age: 33,
    favoriteBooks:[
      {title: 'Tenth of December'},
      {title: 'Cloud Atlas'},
      {title: 'One Hundred Years of Solitude'}
    ]
  },
  {
    name: 'Beatrice',
    age: 42,
    favoriteBooks:[
      {title: 'Candide'}
    ]
  }
];

const usersFavoriteBook = readers
  .reduce((arr, favoriteBook) => [...arr, ...favoriteBook.favoriteBooks], [])
  .map(favorite => favorite.title);
console.log(usersFavoriteBook);
// Result: ['The Iliad', 'The Brothers Karamazov', 'Tenth of December', 'Cloud Atlas', 'One Hundred Years of Solitude', 'Candide'];


//REDUCE
//Using reduce method, flatten the customerNames array of arrays.
const customerNames = [
    [ "John", "Sandy", "Tyrone", "Elizabeth", "Penny" ],
    [ "Barry", "Wanda", "Jamal", "Hayden" ],
    [ "Portia", "Pam", "Philip" ]
];
let flattenedCustomerNames = customerNames
  .reduce((arr, names) => [...arr, ...names], []);
console.log(flattenedCustomerNames);
// flattenedCustomerNames should be: ["John", "Sandy", "Tyrone", "Elizabeth", "Penny", "Barry", "Wanda", "Jamal", "Hayden", "Portia", "Pam", "Philip"]

//REDUCE
//extract all the customer hobbies into their own array.
const customers = [
  {
    name: "Tyrone",
    personal: {
      age: 33,
      hobbies: ["Bicycling", "Camping"]
    }
  },
  {
    name: "Elizabeth",
    personal: {
      age: 25,
      hobbies: ["Guitar", "Reading", "Gardening"]
    }
  },
  {
    name: "Penny",
    personal: {
      age: 36,
      hobbies: ["Comics", "Chess", "Legos"]
    }
  }
];
let hobbies = customers
  .reduce((arr, hobby) => [...arr, ...hobby.personal.hobbies], []);
console.log(hobbies);
// hobbies should be: ["Bicycling", "Camping", "Guitar", "Reading", "Gardening", "Comics", "Chess", "Legos"]
