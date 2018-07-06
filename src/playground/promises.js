/*
const promise = new Promise((resolve, reject) => {
  setTimeout(() =>{
    resolve('this is resolved shiznit');
  }, 3000);
});
*/

const promise = new Promise((resolve, reject) => {
  setTimeout(() =>{
    reject('danger DANGER');
  }, 3000);
});

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log('error ', error )
})
