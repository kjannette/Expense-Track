/*

OBJECT DESTRUCTURING:

const person = {
  name: "nigger jim",
  age: 103,
  location: {
    city: "Biloxi",
    temp: 101
  }
};

const { name, age } = person;

console.log(`${name} is ${age}.`)

const { city: place, temp: temperature } = person.location;

if (place && temperature){
  console.log(`It's ${temperature} in ${place}`)
}

const book = {
  title: 'A Storm of Swords',
  author: 'George RR Martin',
  publisher: {
    name: 'Bantam'
  }
};

const { name: publisherName = "self"} = book.publisher;

console.log(publisherName);

*/

const address = ['123 Main St', 'Jiggaville', 'Ohio', '48123'];

const [street, city, state, zip] = address;


console.log(`You are in ${city}, ${state}!`)
