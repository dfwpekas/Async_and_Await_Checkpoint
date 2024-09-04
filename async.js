// // Task 01:

// // Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs.

async function iterateWithAsyncAwait(values) {
    try {
      for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(value);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

const values = [1,2,3,4,5];
iterateWithAsyncAwait(values);


// // Task 02:

// // Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.

async function awaitCall() {
    try {
      const response = await fetch('https://api.github.com/users/octocat'); // Using GitHub API
      const data = await response.json();
      console.log('GitHub User Data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }   
awaitCall();

// // Task 03:

// Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. If the API call fails, catch the error and log a user-friendly error message.

// An error handler has been included in the awaitCall function to catch any errors that occur during the API call. If an error occurs, the error message is logged to the console.

async function chainedAsyncFunctions() {
    try {
      await asyncFunction1();
      await asyncFunction2();
      await asyncFunction3();
    } catch (error) {
      console.error('Error in chained functions:', error);
    }
  }
  
  async function asyncFunction1() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Async Function 1');
        resolve()
      }, 1000);
    });
  }
  
  async function asyncFunction2() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Async Function 2');
        resolve();
      }, 1000);
    });
  }
  
  async function asyncFunction3() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Async Function 3');
        resolve();
      }, 1000);
    });
  }
  
  // Call the chained functions
  chainedAsyncFunctions();

//   Task 04:

//   Awaiting Concurrent Requests: Create an async function concurrentRequests that makes two API calls concurrently using Promise.all(). Log the combined results after both requests have resolved.

async function concurrentRequests() {
    try {
      const [response1, response2] = await Promise.all([
        fetch('https://api.github.com/users/octocat'), // Fetches GitHub user "octocat" data
        fetch('https://api.publicapis.org/entries/ASf9') // Sample public API (may change)
      ]);
  
      const data1 = await response1.json();
      const data2 = await response2.json();
  
      console.log('Combined Results:', data1, data2);
    } catch (error) {
      console.error('Error in concurrent requests:', error);
    }
  }

// concurrentRequests();

// Task 05:

// Awaiting Parallel Calls: Write a function parallelCalls that takes an array of URLs and fetches data from each URL concurrently using Promise.all(). Log the responses once all requests are complete.


async function parallelCalls() {
    try {
      const urls = [
        'https://api.github.com/users/octocat',
      ];
  
      const responses = await Promise.all(urls.map(url => fetch(url)));
      const data = await Promise.all(responses.map(response => response.json()));
      console.log('Parallel Results:', data);
    } catch (error) {
      console.error('Error in parallel calls:', error);
    }
  }
  
  parallelCalls();