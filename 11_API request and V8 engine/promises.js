// method 1
const promise1 = new Promise(function (resolve, reject) {
    //Do async tasks
    // like call the db 
    setTimeout(function () {
        console.log("Async task is processing");
        resolve()
    }, 1000)
});

promise1.then(function () {
    console.log("Promise consumed");
})

// method 2
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2 is processing");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Promise 2 consumed");
})

const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "anant", email: "anant@gmail.com" })
    }, 1000)
})

promise3.then(function (user) {
    console.log(user);
})

const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "anant gabhane", email: "anant@gmail.com" })
        } else {
            reject("Error: Something went wrong")
        }
    }, 1000)
});

promise4.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})

const promise5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: "anant@gmail.com" })
        } else {
            reject("Error: JS went wrong")
        }
    }, 1000)
});

async function consumePromise5() {
    try {
        const response = await promise5;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromise5()

// method 1
async function getAllusers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E:", error);

    }
}
getAllusers() //returns 10 users as list of dicts

// method 2



fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error));
