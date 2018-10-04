const loadingBarItemEl = document.querySelector(".loading-bar__item");
const thirdLoadEl = document.querySelector(".btn-30");
const sixthLoadEl = document.querySelector(".btn-60");
const fullLoadEl = document.querySelector(".btn-100");

let first = 1;
thirdLoadEl.addEventListener("click", function() {
  let loadingBar = setInterval(function() {
    if( first === 30 ) {
      clearInterval(loadingBar);
    } else if (first >30) {
      first--;
      loadingBarItemEl.style.width = first + "%";
    } else {
      first++;
      loadingBarItemEl.style.width = first + "%"; 
    }
  }, 10)
})

sixthLoadEl.addEventListener("click", function() {
  let loadingBar = setInterval(function() {
    if (first === 60) {
      clearInterval(loadingBar);
    } else if (first > 60) {
      first--;
      loadingBarItemEl.style.width = first + "%";
    } 
    else {
      first++;
      loadingBarItemEl.style.width = first + "%";
    }
  }, 10)
})


fullLoadEl.addEventListener("click", function() {
  let loadingBar = setInterval(function() {
    if(first >= 100) {
      clearInterval(loadingBar);
    } else {
      first++;
      loadingBarItemEl.style.width = first + "%";
    }
  }, 10)
})


// let width = 60;
// let loadingBar = setInterval(function() {
//   if(width >= 100) {
//     clearInterval(loadingBar);
//   } else {
//     width++;
//     loadingBarItemEl.style.width = width + "%";
//   }
// }, 10)







// let count = 0;
// let incrementor = setInterval(function() {
//   if(count == 10) {
//     clearInterval(incrementor)
//   } else {
//   count ++;
//   console.log(count)
//   }
// }, 1000)

