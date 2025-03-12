- fetch is a feature provided by nodejs
-  fetch() method starts process of fetching a resource from the network, returning a promise which is fullfilled once response is available 
-  if promise provides an error code 404 where do you get it resolve or reject then answer is that you'll get it in response  
-  fetch promise only rejects when a network error is encountered 
-  fetch promise does not reject on HTTP errors 
-  In JS, fetch has high priority call back  queue meaning fetch tasks will be given high priority and will be executed first 
-  fetch performs 2 actions
  1. reserves memory - data : _______ undefined or empty - 
     contains 2 arrys 
     1. on-fullfilled [ ] - this is promised resolution = resolve 
     2. on-rejection [ ]- this is promised rejection = reject

2. Handles web browser based API or NOde APi (we need resouce to make request and these resources are provided by either one of them )- makes a network request  
  - if we get data respose back from network request then it goes either into on-fullfilled or on-rejection array

    - after successful request the value of on-fullfulled is assigned to data and it sends this data to global memory 