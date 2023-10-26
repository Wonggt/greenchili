navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   profile.classList.remove('active');
}

profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   navbar.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   profile.classList.remove('active');
}

function loader(){
   document.querySelector('.loader').style.display = 'none';
}

function fadeOut(){
   setInterval(loader, 2000);
}

window.onload = fadeOut;

document.querySelectorAll('input[type="number"]').forEach(numberInput => {
   numberInput.oninput = () =>{
      if(numberInput.value.length > numberInput.maxLength) numberInput.value = numberInput.value.slice(0, numberInput.maxLength);
   };
});


// JavaScript function to handle the print functionality
function printOrder(element) {
  // Find the closest box element containing the order details
  var boxElement = element.closest(".box");
  
  // Create a new window for printing
  var printWindow = window.open("", "_blank");
  
  // Write the order details to the new window
  printWindow.document.write("<html><head><title>Print Order</title></head><body>");
  printWindow.document.write(boxElement.innerHTML);
  printWindow.document.write("</body></html>");
  
  // Print the new window
  printWindow.print();
}
