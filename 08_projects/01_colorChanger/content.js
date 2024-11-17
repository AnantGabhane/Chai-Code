// const buttons = document.querySelectorAll('.button');
// const body = document.querySelectorAll('body');

// // console.log(body);
// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener('click', function (e) {
//     console.log(e);
//     console.log(e.target);
//     if (e.target.id === 'grey') {
//       body.style.backgroundColor === e.target.id;
//     }
//   });
// });

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body'); // Get the first body element

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'grey'; // Assign the color to the body's background
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = 'white'; // Assign the color to the body's background
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = 'blue'; // Assign the color to the body's background
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow'; // Assign the color to the body's background
    }
  });
});
