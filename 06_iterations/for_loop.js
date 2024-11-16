// for

//variable decleration; condition check and if true -> start the loop after the check -> after conditions in scope are completely fullfilled -- if false exit the loop; increment the varible  
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is being printed");   
    }
    // console.log(element);
    
}

let MyArray = ["flash","batman","superman"]

for (let i = 0; i < MyArray.length; i++) {
    const element = MyArray[i];
    console.log(element);   
}

// brea1

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break //breaks the flow of {control flow }code execution and directly jumps out of loop
    }
    console.log(`value of i is ${index}`);
    
}

// continue 
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue //doesn't print index for when this condition is met; but code will continue to run
    }
    console.log(`value of i is ${index}`);
    
}