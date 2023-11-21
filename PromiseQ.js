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

//race
// const promise1 = new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), 1000));
// const promise2 = new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), 500));
// const promise3 = new Promise((_, reject) => setTimeout(() => reject('Promise 3 rejected'), 200));

// const racePromise = Promise.race([promise1, promise2, promise3]);

// racePromise.then(
//   result => console.log('Resolved:', result),
//   error => console.log('Rejected:', error)
// );

// Output:
// Rejected: Promise 3 rejected

// const fn = async (n)=>{
//    await new Promise(res => setTimeout(res,100));
//    return n*n;
// }

// const timeLimit = function(fn,t){
//    return async function(...args){
//          const executionPro = fn(...args);
//          const timeout = new Promise((_, reject) => setTimeout(()=> reject("Time Limit Exceeded"),t));

//          try {
//             const result = await Promise.race([executionPro, timeout]);
//             return {"resolved": result, "time": Math.min(t, performance.now())};
//         } catch (err) {
//             return {"rejected": err, "time": Math.min(t, performance.now())};
//         }
//    }
// }
// const limit = timeLimit(fn,100);

// limit(5).then(console.log);


// var TimeLimitedCache = function() {
//    this.cache = new Map();
// };

// TimeLimitedCache.prototype.set = function(key, value, duration) {
//    const isKeyPresent = this.cache.has(key);

//    if(isKeyPresent){
//      const [, prevTime] = this.cache.get(key);
//      clearTimeout(prevTime);
//    }

//    const timekey = setTimeout(()=>{
//        this.cache.delete(key);
//    }, duration);

//    this.cache.set(key, [value, timekey]);
//    return isKeyPresent;
// };


// TimeLimitedCache.prototype.get = function(key) {
//    if(!this.cache.has(key)){
//        return -1;
//    }

//    const [value, ] = this.cache.get(key);
   
//    return value;
// };


// TimeLimitedCache.prototype.count = function() {
//    return this.cache.size;
// };

// const timeLimitedCache = new TimeLimitedCache()
// console.log(timeLimitedCache.set(1, 42, 1000));
// console.log(timeLimitedCache.set(1, 45, 3000));
// console.log(timeLimitedCache.get(1));
// console.log(timeLimitedCache.count());
