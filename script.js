let h1 = document.querySelectorAll(".counter");

let arr = Array.from(h1);

// let stop = setInterval(() => {
//   if (count < 50) {
//     count++;
//     h1.innerHTML = count;
//   } else {
//     clearInterval(stop);
//   }
// }, 100);

arr.map((item) => {
  let count = 0;

  let stop = setInterval(() => {
    count++;
    item.innerHTML = count;
    if (count == item.dataset.number) {
      clearInterval(stop);
    }
  }, item.dataset.speed / item.dataset.number);
});
