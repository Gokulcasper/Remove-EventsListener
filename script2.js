const spanEl = document.querySelector("header span");
const handelSpanEl = (event) => {
  console.log("Event Happen");

  // Remove Once:
  //   spanEl.removeEventListener("click", handelSpanEl); //Recursion (one time only click)
};

// Adding an EventListener :
// spanEl.addEventListener("click", handelSpanEl);

spanEl.addEventListener("click", handelSpanEl, { once: true });

// Removing an EventListener :
// setTimeout(() => {
//   spanEl.removeEventListener("click", handelSpanEl);
// }, 5000);
