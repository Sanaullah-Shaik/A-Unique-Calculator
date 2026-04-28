
const display = document.getElementById('input-holder');

const buttons = document.querySelectorAll('.number-pad');

buttons.forEach(btn => {
  btn.addEventListener('click', (event) => {
  
    const char = event.target.innerText;

    if (char === 'C') {
    
      display.value = ""; 
    } 
    else if (char === '=') {
    
      try {
 
        display.value = eval(display.value);
      } catch (error) {
       
        display.value = "Error";
      }
    } 
    else {
      display.value += char;
    }
  });
});
