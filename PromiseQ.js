//Q1

// let p = new Promise((resolve,reject) => {
//     reject(Error("It Fails!!"));
// })
// p.catch(error => console.error(error.message));
// p.catch(error => console.error(error.message));
// p.catch(error => console.error(error.message));
// p.catch(error => console.error(error.message)); //we can catch error as many as times

//Q2

// let p = new Promise((resolve,reject) => {
//     reject(Error("It Fails!!"));
// })
// .catch(error => console.error(error.message))//it will return nothing just output the message
// .then(error => console.log(error)); //undefined

//Q3

// new Promise((resolve,reject)=>{
//       resolve("Success");
// }).then(()=>{
//     throw Error("On noes!");
// }).catch(error => {return "actually, that worked"
// }).then(message => console.log(message));

//Q4

// Promise.resolve("success")
// .then(data => {return data.toUpperCase()})
// .then(data => console.log(data));

//Q5

// Promise.resolve("Success")
// .then(()=>{throw new Error("go forward")})
// .catch(error => {return "go forward 2"})
// .then((data)=> {throw new Error("go forward 3")})
// .catch(error => console.log(error.message))

//Q6

// const promise = new Promise(res => res(2));
// promise.then((v)=>{console.log(v); return v*2;})
// .then((v)=>{console.log(v); return v*2;})
// .finally((v) => {
//   console.log(`${v}, finally`); //note that finally will not except the parameter or return value, but this code will not throw error but value in it will be undefined.
//   return v*2;
// }) 
// .then((v)=>{console.log(v);})