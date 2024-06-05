# Promises

##

        Promise is for eventual completion of task.It is an object in JS.
        => Solution to callback hell.

        let promise = new Promise((resolve,reject)=>{....})
        resolve and reject are callbacks

A JAVASCRIPT Promise object can be:
=> Pending : The result is undefined
=> Resolved : The result is a value(fulfilled) => resolve(result)
=> Rejected : The result is an error object => reject(error)
