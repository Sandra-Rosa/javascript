/*
In JavaScript, asynchronous programming is a programming paradigm that allows code to execute in a non-blocking way, meaning that the program can continue executing other code while waiting for a long-running task (such as an API call or a file I/O operation) to complete.
Promises have three states:
Pending: The initial state of a Promise, before it has been resolved or rejected.
Resolved: The Promise has been fulfilled successfully, and a value is available.
Rejected: The Promise has failed, and a reason for the failure is available.
*/
//example of using Promises to asynchronously fetch data from an API:
fetch("https://api.example.com/data")
  .then(response => {
    if (!response.ok) {
      throw new Error("API response was not OK");
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
