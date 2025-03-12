Promise
- promise object represents that eventual completion or failure of an asynchronous operation and it's resulting value
- promise is in one of three states
  - pending -> initial state
  - fulfilled -> operation was completed successfully
  - rejected -> operation was rejected / failed 

- In js using new keyword you get new instance of the object 
- promises reduce callback hell - meaning recurring callbacks will be avoided using promise object

- way 1 : .then().catch()
- way 2 : Async await 

Async wait for task to finish if successful returns result else throws error