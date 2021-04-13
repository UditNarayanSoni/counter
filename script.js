// Set initial count:
let count = 0;

// Select value & buttons:
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
// console.log(btns);

// Count logic:
btns.forEach(function (btn){
  btn.addEventListener("click", function(e){
    // console.log(e.currentTarget); which button is clicked:
    const style = e.currentTarget.classList;
    
    if(style.contains("decrease")) {
      count --;
    }
    else if(style.contains("increase")){
      count ++;
    }
    else{
      count = 0;
    }
    // setting color after count: 
    if(count > 0){
      value.style.color = "#0fab03";
      value.style.fontSize = '3rem';
    }
    else if(count < 0){
      value.style.color = "#fa003a";
      value.style.fontSize = '3rem';
    }
    if(count === 0){
      value.style.color = "#222";
      value.style.fontSize = '3rem';
    }
    value.textContent = count;
  });
});