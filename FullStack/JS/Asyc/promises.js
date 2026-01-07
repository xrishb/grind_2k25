// a promise represents a value that is not yet available but will be (or not) in the future    
// has three states: pending, fullfilled, rejected
// once it leaves pending, it is settled forever

// create a promise
const myPromise =  new Promise((resolve, reject) => {
    const success = true;

    if(success) {
        resolve("success!");
    } else {
        reject("failed!");
    }
});

myPromise.then(succeeded => console.log(`we have ${succeeded}`)).catch(failed => console.log(`we have ${failed}`));

